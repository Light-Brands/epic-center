/**
 * Living Light OS — Compliance Engine
 *
 * The brain of the franchise operating system. Runs on a schedule and manages
 * all compliance, governance, and document generation for every franchisee church.
 *
 * Architecture:
 *   - Reads church config from each franchisee repo
 *   - Checks compliance deadlines against the schedule
 *   - Generates documents when due
 *   - Deploys documents to franchisee repos via GitHub API
 *   - Reports status to the Living Light platform
 *   - Escalates to HQ when intervention is needed
 */

import { Octokit } from "@octokit/rest";

// ── Types ────────────────────────────────────────────────────────────────────

interface FranchiseeConfig {
  church_name: string;
  city: string;
  state: string;
  lead_name: string;
  lead_email: string;
  lead_title: string;
  github_user: string;
  repo_name: string;
  installed: string;
  os_version: string;
}

interface ComplianceCheck {
  id: string;
  name: string;
  category: "formation" | "governance" | "financial" | "worship" | "membership";
  frequency: "daily" | "weekly" | "monthly" | "quarterly" | "annually";
  description: string;
  check: (repo: FranchiseeRepo) => Promise<CheckResult>;
  remediate?: (repo: FranchiseeRepo) => Promise<void>;
}

interface CheckResult {
  status: "pass" | "warn" | "fail";
  message: string;
  score: number; // 0-1
  details?: Record<string, unknown>;
}

interface ComplianceReport {
  repo: string;
  church_name: string;
  date: string;
  overall_score: number;
  fourteen_point_score: number;
  checks: Array<{
    check_id: string;
    name: string;
    result: CheckResult;
  }>;
  actions_needed: string[];
}

interface FranchiseeRepo {
  owner: string;
  name: string;
  config: FranchiseeConfig;
  octokit: Octokit;
}

// ── Compliance Schedule ──────────────────────────────────────────────────────

const COMPLIANCE_SCHEDULE = {
  daily: [
    "check-repo-health",
    "check-pending-actions",
  ],
  weekly: [
    "check-worship-service-logged",
  ],
  monthly: [
    "check-bank-reconciliation",
    "score-14-point-test",
    "generate-monthly-summary",
  ],
  quarterly: [
    "check-board-meeting",
    "generate-quarterly-report",
  ],
  annually: {
    october: [
      "prepare-housing-allowance-designation",
      "prepare-compensation-review-package",
    ],
    november: [
      "draft-annual-budget",
      "finalize-housing-allowance",
    ],
    december: [
      "file-housing-allowance-designation",
      "complete-compensation-review",
      "generate-annual-compliance-package",
    ],
    january: [
      "check-state-filings-due",
    ],
  },
};

// ── Core Engine ──────────────────────────────────────────────────────────────

export class ComplianceEngine {
  private octokit: Octokit;
  private masterOrg: string;

  constructor(token: string, masterOrg: string = "Light-Brands") {
    this.octokit = new Octokit({ auth: token });
    this.masterOrg = masterOrg;
  }

  /**
   * Discover all franchisee repos in the network
   */
  async discoverFranchisees(): Promise<FranchiseeRepo[]> {
    const repos = await this.octokit.paginate(this.octokit.repos.listForOrg, {
      org: this.masterOrg,
      type: "all",
    });

    const franchiseeRepos = repos.filter((r) =>
      r.name.startsWith("living-light-church-")
    );

    const results: FranchiseeRepo[] = [];
    for (const repo of franchiseeRepos) {
      try {
        const configResponse = await this.octokit.repos.getContent({
          owner: this.masterOrg,
          repo: repo.name,
          path: ".living-light-config.json",
        });

        if ("content" in configResponse.data) {
          const config: FranchiseeConfig = JSON.parse(
            Buffer.from(configResponse.data.content, "base64").toString()
          );

          results.push({
            owner: this.masterOrg,
            name: repo.name,
            config,
            octokit: this.octokit,
          });
        }
      } catch {
        console.warn(`Could not read config for ${repo.name}`);
      }
    }

    return results;
  }

  /**
   * Run all compliance checks for a single franchisee
   */
  async runChecks(repo: FranchiseeRepo): Promise<ComplianceReport> {
    const checks = this.getActiveChecks();
    const results: ComplianceReport["checks"] = [];
    const actionsNeeded: string[] = [];

    for (const check of checks) {
      try {
        const result = await check.check(repo);
        results.push({ check_id: check.id, name: check.name, result });

        if (result.status === "fail") {
          actionsNeeded.push(`[FAIL] ${check.name}: ${result.message}`);
          if (check.remediate) {
            await check.remediate(repo);
          }
        } else if (result.status === "warn") {
          actionsNeeded.push(`[WARN] ${check.name}: ${result.message}`);
        }
      } catch (error) {
        results.push({
          check_id: check.id,
          name: check.name,
          result: {
            status: "fail",
            message: `Check error: ${error}`,
            score: 0,
          },
        });
      }
    }

    const overallScore =
      results.reduce((sum, r) => sum + r.result.score, 0) / results.length;

    const fourteenPointScore = await this.calculate14PointScore(repo);

    return {
      repo: `${repo.owner}/${repo.name}`,
      church_name: repo.config.church_name,
      date: new Date().toISOString().split("T")[0],
      overall_score: Math.round(overallScore * 100),
      fourteen_point_score: fourteenPointScore,
      checks: results,
      actions_needed: actionsNeeded,
    };
  }

  /**
   * Run compliance across the entire network
   */
  async runNetworkAudit(): Promise<ComplianceReport[]> {
    const franchisees = await this.discoverFranchisees();
    const reports: ComplianceReport[] = [];

    for (const franchisee of franchisees) {
      console.log(`Auditing: ${franchisee.config.church_name}`);
      const report = await this.runChecks(franchisee);
      reports.push(report);

      // Deploy report to franchisee repo
      await this.deployDocument(
        franchisee,
        `compliance/audit-trail/${report.date}-audit.json`,
        JSON.stringify(report, null, 2),
        `[Living Light OS] Compliance audit — ${report.date}`
      );
    }

    return reports;
  }

  /**
   * Generate and deploy a document to a franchisee repo
   */
  async deployDocument(
    repo: FranchiseeRepo,
    path: string,
    content: string,
    commitMessage: string
  ): Promise<void> {
    const encoded = Buffer.from(content).toString("base64");

    // Check if file exists
    let sha: string | undefined;
    try {
      const existing = await this.octokit.repos.getContent({
        owner: repo.owner,
        repo: repo.name,
        path,
      });
      if ("sha" in existing.data) {
        sha = existing.data.sha;
      }
    } catch {
      // File doesn't exist, that's fine
    }

    await this.octokit.repos.createOrUpdateFileContents({
      owner: repo.owner,
      repo: repo.name,
      path,
      message: commitMessage,
      content: encoded,
      sha,
      committer: {
        name: "Living Light OS",
        email: "os@livinglightchurch.org",
      },
    });
  }

  /**
   * Calculate the IRS 14-point church test score
   */
  private async calculate14PointScore(
    repo: FranchiseeRepo
  ): Promise<number> {
    let score = 0;

    const checks = [
      "formation/statement-of-faith.md", // 1. Distinct religious history
      "formation/statement-of-faith.md", // 2. Recognized creed
      "formation/church-bylaws.md", // 3. Ecclesiastical government
      "formation/articles-of-incorporation.md", // 4. Formal doctrine
      "membership/rolls", // 5. Distinct membership
      "membership/ordinations", // 6. Ordained ministers
      "programs/worship-services", // 7. Regular worship
      "programs/education", // 8. Education programs
      "membership/ordinations/curriculum-link.md", // 9. Schools for ministers
      "formation/place-of-worship.md", // 10. Own place of worship
      "programs/worship-services", // 11. Regular congregation
      "programs/public-services.md", // 12. Public services
      "formation/organizational-meeting-minutes.md", // 13. Organization
      "formation/place-of-worship.md", // 14. Established place
    ];

    for (const path of checks) {
      try {
        await this.octokit.repos.getContent({
          owner: repo.owner,
          repo: repo.name,
          path,
        });
        score++;
      } catch {
        // File/dir doesn't exist
      }
    }

    return score;
  }

  /**
   * Get checks that should run based on current date
   */
  private getActiveChecks(): ComplianceCheck[] {
    return [
      {
        id: "formation-docs",
        name: "Formation Documents Complete",
        category: "formation",
        frequency: "daily",
        description: "All required formation documents exist",
        check: async (repo) => {
          const required = [
            "formation/articles-of-incorporation.md",
            "formation/church-bylaws.md",
            "formation/statement-of-faith.md",
            "formation/organizational-meeting-minutes.md",
          ];
          let found = 0;
          for (const path of required) {
            try {
              await this.octokit.repos.getContent({
                owner: repo.owner,
                repo: repo.name,
                path,
              });
              found++;
            } catch {
              /* missing */
            }
          }
          return {
            status: found === required.length ? "pass" : "fail",
            message: `${found}/${required.length} formation documents present`,
            score: found / required.length,
          };
        },
      },
      {
        id: "governance-current",
        name: "Governance Records Current",
        category: "governance",
        frequency: "quarterly",
        description: "Board meetings held on schedule",
        check: async (repo) => {
          try {
            const contents = await this.octokit.repos.getContent({
              owner: repo.owner,
              repo: repo.name,
              path: "governance/board-minutes",
            });
            const count = Array.isArray(contents.data)
              ? contents.data.filter((f) => f.name.endsWith(".md")).length
              : 0;
            const currentQuarter = Math.ceil((new Date().getMonth() + 1) / 3);
            return {
              status: count >= currentQuarter ? "pass" : "warn",
              message: `${count} board meetings recorded (need ${currentQuarter} for current quarter)`,
              score: Math.min(count / currentQuarter, 1),
            };
          } catch {
            return {
              status: "fail",
              message: "No board meeting records found",
              score: 0,
            };
          }
        },
      },
      {
        id: "financial-reconciliation",
        name: "Bank Reconciliation Current",
        category: "financial",
        frequency: "monthly",
        description: "Monthly bank reconciliation on file",
        check: async (repo) => {
          const lastMonth = new Date();
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          const monthStr = lastMonth.toISOString().slice(0, 7);
          try {
            await this.octokit.repos.getContent({
              owner: repo.owner,
              repo: repo.name,
              path: `financials/bank-reconciliations/${monthStr}-reconciliation.md`,
            });
            return {
              status: "pass",
              message: `Reconciliation for ${monthStr} on file`,
              score: 1,
            };
          } catch {
            return {
              status: "warn",
              message: `Missing bank reconciliation for ${monthStr}`,
              score: 0,
            };
          }
        },
      },
      {
        id: "worship-services",
        name: "Worship Services Documented",
        category: "worship",
        frequency: "weekly",
        description: "Weekly worship services are being logged",
        check: async (repo) => {
          try {
            const contents = await this.octokit.repos.getContent({
              owner: repo.owner,
              repo: repo.name,
              path: "programs/worship-services",
            });
            const currentMonth = new Date().toISOString().slice(0, 7);
            const thisMonthServices = Array.isArray(contents.data)
              ? contents.data.filter((f) => f.name.startsWith(currentMonth))
                  .length
              : 0;
            const weeksElapsed = Math.ceil(new Date().getDate() / 7);
            return {
              status: thisMonthServices >= weeksElapsed ? "pass" : "warn",
              message: `${thisMonthServices} services logged this month (expected ${weeksElapsed})`,
              score: Math.min(thisMonthServices / Math.max(weeksElapsed, 1), 1),
            };
          } catch {
            return {
              status: "warn",
              message: "No worship service logs found",
              score: 0,
            };
          }
        },
      },
      {
        id: "membership-rolls",
        name: "Membership Rolls Maintained",
        category: "membership",
        frequency: "monthly",
        description: "Church membership records exist",
        check: async (repo) => {
          try {
            const contents = await this.octokit.repos.getContent({
              owner: repo.owner,
              repo: repo.name,
              path: "membership/rolls",
            });
            const hasRecords =
              Array.isArray(contents.data) &&
              contents.data.some((f) => f.name.endsWith(".md"));
            return {
              status: hasRecords ? "pass" : "warn",
              message: hasRecords
                ? "Membership rolls on file"
                : "No membership records found",
              score: hasRecords ? 1 : 0,
            };
          } catch {
            return {
              status: "warn",
              message: "Membership rolls directory not found",
              score: 0,
            };
          }
        },
      },
    ];
  }
}

// ── Document Generators ──────────────────────────────────────────────────────

export class DocumentGenerator {
  /**
   * Generate board meeting agenda
   */
  static generateBoardAgenda(config: FranchiseeConfig): string {
    const date = new Date().toISOString().split("T")[0];
    return `# Board of Elders Meeting Agenda
## ${config.church_name}

**Date:** ${date}
**Location:** ${config.city}, ${config.state}
**Called by:** ${config.lead_name}, ${config.lead_title}

---

### 1. Opening Prayer and Call to Order

### 2. Approval of Previous Meeting Minutes
- Review minutes from last quarterly meeting
- Motion to approve

### 3. Financial Report
- Review current bank balance and reconciliation
- Review tithe payments to Living Light Association
- Review any outstanding expenses

### 4. Compliance Update
- Current 14-point test score
- Any compliance actions needed
- Review Living Light OS compliance report

### 5. Ministry Report
- Worship service attendance trends
- Charitable programs update
- Community outreach activities

### 6. Membership Update
- New members
- Ordination candidates
- Membership roll review

### 7. Old Business
- [Items from previous meeting]

### 8. New Business
- [New items for discussion]

### 9. Compensation Review (if annual meeting)
- Review comparable compensation data
- Six-step review process
- Housing allowance designation (if applicable)

### 10. Closing Prayer and Adjournment

---

*Agenda generated by Living Light OS — ${date}*
`;
  }

  /**
   * Generate monthly bank reconciliation template
   */
  static generateBankReconciliation(
    config: FranchiseeConfig,
    month: string
  ): string {
    return `# Bank Reconciliation Report
## ${config.church_name}

**Period:** ${month}
**Prepared by:** Living Light OS
**Reviewed by:** [Second reviewer required]

---

### Bank Statement Summary

| Item | Amount |
|------|--------|
| Beginning Balance | $ |
| Total Deposits | $ |
| Total Withdrawals | $ |
| Ending Balance | $ |

### Reconciliation

| Item | Amount |
|------|--------|
| Bank Statement Ending Balance | $ |
| Add: Deposits in Transit | $ |
| Less: Outstanding Checks | $ |
| **Adjusted Bank Balance** | **$** |
| | |
| Book Balance (per records) | $ |
| Add: Interest Earned | $ |
| Less: Bank Fees | $ |
| **Adjusted Book Balance** | **$** |

### Reconciliation Status
- [ ] Balances match
- [ ] Reviewed by second person
- [ ] Filed in church records

### Notes

---

**Reviewer Signature:** _______________
**Date:** _______________

*Generated by Living Light OS*
`;
  }

  /**
   * Generate housing allowance designation
   */
  static generateHousingAllowance(
    config: FranchiseeConfig,
    year: number
  ): string {
    return `# Housing Allowance Designation
## ${config.church_name}

**Tax Year:** ${year}
**Designated For:** ${config.lead_name}, ${config.lead_title}
**IRC Section:** 107

---

### Resolution of the Board of Elders

WHEREAS, ${config.lead_name} serves as ${config.lead_title} of ${config.church_name}, an affiliated church of the Church of the Living Light, a 508(c)(1)(A) tax-exempt religious organization; and

WHEREAS, Section 107 of the Internal Revenue Code permits a minister of the gospel to exclude from gross income a church-designated allowance paid as part of compensation to the extent used to provide a home; and

WHEREAS, ${config.lead_name} is an ordained minister of the Living Light;

NOW, THEREFORE, BE IT RESOLVED that the Board of Elders of ${config.church_name} hereby designates **$[AMOUNT]** of ${config.lead_name}'s annual compensation for tax year ${year} as a housing allowance within the meaning of IRC Section 107.

This designation shall cover:
- Rent or mortgage payments
- Utilities (electric, gas, water, sewer, trash)
- Property taxes and insurance
- Furnishings and appliances
- Repairs and maintenance
- Other housing-related expenses

### Approval

This resolution was adopted at the Board of Elders meeting on [DATE], prior to the beginning of tax year ${year}.

| Name | Title | Signature | Date |
|------|-------|-----------|------|
| | Elder | | |
| | Elder | | |
| | Elder | | |

---

**IMPORTANT:** This designation must be adopted BEFORE the start of the tax year. The actual exclusion is limited to the lesser of: (1) this designated amount, (2) the actual housing expenses, or (3) the fair rental value of the home.

*Generated by Living Light OS — Requires board approval and signatures*
`;
  }

  /**
   * Generate the 14-point test scorecard
   */
  static generate14PointScorecard(
    config: FranchiseeConfig,
    scores: Record<string, boolean>
  ): string {
    const date = new Date().toISOString().split("T")[0];
    const total = Object.values(scores).filter(Boolean).length;

    const points = [
      ["Distinct religious history", "distinct_history"],
      ["Recognized creed and form of worship", "recognized_creed"],
      ["Definite and distinct ecclesiastical government", "ecclesiastical_gov"],
      ["Formal code of doctrine and discipline", "formal_doctrine"],
      ["Distinct religious membership", "distinct_membership"],
      ["Ordained ministers", "ordained_ministers"],
      ["Regular religious services", "regular_services"],
      ["Sunday schools or equivalent", "education_programs"],
      ["Schools for preparation of ministers", "minister_schools"],
      ["Own established place of worship", "place_of_worship"],
      ["Regular congregation", "regular_congregation"],
      ["Religious services available to public", "public_services"],
      ["Organization of and conduct of activities", "organized_activities"],
      ["Established place of worship", "established_place"],
    ] as const;

    let table = "";
    for (let i = 0; i < points.length; i++) {
      const [name, key] = points[i];
      const passed = scores[key] ?? false;
      table += `| ${i + 1} | ${name} | ${passed ? "PASS" : "NEEDS ATTENTION"} |\n`;
    }

    return `# IRS 14-Point Church Test Scorecard
## ${config.church_name}

**Date:** ${date}
**Score:** ${total}/14
**Status:** ${total >= 10 ? "COMPLIANT" : total >= 7 ? "AT RISK" : "NON-COMPLIANT"}

---

| # | Criterion | Status |
|---|-----------|--------|
${table}
---

### Scoring Guide

- **10-14 points:** Strong church status. Maintain current practices.
- **7-9 points:** At risk. Action items generated for improvement areas.
- **Below 7 points:** Non-compliant. Immediate action required. Living Light HQ notified.

### Recommendations

${total < 14 ? "Items marked NEEDS ATTENTION require action. Check your compliance dashboard for specific guidance." : "All criteria met. Continue current operations."}

---

*Scored by Living Light OS Compliance Engine — ${date}*
`;
  }
}

// ── Entry Point ──────────────────────────────────────────────────────────────

export async function main() {
  const token = process.env.LIVING_LIGHT_GITHUB_TOKEN;
  if (!token) {
    console.error("LIVING_LIGHT_GITHUB_TOKEN environment variable required");
    process.exit(1);
  }

  const engine = new ComplianceEngine(token);
  const reports = await engine.runNetworkAudit();

  console.log("\n=== Network Audit Complete ===\n");
  for (const report of reports) {
    console.log(
      `${report.church_name}: ${report.overall_score}% (14-pt: ${report.fourteen_point_score}/14)`
    );
    if (report.actions_needed.length > 0) {
      for (const action of report.actions_needed) {
        console.log(`  ${action}`);
      }
    }
  }
}
