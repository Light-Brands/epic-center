# CLAUDE.md — Transformational Epicenter

Claude-specific notes. **Canonical rules live in [`AGENTS.md`](./AGENTS.md). Read it first, every session.**

## Session start

1. Read `AGENTS.md` (full).
2. `git log --oneline -20` — the deal/messaging is in active flux. Recent commits are the source of truth on framing, numbers, and team list. The README, `ARCHITECT.md`, and `docs/architecture/` are stale.
3. No `CHANGELOG.md` or `TODO.md` exist in this repo. Look at `docs/DAN_ACTION_ITEMS.md` for outstanding human items, but treat git log as the canonical "what's happening".
4. Confirm what mode the deal is in. Right now: **lender pivot** — `/pablo` page + `docs/offering/bridge-loan/` are live; `/offer` (Jeff partnership) is dead but retained.

## Worktree rule

This repo lives inside the QIE Client Hub. **Before modifying code**, if other Claude sessions might be touching this project, run from the QIE root:

```
bin/qie worktree auto epic-center-<short-slug>
```

Then `cd` into the new worktree and work there. Skip the worktree only when:
- Single text-only edit to one MD file you'll commit in <30s.
- Pure read/exploration with no edits.

If you're about to run `npm run dev`, `npm run build`, or `npm run build:data-room`, **always use a worktree** — those mutate `.next/` and `public/documents/` and will collide with another session.

## Claude-specific gotchas

- **Vercel plugin auto-injects skill prompts** when you Read `package.json`, `next.config.js`, `*.tsx`, etc. — `bootstrap`, `next-upgrade`, `next-cache-components`, `react-best-practices` will all be suggested. Decline them unless the task is genuinely about Vercel bootstrap, a Next.js version bump, or PPR/cache-components work. Reading a file for context never requires loading them.
- **Next.js is pinned at 14.2.21.** Do not auto-upgrade. App Router is in use but there are no server components, server actions, route handlers, or middleware — every page is `'use client'`. If you propose RSC patterns, you're proposing an architectural change; flag it explicitly.
- **`md-to-pdf` uses Puppeteer**. `npm run build:data-room` downloads/launches headless Chromium. Slow first run. Don't invoke it just to "verify the build" — it writes large binary PDFs that will show up in your diff. Only run when MD source actually changed.
- **No tests, no test runner.** Do not write `npm test` claims. If you need verification, the only option is `npm run build` + `npm run lint`.
- **Bash etiquette (per QIE root rules):** stage explicitly (`git add path/to/file`), and run `git diff --cached --stat` in the same bash block as `git commit`, gated on expected file count. Multiple Claude sessions may be modifying the shared index.
- **Never commit `_qie` (symlink), `_bmad`, `node_modules/`, `.next/`, `.env*`, `tsconfig.tsbuildinfo`, or anything under `_archive/` / `living-light-os/`.** All gitignored, but easy to accidentally stage with `git add -A` (don't use it).
- **Deal-number sync rule (load-bearing):** if you change `$10M`, `9%`, `36mo`, `$11.9M`, the close timeline, or the makewhole on `/pablo`, also update `docs/offering/bridge-loan/{BRIDGE_LOAN_TERM_SHEET,ONE_PAGER,LENDER_OUTREACH_EMAIL,COMPS_AND_VALUATION,HML_OUTREACH_PACKAGE}.md`. Mismatch = dead lender meeting.
- **Framing rule:** TEC is the sponsor raising. Light Brands facilitates. Do not invert. (See commit `c5274a7`.)
- **Privacy:** Chief Medical Advisor stays anonymized. Do not surface their name.

## When in doubt

Recent commits > stale planning docs. `docs/architecture/*` describes a backend platform that does not exist in this repo and never will here.
