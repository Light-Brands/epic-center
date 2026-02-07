/**
 * Living Light Platform — Franchisee Management API
 *
 * Manages the franchise network: discovery, onboarding, status tracking.
 */

import { Octokit } from "@octokit/rest";

// ── Types ────────────────────────────────────────────────────────────────────

interface Franchisee {
  repo_name: string;
  church_name: string;
  city: string;
  state: string;
  lead_name: string;
  lead_email: string;
  github_user: string;
  installed: string;
  status: "active" | "onboarding" | "suspended";
  compliance_score: number;
  last_activity: string;
}

interface OnboardRequest {
  church_name: string;
  city: string;
  state: string;
  lead_name: string;
  lead_email: string;
  lead_title?: string;
  github_user?: string;
}

interface NetworkSummary {
  total_franchisees: number;
  active: number;
  onboarding: number;
  compliant: number;
  at_risk: number;
  non_compliant: number;
  average_score: number;
}

// ── Franchisee Service ───────────────────────────────────────────────────────

export class FranchiseeService {
  private octokit: Octokit;
  private org: string;

  constructor(token: string, org: string = "Light-Brands") {
    this.octokit = new Octokit({ auth: token });
    this.org = org;
  }

  /**
   * List all franchisees in the network
   */
  async listFranchisees(): Promise<Franchisee[]> {
    const repos = await this.octokit.paginate(this.octokit.repos.listForOrg, {
      org: this.org,
      type: "all",
    });

    const franchiseeRepos = repos.filter((r) =>
      r.name.startsWith("living-light-church-")
    );

    const franchisees: Franchisee[] = [];
    for (const repo of franchiseeRepos) {
      try {
        const configResponse = await this.octokit.repos.getContent({
          owner: this.org,
          repo: repo.name,
          path: ".living-light-config.json",
        });

        if ("content" in configResponse.data) {
          const config = JSON.parse(
            Buffer.from(configResponse.data.content, "base64").toString()
          );

          franchisees.push({
            repo_name: repo.name,
            church_name: config.church_name || repo.name,
            city: config.city || "",
            state: config.state || "",
            lead_name: config.lead_name || "",
            lead_email: config.lead_email || "",
            github_user: config.github_user || "",
            installed: config.installed || repo.created_at || "",
            status: "active",
            compliance_score: 0,
            last_activity: repo.updated_at || "",
          });
        }
      } catch {
        // Config not found — repo may be in onboarding
        franchisees.push({
          repo_name: repo.name,
          church_name: repo.name
            .replace("living-light-church-", "")
            .replace(/-/g, " "),
          city: "",
          state: "",
          lead_name: "",
          lead_email: "",
          github_user: "",
          installed: repo.created_at || "",
          status: "onboarding",
          compliance_score: 0,
          last_activity: repo.updated_at || "",
        });
      }
    }

    return franchisees;
  }

  /**
   * Get network summary statistics
   */
  async getNetworkSummary(): Promise<NetworkSummary> {
    const franchisees = await this.listFranchisees();
    const active = franchisees.filter((f) => f.status === "active");
    const onboarding = franchisees.filter((f) => f.status === "onboarding");

    const scores = active.map((f) => f.compliance_score);
    const avgScore =
      scores.length > 0
        ? scores.reduce((a, b) => a + b, 0) / scores.length
        : 0;

    return {
      total_franchisees: franchisees.length,
      active: active.length,
      onboarding: onboarding.length,
      compliant: active.filter((f) => f.compliance_score >= 70).length,
      at_risk: active.filter(
        (f) => f.compliance_score >= 50 && f.compliance_score < 70
      ).length,
      non_compliant: active.filter((f) => f.compliance_score < 50).length,
      average_score: Math.round(avgScore),
    };
  }

  /**
   * Onboard a new franchisee
   */
  async onboard(request: OnboardRequest): Promise<{
    repo_url: string;
    message: string;
  }> {
    const citySlug = request.city.toLowerCase().replace(/\s+/g, "-");
    const repoName = `living-light-church-${citySlug}`;

    // Check if repo already exists
    try {
      await this.octokit.repos.get({
        owner: this.org,
        repo: repoName,
      });
      return {
        repo_url: `https://github.com/${this.org}/${repoName}`,
        message: `Repository already exists for ${request.city}`,
      };
    } catch {
      // Good — doesn't exist yet
    }

    // Trigger onboarding workflow
    await this.octokit.actions.createWorkflowDispatch({
      owner: this.org,
      repo: "living-light-os",
      workflow_id: "onboard-franchisee.yml",
      ref: "main",
      inputs: {
        church_name: request.church_name,
        city: request.city,
        state: request.state,
        lead_name: request.lead_name,
        lead_email: request.lead_email,
        github_user: request.github_user || "",
      },
    });

    return {
      repo_url: `https://github.com/${this.org}/${repoName}`,
      message: `Onboarding initiated for ${request.church_name}. Repository will be ready shortly.`,
    };
  }

  /**
   * Suspend a franchisee (remove access, archive repo)
   */
  async suspend(repoName: string, reason: string): Promise<void> {
    // Archive the repo
    await this.octokit.repos.update({
      owner: this.org,
      repo: repoName,
      archived: true,
    });

    // Create an issue documenting the suspension
    try {
      // Unarchive briefly to create issue
      await this.octokit.repos.update({
        owner: this.org,
        repo: repoName,
        archived: false,
      });

      await this.octokit.issues.create({
        owner: this.org,
        repo: repoName,
        title: "[Living Light OS] Franchise Suspended",
        body: `## Franchise Suspended\n\n**Date:** ${new Date().toISOString().split("T")[0]}\n**Reason:** ${reason}\n\nThis franchise has been suspended. Repository has been archived.\n\nContact compliance@livinglightchurch.org for questions.`,
        labels: ["suspended"],
      });

      // Re-archive
      await this.octokit.repos.update({
        owner: this.org,
        repo: repoName,
        archived: true,
      });
    } catch {
      console.warn("Could not create suspension issue");
    }
  }
}
