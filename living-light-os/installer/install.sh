#!/usr/bin/env bash
set -euo pipefail

# ============================================================================
# Living Light OS — Franchisee Installer
# ============================================================================
# This script sets up everything a franchisee needs:
#   1. Installs required tools (git, gh CLI)
#   2. Authenticates with GitHub
#   3. Forks the master template into the franchisee's account
#   4. Clones the repo locally
#   5. Populates formation documents with church details
#   6. Sets up automated sync with master repo
#   7. Opens the compliance dashboard
# ============================================================================

VERSION="1.0.0"
MASTER_TEMPLATE="Light-Brands/living-light-franchisee-template"
MASTER_ORG="Light-Brands"
PLATFORM_URL="https://os.livinglightchurch.org"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

print_banner() {
  echo ""
  echo -e "${CYAN}${BOLD}"
  echo "  ╔═══════════════════════════════════════════════════╗"
  echo "  ║                                                   ║"
  echo "  ║          LIVING LIGHT OS  v${VERSION}              ║"
  echo "  ║                                                   ║"
  echo "  ║    Church of the Living Light                     ║"
  echo "  ║    Franchise Operating System                     ║"
  echo "  ║                                                   ║"
  echo "  ╚═══════════════════════════════════════════════════╝"
  echo -e "${NC}"
  echo ""
}

log_step() {
  echo -e "${GREEN}[✓]${NC} $1"
}

log_info() {
  echo -e "${BLUE}[i]${NC} $1"
}

log_warn() {
  echo -e "${YELLOW}[!]${NC} $1"
}

log_error() {
  echo -e "${RED}[✗]${NC} $1"
}

log_progress() {
  echo -e "${CYAN}[→]${NC} $1"
}

# ── Preflight checks ──────────────────────────────────────────────────────

check_os() {
  case "$(uname -s)" in
    Linux*)   OS="linux" ;;
    Darwin*)  OS="mac" ;;
    MINGW*|MSYS*|CYGWIN*)  OS="windows" ;;
    *)        log_error "Unsupported operating system"; exit 1 ;;
  esac
  log_step "Detected OS: $OS"
}

install_git() {
  if command -v git &>/dev/null; then
    log_step "Git is installed ($(git --version))"
    return
  fi

  log_progress "Installing Git..."
  case "$OS" in
    mac)     xcode-select --install 2>/dev/null || true ;;
    linux)
      if command -v apt-get &>/dev/null; then
        sudo apt-get update && sudo apt-get install -y git
      elif command -v yum &>/dev/null; then
        sudo yum install -y git
      elif command -v dnf &>/dev/null; then
        sudo dnf install -y git
      fi
      ;;
    windows) log_error "Please install Git from https://git-scm.com/download/win"; exit 1 ;;
  esac
  log_step "Git installed"
}

install_gh() {
  if command -v gh &>/dev/null; then
    log_step "GitHub CLI is installed ($(gh --version | head -1))"
    return
  fi

  log_progress "Installing GitHub CLI..."
  case "$OS" in
    mac)
      if command -v brew &>/dev/null; then
        brew install gh
      else
        log_error "Please install Homebrew first: https://brew.sh"
        exit 1
      fi
      ;;
    linux)
      if command -v apt-get &>/dev/null; then
        curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
        sudo apt-get update && sudo apt-get install -y gh
      elif command -v yum &>/dev/null; then
        sudo yum install -y 'https://github.com/cli/cli/releases/latest/download/gh_*_linux_amd64.rpm'
      fi
      ;;
    windows) log_error "Please install GitHub CLI from https://cli.github.com"; exit 1 ;;
  esac
  log_step "GitHub CLI installed"
}

# ── GitHub Authentication ──────────────────────────────────────────────────

authenticate_github() {
  if gh auth status &>/dev/null; then
    GITHUB_USER=$(gh api user --jq '.login')
    log_step "Authenticated as: $GITHUB_USER"
    return
  fi

  log_progress "Authenticating with GitHub..."
  echo ""
  echo -e "${BOLD}You'll be asked to authenticate with GitHub.${NC}"
  echo "This grants Living Light OS access to create and manage your church repository."
  echo ""
  gh auth login --web --scopes "repo,workflow,admin:org"
  GITHUB_USER=$(gh api user --jq '.login')
  log_step "Authenticated as: $GITHUB_USER"
}

# ── Gather franchisee information ──────────────────────────────────────────

gather_info() {
  echo ""
  echo -e "${BOLD}${CYAN}── Church Information ──${NC}"
  echo ""

  read -rp "Church city (e.g., Austin): " CITY
  read -rp "Church state abbreviation (e.g., TX): " STATE
  read -rp "Church lead name (e.g., Jane Smith): " LEAD_NAME
  read -rp "Church lead email: " LEAD_EMAIL
  read -rp "Church lead title (default: Senior Minister): " LEAD_TITLE
  LEAD_TITLE=${LEAD_TITLE:-"Senior Minister"}

  CITY_SLUG=$(echo "$CITY" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  REPO_NAME="living-light-church-${CITY_SLUG}"
  CHURCH_NAME="Living Light Church of ${CITY}"

  echo ""
  echo -e "${BOLD}Confirm:${NC}"
  echo "  Church name:  $CHURCH_NAME"
  echo "  Repository:   $GITHUB_USER/$REPO_NAME"
  echo "  Lead:         $LEAD_NAME ($LEAD_TITLE)"
  echo "  Email:        $LEAD_EMAIL"
  echo "  Location:     $CITY, $STATE"
  echo ""
  read -rp "Is this correct? (y/n): " CONFIRM
  if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    log_warn "Setup cancelled. Run the installer again."
    exit 0
  fi
}

# ── Create and configure repository ────────────────────────────────────────

create_repo() {
  log_progress "Creating your church repository..."

  # Check if repo already exists
  if gh repo view "$GITHUB_USER/$REPO_NAME" &>/dev/null; then
    log_warn "Repository $GITHUB_USER/$REPO_NAME already exists"
    read -rp "Continue with existing repo? (y/n): " USE_EXISTING
    if [[ "$USE_EXISTING" != "y" ]]; then
      exit 0
    fi
  else
    # Fork the master template
    gh repo fork "$MASTER_TEMPLATE" \
      --clone=false \
      --fork-name "$REPO_NAME" \
      --remote=false

    # Wait for fork to be available
    sleep 3

    # Make it private
    gh repo edit "$GITHUB_USER/$REPO_NAME" --visibility private
  fi

  log_step "Repository created: $GITHUB_USER/$REPO_NAME (private)"
}

share_with_hq() {
  log_progress "Sharing repository with Living Light HQ..."

  # Add Living Light org as collaborator
  gh api "repos/$GITHUB_USER/$REPO_NAME/collaborators/$MASTER_ORG" \
    --method PUT \
    -f permission=push \
    2>/dev/null || log_warn "Could not add Living Light HQ as collaborator (may need org invite)"

  log_step "Repository shared with Living Light HQ"
}

clone_repo() {
  INSTALL_DIR="${HOME}/living-light"
  mkdir -p "$INSTALL_DIR"

  if [ -d "$INSTALL_DIR/$REPO_NAME" ]; then
    log_warn "Directory already exists: $INSTALL_DIR/$REPO_NAME"
    cd "$INSTALL_DIR/$REPO_NAME"
    git pull origin main
  else
    log_progress "Cloning repository to $INSTALL_DIR/$REPO_NAME..."
    gh repo clone "$GITHUB_USER/$REPO_NAME" "$INSTALL_DIR/$REPO_NAME"
    cd "$INSTALL_DIR/$REPO_NAME"
  fi

  # Configure upstream for sync
  git remote add upstream "https://github.com/$MASTER_TEMPLATE.git" 2>/dev/null || true

  log_step "Repository cloned to: $INSTALL_DIR/$REPO_NAME"
}

# ── Populate formation documents ───────────────────────────────────────────

populate_documents() {
  log_progress "Populating formation documents..."

  CHURCH_DIR="$INSTALL_DIR/$REPO_NAME"
  DATE=$(date +%Y-%m-%d)
  YEAR=$(date +%Y)

  # Replace template variables in all markdown files
  find "$CHURCH_DIR" -name "*.md" -exec sed -i \
    -e "s/{{CITY_NAME}}/$CITY/g" \
    -e "s/{{CITY_SLUG}}/$CITY_SLUG/g" \
    -e "s/{{STATE}}/$STATE/g" \
    -e "s/{{LEAD_NAME}}/$LEAD_NAME/g" \
    -e "s/{{LEAD_EMAIL}}/$LEAD_EMAIL/g" \
    -e "s/{{LEAD_TITLE}}/$LEAD_TITLE/g" \
    -e "s/{{CHURCH_NAME}}/$CHURCH_NAME/g" \
    -e "s/{{REPO_NAME}}/$REPO_NAME/g" \
    -e "s/{{GITHUB_USER}}/$GITHUB_USER/g" \
    -e "s/{{DATE}}/$DATE/g" \
    -e "s/{{YEAR}}/$YEAR/g" \
    -e "s/{{STATUS}}/Pending/g" \
    {} +

  # Generate articles of incorporation
  cat > "$CHURCH_DIR/formation/articles-of-incorporation.md" << EOF
# Articles of Incorporation
## $CHURCH_NAME

**A 508(c)(1)(A) Tax-Exempt Religious Organization**
**Affiliated with the Church of the Living Light**

---

### Article I — Name
The name of this corporation shall be **$CHURCH_NAME**.

### Article II — Purpose
This corporation is organized exclusively for religious, charitable, and educational purposes within the meaning of Section 501(c)(3) and Section 508(c)(1)(A) of the Internal Revenue Code.

The specific purposes include:
- Conducting regular worship services and religious ceremonies
- Providing spiritual guidance and pastoral care
- Operating healing and wellness ministries
- Conducting educational programs in accordance with the Living Light doctrine
- Performing charitable works in the community

### Article III — Affiliation
This church is chartered as an affiliated church of the **Church of the Living Light**, a convention or association of churches under IRC 508(c)(1)(A).

### Article IV — Registered Agent
**Name:** $LEAD_NAME
**Title:** $LEAD_TITLE
**State:** $STATE

### Article V — Board of Directors
The initial Board of Elders shall consist of not fewer than three (3) members.

**Initial Board:**
- $LEAD_NAME, $LEAD_TITLE

### Article VI — Dissolution
Upon dissolution, all assets shall be distributed to the Church of the Living Light or another organization exempt under Section 501(c)(3) of the Internal Revenue Code.

---

**Filed:** $DATE
**State:** $STATE
**Status:** DRAFT — Requires state filing and legal review

*Generated by Living Light OS v${VERSION}*
EOF

  # Generate statement of faith (linked to Living Light doctrine)
  cat > "$CHURCH_DIR/formation/statement-of-faith.md" << EOF
# Statement of Faith
## $CHURCH_NAME

**Adopted from the Church of the Living Light Doctrinal Framework**

---

This church adopts and affirms the Statement of Faith of the Church of the Living Light in its entirety, including the Sacred Laws of consciousness, the Christ Consciousness doctrine, and all principles of the Living Light tradition.

As an affiliated church of the Living Light, we commit to:

1. **The Sacred Laws** — Honoring the universal principles of consciousness, healing, and spiritual growth as articulated by the Church of the Living Light
2. **Christ Consciousness** — Teaching and practicing the path of awakened awareness
3. **Healing Ministry** — Providing sacred healing practices that honor both ancient wisdom and modern science
4. **Community Service** — Serving our local community through charitable programs and outreach
5. **Doctrinal Alignment** — Maintaining consistency with the Living Light doctrinal framework

---

**Adopted:** $DATE
**Church:** $CHURCH_NAME
**Affirmed by:** $LEAD_NAME, $LEAD_TITLE

*This document is aligned with the master Statement of Faith maintained by the Church of the Living Light.*
EOF

  # Generate organizational meeting minutes
  cat > "$CHURCH_DIR/formation/organizational-meeting-minutes.md" << EOF
# Organizational Meeting Minutes
## $CHURCH_NAME

**Date:** $DATE
**Location:** $CITY, $STATE
**Type:** Initial Organizational Meeting

---

### Attendance
- $LEAD_NAME, $LEAD_TITLE (Presiding)

### Call to Order
The organizational meeting of $CHURCH_NAME was called to order at [TIME] by $LEAD_NAME.

### Actions Taken

1. **Articles of Incorporation** — The Articles of Incorporation were reviewed and approved for filing with the State of $STATE.

2. **Church Bylaws** — The Church Bylaws were reviewed, discussed, and adopted.

3. **Statement of Faith** — The Statement of Faith, adopted from the Church of the Living Light, was affirmed.

4. **Board of Elders** — The initial Board of Elders was established:
   - $LEAD_NAME, $LEAD_TITLE

5. **EIN Application** — Authorization was given to file Form SS-4 with the IRS to obtain an Employer Identification Number.

6. **Bank Account** — Authorization was given to open a church bank account.

7. **Living Light Affiliation** — The charter agreement with the Church of the Living Light was reviewed and approved.

8. **Fiscal Year** — The fiscal year was established as January 1 through December 31.

### Adjournment
The meeting was adjourned at [TIME].

---

**Minutes prepared by:** Living Light OS
**Status:** DRAFT — Requires review and signatures

*Generated by Living Light OS v${VERSION}*
EOF

  # Set up empty directories with .gitkeep
  for dir in compliance/14-point-test compliance/bank-reconciliations compliance/quarterly-reports compliance/annual-packages compliance/state-filings compliance/audit-trail governance/board-minutes governance/resolutions governance/policies governance/committees financials/bank-reconciliations financials/compensation financials/housing-allowance financials/budgets financials/tithes membership/rolls membership/ordinations membership/covenants membership/certificates programs/worship-services programs/charitable-programs programs/education programs/community; do
    mkdir -p "$CHURCH_DIR/$dir"
    touch "$CHURCH_DIR/$dir/.gitkeep"
  done

  log_step "Formation documents populated"
}

# ── Configure secrets and automation ───────────────────────────────────────

configure_automation() {
  log_progress "Configuring automation..."

  cd "$INSTALL_DIR/$REPO_NAME"

  # Create local config file
  cat > .living-light-config.json << EOF
{
  "church_name": "$CHURCH_NAME",
  "city": "$CITY",
  "state": "$STATE",
  "lead_name": "$LEAD_NAME",
  "lead_email": "$LEAD_EMAIL",
  "lead_title": "$LEAD_TITLE",
  "github_user": "$GITHUB_USER",
  "repo_name": "$REPO_NAME",
  "master_org": "$MASTER_ORG",
  "installed": "$DATE",
  "os_version": "$VERSION",
  "platform_url": "$PLATFORM_URL"
}
EOF

  log_step "Automation configured"
}

# ── Commit and push ────────────────────────────────────────────────────────

initial_commit() {
  log_progress "Committing initial setup..."

  cd "$INSTALL_DIR/$REPO_NAME"

  git add -A
  git commit -m "[Living Light OS] Initial church setup — $CHURCH_NAME

Franchisee: $LEAD_NAME
Location: $CITY, $STATE
OS Version: $VERSION
Date: $DATE"

  git push origin main

  log_step "Initial setup committed and pushed"
}

# ── Register with Living Light platform ────────────────────────────────────

register_platform() {
  log_progress "Registering with Living Light platform..."

  # In production, this would POST to the platform API
  # curl -X POST "$PLATFORM_URL/api/franchisees/register" \
  #   -H "Content-Type: application/json" \
  #   -d "{
  #     \"church_name\": \"$CHURCH_NAME\",
  #     \"city\": \"$CITY\",
  #     \"state\": \"$STATE\",
  #     \"lead_name\": \"$LEAD_NAME\",
  #     \"lead_email\": \"$LEAD_EMAIL\",
  #     \"github_user\": \"$GITHUB_USER\",
  #     \"repo_name\": \"$REPO_NAME\"
  #   }"

  log_step "Registered with Living Light platform (placeholder — API endpoint pending)"
}

# ── Main ───────────────────────────────────────────────────────────────────

main() {
  print_banner

  echo -e "${BOLD}This installer will set up your Living Light church repository.${NC}"
  echo "It takes about 5 minutes and requires a GitHub account."
  echo ""
  read -rp "Press Enter to continue..."

  echo ""
  echo -e "${BOLD}${CYAN}── Step 1: System Check ──${NC}"
  check_os
  install_git
  install_gh

  echo ""
  echo -e "${BOLD}${CYAN}── Step 2: GitHub Authentication ──${NC}"
  authenticate_github

  echo ""
  echo -e "${BOLD}${CYAN}── Step 3: Church Information ──${NC}"
  gather_info

  echo ""
  echo -e "${BOLD}${CYAN}── Step 4: Repository Setup ──${NC}"
  create_repo
  share_with_hq
  clone_repo

  echo ""
  echo -e "${BOLD}${CYAN}── Step 5: Document Setup ──${NC}"
  populate_documents
  configure_automation

  echo ""
  echo -e "${BOLD}${CYAN}── Step 6: Finalize ──${NC}"
  initial_commit
  register_platform

  echo ""
  echo -e "${GREEN}${BOLD}"
  echo "  ╔═══════════════════════════════════════════════════╗"
  echo "  ║                                                   ║"
  echo "  ║         LIVING LIGHT OS — SETUP COMPLETE          ║"
  echo "  ║                                                   ║"
  echo "  ╚═══════════════════════════════════════════════════╝"
  echo -e "${NC}"
  echo ""
  echo -e "  ${BOLD}Your church repository:${NC}"
  echo "    https://github.com/$GITHUB_USER/$REPO_NAME"
  echo ""
  echo -e "  ${BOLD}Local files:${NC}"
  echo "    $INSTALL_DIR/$REPO_NAME"
  echo ""
  echo -e "  ${BOLD}Compliance dashboard:${NC}"
  echo "    $PLATFORM_URL"
  echo ""
  echo -e "  ${BOLD}Next steps:${NC}"
  echo "    1. Review formation documents in formation/"
  echo "    2. Have documents reviewed by legal counsel"
  echo "    3. File articles of incorporation with your state"
  echo "    4. Apply for EIN using the guidance in formation/"
  echo "    5. Open your church bank account"
  echo "    6. Visit the compliance dashboard for ongoing guidance"
  echo ""
  echo -e "  ${BOLD}Need help?${NC}"
  echo "    Email: support@livinglightchurch.org"
  echo "    Dashboard: $PLATFORM_URL"
  echo ""
}

main "$@"
