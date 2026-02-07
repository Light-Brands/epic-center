/**
 * Living Light Platform — Admin Console
 *
 * Network-wide admin view for Living Light HQ.
 * Shows all franchisees, compliance status, and management tools.
 */

"use client";

import React, { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Franchisee {
  repo_name: string;
  church_name: string;
  city: string;
  state: string;
  lead_name: string;
  lead_email: string;
  status: "active" | "onboarding" | "suspended";
  compliance_score: number;
  fourteen_point_score: number;
  last_activity: string;
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

// ── Component ────────────────────────────────────────────────────────────────

export function AdminConsole({
  franchisees,
  summary,
}: {
  franchisees: Franchisee[];
  summary: NetworkSummary;
}) {
  const [showOnboard, setShowOnboard] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "at_risk" | "onboarding">("all");

  const filtered = franchisees.filter((f) => {
    if (filter === "all") return true;
    if (filter === "active") return f.status === "active" && f.compliance_score >= 70;
    if (filter === "at_risk") return f.compliance_score < 70 && f.status === "active";
    if (filter === "onboarding") return f.status === "onboarding";
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold">
              Living Light OS — Admin Console
            </h1>
            <p className="text-sm text-stone-400">
              Franchise Network Management
            </p>
          </div>
          <button
            onClick={() => setShowOnboard(!showOnboard)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            + Onboard Franchisee
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Network Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <SummaryCard label="Total" value={summary.total_franchisees} />
          <SummaryCard label="Active" value={summary.active} color="green" />
          <SummaryCard label="Onboarding" value={summary.onboarding} color="blue" />
          <SummaryCard label="Compliant" value={summary.compliant} color="green" />
          <SummaryCard label="At Risk" value={summary.at_risk} color="amber" />
          <SummaryCard label="Non-Compliant" value={summary.non_compliant} color="red" />
          <SummaryCard label="Avg Score" value={`${summary.average_score}%`} color="blue" />
        </div>

        {/* Onboard Form */}
        {showOnboard && <OnboardForm onClose={() => setShowOnboard(false)} />}

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(["all", "active", "at_risk", "onboarding"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                filter === f
                  ? "bg-stone-900 text-white"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {f === "all" ? "All" : f === "at_risk" ? "At Risk" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Franchisee Table */}
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Church
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Location
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Lead
                </th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Score
                </th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  14-Point
                </th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Status
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-stone-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f) => (
                <FranchiseeRow key={f.repo_name} franchisee={f} />
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-stone-500 text-sm">
              No franchisees match this filter
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function SummaryCard({
  label,
  value,
  color = "stone",
}: {
  label: string;
  value: number | string;
  color?: "green" | "amber" | "red" | "blue" | "stone";
}) {
  const colorMap = {
    green: "text-emerald-600",
    amber: "text-amber-600",
    red: "text-red-600",
    blue: "text-blue-600",
    stone: "text-stone-900",
  };

  return (
    <div className="bg-white rounded-lg border border-stone-200 p-4">
      <p className="text-xs text-stone-500 font-medium">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${colorMap[color]}`}>{value}</p>
    </div>
  );
}

function FranchiseeRow({ franchisee }: { franchisee: Franchisee }) {
  const scoreColor =
    franchisee.compliance_score >= 70
      ? "text-emerald-600 bg-emerald-50"
      : franchisee.compliance_score >= 50
        ? "text-amber-600 bg-amber-50"
        : "text-red-600 bg-red-50";

  const statusBadge = {
    active: "bg-emerald-100 text-emerald-700",
    onboarding: "bg-blue-100 text-blue-700",
    suspended: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
      <td className="px-4 py-3">
        <p className="text-sm font-medium text-stone-900">
          {franchisee.church_name}
        </p>
        <p className="text-xs text-stone-500">{franchisee.repo_name}</p>
      </td>
      <td className="px-4 py-3 text-sm text-stone-600">
        {franchisee.city}, {franchisee.state}
      </td>
      <td className="px-4 py-3">
        <p className="text-sm text-stone-900">{franchisee.lead_name}</p>
        <p className="text-xs text-stone-500">{franchisee.lead_email}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <span className={`text-sm font-bold px-2 py-1 rounded ${scoreColor}`}>
          {franchisee.compliance_score}%
        </span>
      </td>
      <td className="px-4 py-3 text-center text-sm font-medium text-stone-900">
        {franchisee.fourteen_point_score}/14
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${statusBadge[franchisee.status]}`}
        >
          {franchisee.status}
        </span>
      </td>
      <td className="px-4 py-3 text-right">
        <a
          href={`https://github.com/Light-Brands/${franchisee.repo_name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          View Repo
        </a>
      </td>
    </tr>
  );
}

function OnboardForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-stone-900">
          Onboard New Franchisee
        </h2>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600"
        >
          Close
        </button>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Church Name
          </label>
          <input
            type="text"
            placeholder="Living Light Church of Austin"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Austin"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            State
          </label>
          <input
            type="text"
            placeholder="TX"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Lead Name
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Lead Email
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            GitHub Username (optional)
          </label>
          <input
            type="text"
            placeholder="janesmith"
            className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Create Franchisee Repository
          </button>
        </div>
      </form>
    </div>
  );
}
