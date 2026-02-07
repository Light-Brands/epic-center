/**
 * Living Light Platform — Compliance Dashboard
 *
 * The main dashboard view for franchisees.
 * Shows compliance score, upcoming deadlines, action items, and recent activity.
 */

"use client";

import React from "react";

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

// ── Component ────────────────────────────────────────────────────────────────

export function ComplianceDashboard({
  status,
}: {
  status: ComplianceStatus;
}) {
  const statusColor =
    status.status === "compliant"
      ? "text-emerald-600"
      : status.status === "at_risk"
        ? "text-amber-600"
        : "text-red-600";

  const statusBg =
    status.status === "compliant"
      ? "bg-emerald-50 border-emerald-200"
      : status.status === "at_risk"
        ? "bg-amber-50 border-amber-200"
        : "bg-red-50 border-red-200";

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-stone-900">
              {status.church_name}
            </h1>
            <p className="text-sm text-stone-500">
              Living Light OS Compliance Dashboard
            </p>
          </div>
          <div className={`px-4 py-2 rounded-lg border ${statusBg}`}>
            <span className={`font-semibold ${statusColor}`}>
              {status.status === "compliant"
                ? "Compliant"
                : status.status === "at_risk"
                  ? "At Risk"
                  : "Action Required"}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ScoreCard
            title="Overall Score"
            value={`${status.overall_score}%`}
            subtitle="Compliance rating"
            color={status.overall_score >= 70 ? "green" : status.overall_score >= 50 ? "amber" : "red"}
          />
          <ScoreCard
            title="14-Point Test"
            value={`${status.fourteen_point_score}/14`}
            subtitle="IRS church test"
            color={status.fourteen_point_score >= 10 ? "green" : status.fourteen_point_score >= 7 ? "amber" : "red"}
          />
          <ScoreCard
            title="Last Checked"
            value={new Date(status.last_checked).toLocaleDateString()}
            subtitle="Automated daily scan"
            color="blue"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Deadlines */}
          <section className="bg-white rounded-xl border border-stone-200 p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Upcoming Deadlines
            </h2>
            {status.upcoming_deadlines.length === 0 ? (
              <p className="text-stone-500 text-sm">No upcoming deadlines</p>
            ) : (
              <div className="space-y-3">
                {status.upcoming_deadlines.map((deadline) => (
                  <DeadlineRow key={deadline.id} deadline={deadline} />
                ))}
              </div>
            )}
          </section>

          {/* Action Items */}
          <section className="bg-white rounded-xl border border-stone-200 p-6">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Action Items
            </h2>
            {status.action_items.length === 0 ? (
              <p className="text-stone-500 text-sm">
                No action items — you're all caught up
              </p>
            ) : (
              <div className="space-y-3">
                {status.action_items.map((item) => (
                  <ActionItemRow key={item.id} item={item} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Recent Activity */}
        <section className="mt-8 bg-white rounded-xl border border-stone-200 p-6">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-2">
            {status.recent_activity.map((activity, i) => (
              <ActivityRow key={i} activity={activity} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

function ScoreCard({
  title,
  value,
  subtitle,
  color,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: "green" | "amber" | "red" | "blue";
}) {
  const colorMap = {
    green: "text-emerald-600 bg-emerald-50 border-emerald-200",
    amber: "text-amber-600 bg-amber-50 border-amber-200",
    red: "text-red-600 bg-red-50 border-red-200",
    blue: "text-blue-600 bg-blue-50 border-blue-200",
  };

  return (
    <div className={`rounded-xl border p-6 ${colorMap[color]}`}>
      <p className="text-sm font-medium opacity-75">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      <p className="text-sm mt-1 opacity-60">{subtitle}</p>
    </div>
  );
}

function DeadlineRow({ deadline }: { deadline: Deadline }) {
  const statusBadge =
    deadline.status === "overdue"
      ? "bg-red-100 text-red-700"
      : deadline.status === "due_soon"
        ? "bg-amber-100 text-amber-700"
        : "bg-stone-100 text-stone-600";

  return (
    <div className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-stone-900">{deadline.name}</p>
        <p className="text-xs text-stone-500">
          {deadline.due_date}
          {deadline.auto_handled && " · Auto-handled"}
        </p>
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded ${statusBadge}`}>
        {deadline.status.replace("_", " ")}
      </span>
    </div>
  );
}

function ActionItemRow({ item }: { item: ActionItem }) {
  const priorityColor = {
    low: "bg-stone-100 text-stone-600",
    medium: "bg-blue-100 text-blue-700",
    high: "bg-amber-100 text-amber-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <div className="py-2 border-b border-stone-100 last:border-0">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-stone-900">{item.title}</p>
          <p className="text-xs text-stone-500 mt-1">
            {item.description.slice(0, 100)}
          </p>
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ${priorityColor[item.priority]}`}
        >
          {item.priority}
        </span>
      </div>
    </div>
  );
}

function ActivityRow({ activity }: { activity: Activity }) {
  const typeIcon = {
    document: "D",
    compliance: "C",
    governance: "G",
    financial: "F",
  };

  return (
    <div className="flex items-center gap-3 py-2 border-b border-stone-100 last:border-0">
      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600">
        {typeIcon[activity.type]}
      </div>
      <div className="flex-1">
        <p className="text-sm text-stone-900">{activity.action}</p>
        <p className="text-xs text-stone-500">
          {new Date(activity.date).toLocaleDateString()}
          {activity.automated && " · Automated"}
        </p>
      </div>
    </div>
  );
}
