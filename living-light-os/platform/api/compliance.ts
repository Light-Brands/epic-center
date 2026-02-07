/**
 * Living Light Platform — Compliance API
 *
 * API routes for compliance status, scoring, and reporting.
 * Reads data from franchisee GitHub repos via Octokit.
 */

import { Octokit } from "@octokit/rest";

// ── Types ────────────────────────────────────────────────────────────────────

interface ComplianceStatus {
  church_name: string;
  overall_score: number;
  fourteen_point_score: number;
  status: "compliant" | "at_risk" | "non_compliant";
  last_checked: string;
  upcoming_deadlines: Deadline[];
  action_items: ActionItem[];
  recent_activity: Activity[];
}

interface Deadline {
  id: string;
  name: string;
  due_date: string;
  category: string;
  status: "upcoming" | "due_soon" | "overdue";
  auto_handled: boolean;
}

interface ActionItem {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "critical";
  category: string;
  due_date: string;
}

interface Activity {
  date: string;
  action: string;
  type: "document" | "compliance" | "governance" | "financial";
  automated: boolean;
}

// ── Compliance Service ───────────────────────────────────────────────────────

export class ComplianceService {
  private octokit: Octokit;
  private org: string;

  constructor(token: string, org: string = "Light-Brands") {
    this.octokit = new Octokit({ auth: token });
    this.org = org;
  }

  /**
   * Get full compliance status for a franchisee
   */
  async getStatus(repoName: string): Promise<ComplianceStatus> {
    const config = await this.getConfig(repoName);
    const score = await this.calculateScore(repoName);
    const deadlines = await this.getUpcomingDeadlines(repoName);
    const actions = await this.getActionItems(repoName);
    const activity = await this.getRecentActivity(repoName);

    let status: ComplianceStatus["status"] = "compliant";
    if (score.fourteen_point < 7) status = "non_compliant";
    else if (score.fourteen_point < 10) status = "at_risk";

    return {
      church_name: config.church_name,
      overall_score: score.overall,
      fourteen_point_score: score.fourteen_point,
      status,
      last_checked: new Date().toISOString(),
      upcoming_deadlines: deadlines,
      action_items: actions,
      recent_activity: activity,
    };
  }

  /**
   * Get compliance status for all franchisees (admin view)
   */
  async getNetworkStatus(): Promise<
    Array<{ repo: string; church_name: string; status: ComplianceStatus }>
  > {
    const repos = await this.octokit.paginate(this.octokit.repos.listForOrg, {
      org: this.org,
      type: "all",
    });

    const franchiseeRepos = repos.filter((r) =>
      r.name.startsWith("living-light-church-")
    );

    const results = [];
    for (const repo of franchiseeRepos) {
      try {
        const status = await this.getStatus(repo.name);
        results.push({
          repo: repo.name,
          church_name: status.church_name,
          status,
        });
      } catch {
        console.warn(`Could not get status for ${repo.name}`);
      }
    }

    return results;
  }

  /**
   * Trigger document deployment to a franchisee repo
   */
  async deployDocument(
    repoName: string,
    documentType: string,
    content: string
  ): Promise<void> {
    await this.octokit.repos.createDispatchEvent({
      owner: this.org,
      repo: repoName,
      event_type: "deploy-document",
      client_payload: {
        document_type: documentType,
        content: Buffer.from(content).toString("base64"),
      },
    });
  }

  /**
   * Onboard a new franchisee via the platform
   */
  async onboardFranchisee(params: {
    church_name: string;
    city: string;
    state: string;
    lead_name: string;
    lead_email: string;
    github_user?: string;
  }): Promise<{ repo_url: string; setup_issue_url: string }> {
    // Trigger the onboarding workflow
    await this.octokit.actions.createWorkflowDispatch({
      owner: this.org,
      repo: "living-light-os",
      workflow_id: "onboard-franchisee.yml",
      ref: "main",
      inputs: {
        church_name: params.church_name,
        city: params.city,
        state: params.state,
        lead_name: params.lead_name,
        lead_email: params.lead_email,
        github_user: params.github_user || "",
      },
    });

    const citySlug = params.city.toLowerCase().replace(/\s+/g, "-");
    const repoName = `living-light-church-${citySlug}`;

    return {
      repo_url: `https://github.com/${this.org}/${repoName}`,
      setup_issue_url: `https://github.com/${this.org}/${repoName}/issues/1`,
    };
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private async getConfig(
    repoName: string
  ): Promise<{ church_name: string; city: string; state: string }> {
    try {
      const response = await this.octokit.repos.getContent({
        owner: this.org,
        repo: repoName,
        path: ".living-light-config.json",
      });
      if ("content" in response.data) {
        return JSON.parse(
          Buffer.from(response.data.content, "base64").toString()
        );
      }
    } catch {
      // Fallback
    }
    const city = repoName
      .replace("living-light-church-", "")
      .replace(/-/g, " ");
    return { church_name: `Living Light Church of ${city}`, city, state: "" };
  }

  private async calculateScore(
    repoName: string
  ): Promise<{ overall: number; fourteen_point: number }> {
    let fourteenPoint = 0;
    const checkPaths = [
      "formation/statement-of-faith.md",
      "formation/church-bylaws.md",
      "formation/articles-of-incorporation.md",
      "formation/organizational-meeting-minutes.md",
      "membership/rolls",
      "membership/ordinations",
      "programs/worship-services",
      "programs/education",
      "formation/place-of-worship.md",
      "programs/public-services.md",
    ];

    for (const path of checkPaths) {
      try {
        await this.octokit.repos.getContent({
          owner: this.org,
          repo: repoName,
          path,
        });
        fourteenPoint++;
      } catch {
        /* missing */
      }
    }

    return {
      overall: Math.round((fourteenPoint / 14) * 100),
      fourteen_point: fourteenPoint,
    };
  }

  private async getUpcomingDeadlines(
    _repoName: string
  ): Promise<Deadline[]> {
    const now = new Date();
    const deadlines: Deadline[] = [];

    // Generate deadlines based on compliance schedule
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Weekly: worship service
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    deadlines.push({
      id: "worship-service",
      name: "Document Worship Service",
      due_date: nextSunday.toISOString().split("T")[0],
      category: "worship",
      status: "upcoming",
      auto_handled: true,
    });

    // Monthly: bank reconciliation (5th of month)
    if (day < 5) {
      deadlines.push({
        id: "bank-recon",
        name: "Bank Reconciliation",
        due_date: `${now.getFullYear()}-${String(month).padStart(2, "0")}-05`,
        category: "financial",
        status: day >= 3 ? "due_soon" : "upcoming",
        auto_handled: true,
      });
    }

    // Quarterly: board meeting
    const quarterMonth = [3, 6, 9, 12];
    for (const qm of quarterMonth) {
      if (month <= qm) {
        deadlines.push({
          id: `board-meeting-q${quarterMonth.indexOf(qm) + 1}`,
          name: `Q${quarterMonth.indexOf(qm) + 1} Board Meeting`,
          due_date: `${now.getFullYear()}-${String(qm).padStart(2, "0")}-15`,
          category: "governance",
          status: month === qm && day > 8 ? "due_soon" : "upcoming",
          auto_handled: false,
        });
        break;
      }
    }

    // Annual: housing allowance (Oct-Nov)
    if (month >= 9 && month <= 11) {
      deadlines.push({
        id: "housing-allowance",
        name: "Housing Allowance Designation",
        due_date: `${now.getFullYear()}-11-15`,
        category: "financial",
        status: month === 11 ? "due_soon" : "upcoming",
        auto_handled: false,
      });
    }

    return deadlines;
  }

  private async getActionItems(
    repoName: string
  ): Promise<ActionItem[]> {
    const items: ActionItem[] = [];

    // Check for open compliance issues
    try {
      const issues = await this.octokit.issues.listForRepo({
        owner: this.org,
        repo: repoName,
        labels: "compliance",
        state: "open",
      });

      for (const issue of issues.data) {
        items.push({
          id: `issue-${issue.number}`,
          title: issue.title,
          description: issue.body?.slice(0, 200) || "",
          priority: issue.labels.some(
            (l) => (typeof l === "string" ? l : l.name) === "action-required"
          )
            ? "high"
            : "medium",
          category: "compliance",
          due_date: issue.created_at,
        });
      }
    } catch {
      /* repo may not have issues enabled */
    }

    return items;
  }

  private async getRecentActivity(
    repoName: string
  ): Promise<Activity[]> {
    const activities: Activity[] = [];

    try {
      const commits = await this.octokit.repos.listCommits({
        owner: this.org,
        repo: repoName,
        per_page: 10,
      });

      for (const commit of commits.data) {
        const message = commit.commit.message;
        const isAutomated = message.includes("[Living Light OS]");

        let type: Activity["type"] = "document";
        if (message.includes("compliance")) type = "compliance";
        else if (message.includes("governance") || message.includes("board"))
          type = "governance";
        else if (
          message.includes("financial") ||
          message.includes("reconciliation")
        )
          type = "financial";

        activities.push({
          date: commit.commit.committer?.date || "",
          action: message.split("\n")[0],
          type,
          automated: isAutomated,
        });
      }
    } catch {
      /* repo may be empty */
    }

    return activities;
  }
}
