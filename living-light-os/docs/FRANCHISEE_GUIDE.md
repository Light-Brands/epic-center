# Living Light OS — Franchisee Guide

**Welcome to the Living Light network.** This guide explains how Living Light OS works and what you need to do.

---

## The Short Version

1. You run the installer. It creates your church's private GitHub repository.
2. Your formation documents are generated automatically.
3. Compliance checks run daily — you get a dashboard showing your status.
4. Documents like board meeting agendas, bank reconciliation templates, and housing allowance designations are generated for you automatically.
5. When the Living Light updates templates or policies, your repo gets updated.
6. You do your ministry. The system handles the paperwork.

---

## Getting Started

### Step 1: Run the Installer

```bash
curl -fsSL https://os.livinglightchurch.org/install | bash
```

Or download and run manually:
```bash
git clone https://github.com/Light-Brands/living-light-os.git
cd living-light-os/installer
chmod +x install.sh
./install.sh
```

The installer will:
- Set up Git and GitHub CLI on your machine (if not already installed)
- Authenticate you with GitHub
- Ask for your church details (city, state, your name)
- Create your private church repository
- Populate your formation documents
- Share the repo with Living Light HQ for oversight

### Step 2: Review Your Formation Documents

After installation, your local files are at:
```
~/living-light/living-light-church-{your-city}/
├── formation/           ← Review these first
│   ├── articles-of-incorporation.md
│   ├── church-bylaws.md
│   ├── statement-of-faith.md
│   ├── organizational-meeting-minutes.md
│   └── ein-application.md
├── compliance/          ← Auto-managed (don't edit)
├── governance/          ← Board minutes go here
├── financials/          ← Reconciliations, compensation
├── membership/          ← Member rolls, ordinations
└── programs/            ← Worship services, charitable programs
```

Review the formation documents. Have them reviewed by legal counsel. These are drafts generated from the Living Light template.

### Step 3: Complete Your Setup

| Action | Description | Deadline |
|--------|-------------|----------|
| File articles of incorporation | File with your state's Secretary of State | Within 30 days |
| Apply for EIN | File Form SS-4 with the IRS | After articles are filed |
| Open bank account | Church bank account in the church's name | After EIN received |
| First board meeting | Hold and document your first board meeting | Within 60 days |
| First worship service | Conduct and document your first service | Within 60 days |
| Access dashboard | Log in at os.livinglightchurch.org | Immediately |

### Step 4: Access Your Dashboard

Visit [os.livinglightchurch.org](https://os.livinglightchurch.org) and log in with your GitHub account. You'll see:

- **Compliance score** — how you're doing overall
- **14-point test score** — your IRS church test status
- **Upcoming deadlines** — what's coming up
- **Action items** — anything that needs your attention
- **Recent activity** — what the system has done recently

---

## What Living Light OS Does For You

### Automatically Generated Documents

| Document | When | Where Filed |
|----------|------|-------------|
| Board meeting agenda | 7 days before each quarterly meeting | `governance/board-minutes/` |
| Bank reconciliation template | 5th of each month | `financials/bank-reconciliations/` |
| 14-point test scorecard | 1st of each month | `compliance/14-point-test/` |
| Housing allowance designation | October (for next year) | `financials/housing-allowance/` |
| Compensation review package | October | `financials/compensation/` |
| Quarterly compliance report | End of each quarter | `compliance/quarterly-reports/` |
| Annual compliance package | December | `compliance/annual-packages/` |
| Worship service log template | Weekly | `programs/worship-services/` |

### Automated Compliance Checks

The system checks daily:
- All formation documents are present and current
- Board meetings are happening on schedule
- Bank reconciliations are being completed
- Worship services are being documented
- Membership rolls are maintained
- Your 14-point test score is above threshold

### Template Updates

When Living Light HQ updates templates, policies, or compliance requirements:
1. Your repo gets a pull request with the changes
2. You review and merge (or it auto-merges if non-critical)
3. Your documents stay current without you having to track changes

---

## Your Responsibilities

Living Light OS automates the paperwork, but you still need to:

1. **Conduct weekly worship services** — document attendance
2. **Hold quarterly board meetings** — the system sends the agenda, you hold the meeting
3. **Review and sign documents** — auto-generated docs need your review
4. **Respond to action items** — check your dashboard regularly
5. **Pay association tithes** — monthly tithe to Living Light Association
6. **Maintain your ministry** — do the sacred work

---

## Working with Your Repository

Your church repository is a standard Git repo. You can:

```bash
# Go to your church files
cd ~/living-light/living-light-church-{city}

# Pull latest changes (including auto-generated docs)
git pull origin main

# Check status
git status

# Push any local changes
git add -A && git commit -m "Update notes" && git push
```

Or just use the dashboard — most franchisees never need to touch the command line after installation.

---

## Getting Help

| Need | Contact |
|------|---------|
| Technical support | support@livinglightchurch.org |
| Compliance questions | compliance@livinglightchurch.org |
| Legal counsel | counsel@livinglightchurch.org |
| Dashboard issues | support@livinglightchurch.org |
| Living Light HQ | hello@livinglightchurch.org |
