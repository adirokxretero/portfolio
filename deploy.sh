#!/usr/bin/env bash
set -e

# ── Colours ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m' # No Colour

REPO_NAME="portfolio"
GITHUB_USER="adirokxretero"

echo ""
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}${CYAN}  🚀  Portfolio Deploy Script                        ${NC}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# ── 1. Pre-flight checks ──────────────────────────────────────────────────────
echo -e "${BOLD}[1/7] Pre-flight checks...${NC}"

if ! command -v git &>/dev/null; then
  echo -e "${RED}❌ Git not found. Install from https://git-scm.com${NC}"
  exit 1
fi
echo -e "${GREEN}  ✅ git found${NC}"

if ! command -v gh &>/dev/null; then
  echo -e "${RED}❌ GitHub CLI not found. Install from https://cli.github.com${NC}"
  exit 1
fi
echo -e "${GREEN}  ✅ gh (GitHub CLI) found${NC}"

if ! gh auth status &>/dev/null; then
  echo -e "${YELLOW}  ⚠️  Not logged into GitHub CLI. Launching login...${NC}"
  gh auth login
fi
echo -e "${GREEN}  ✅ GitHub CLI authenticated${NC}"

if [ ! -f "index.html" ]; then
  echo -e "${RED}❌ index.html not found. Make sure you're in the right folder.${NC}"
  exit 1
fi
echo -e "${GREEN}  ✅ index.html found${NC}"
echo ""

# ── 2. Secret scan ───────────────────────────────────────────────────────────
echo -e "${BOLD}[2/7] Scanning for secrets...${NC}"

SECRET_HITS=$(grep -rn \
  -e "API_KEY" -e "apiKey" -e "SECRET" \
  -e "password" -e "token" -e "private_key" \
  --include="*.html" --include="*.js" --include="*.json" \
  --include="*.ts" --include="*.env" \
  --exclude-dir=".git" --exclude-dir="node_modules" \
  . 2>/dev/null || true)

if [ -n "$SECRET_HITS" ]; then
  echo -e "${RED}  ⚠️  Possible secrets found:${NC}"
  echo -e "${RED}${SECRET_HITS}${NC}"
  echo ""
  read -rp "$(echo -e "${YELLOW}  ⚠️  Possible secrets found above. Continue anyway? (y/n): ${NC}")" CONFIRM
  if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    echo -e "${RED}  Aborted. Please remove secrets before pushing.${NC}"
    exit 1
  fi
else
  echo -e "${GREEN}  ✅ No secrets detected${NC}"
fi
echo ""

# ── 3. .gitignore ─────────────────────────────────────────────────────────────
echo -e "${BOLD}[3/7] Setting up .gitignore...${NC}"

if [ ! -f ".gitignore" ]; then
cat > .gitignore <<'EOF'
.DS_Store
Thumbs.db
*.env
.env
node_modules/
*.log
EOF
  echo -e "${GREEN}  ✅ .gitignore created${NC}"
else
  echo -e "${CYAN}  ℹ️  .gitignore already exists — skipping${NC}"
fi
echo ""

# ── 4. README.md ──────────────────────────────────────────────────────────────
echo -e "${BOLD}[4/7] Setting up README.md...${NC}"

if [ ! -f "README.md" ]; then
cat > README.md <<EOF
# Adithya M — Portfolio
Personal portfolio built with HTML, CSS, JS · Three.js · GSAP

Live: https://${GITHUB_USER}.github.io/${REPO_NAME}
EOF
  echo -e "${GREEN}  ✅ README.md created${NC}"
else
  echo -e "${CYAN}  ℹ️  README.md already exists — skipping${NC}"
fi
echo ""

# ── 5. Git init & first commit ────────────────────────────────────────────────
echo -e "${BOLD}[5/7] Initialising git and committing...${NC}"

if [ ! -d ".git" ]; then
  git init
  echo -e "${GREEN}  ✅ Git repository initialised${NC}"
else
  echo -e "${CYAN}  ℹ️  Git already initialised — skipping init${NC}"
fi

git add .

if git diff --cached --quiet; then
  echo -e "${CYAN}  ℹ️  Nothing new to commit${NC}"
else
  git commit -m "🚀 initial: portfolio v1"
  echo -e "${GREEN}  ✅ Commit created${NC}"
fi
echo ""

# ── 6. Create GitHub repo & push ──────────────────────────────────────────────
echo -e "${BOLD}[6/7] Creating GitHub repo and pushing...${NC}"

if gh repo view "${GITHUB_USER}/${REPO_NAME}" &>/dev/null; then
  echo -e "${CYAN}  ℹ️  Repo already exists — adding remote and pushing${NC}"
  if ! git remote get-url origin &>/dev/null; then
    git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
  fi
  git branch -M main
  git push -u origin main
else
  gh repo create "${REPO_NAME}" --public --source=. --remote=origin --push
  echo -e "${GREEN}  ✅ Repo created and code pushed${NC}"
fi
echo ""

# ── 7. Enable GitHub Pages ────────────────────────────────────────────────────
echo -e "${BOLD}[7/7] Enabling GitHub Pages...${NC}"

if gh api "repos/${GITHUB_USER}/${REPO_NAME}/pages" &>/dev/null; then
  echo -e "${CYAN}  ℹ️  GitHub Pages already enabled${NC}"
else
  gh api "repos/${GITHUB_USER}/${REPO_NAME}/pages" \
    --method POST \
    -f "source[branch]=main" \
    -f "source[path]=/" \
    --silent && echo -e "${GREEN}  ✅ GitHub Pages enabled${NC}" \
    || echo -e "${YELLOW}  ⚠️  Could not auto-enable Pages — enable manually in repo Settings → Pages${NC}"
fi
echo ""

# ── Summary ───────────────────────────────────────────────────────────────────
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  ✅ Repo created:   https://github.com/${GITHUB_USER}/${REPO_NAME}${NC}"
echo -e "${GREEN}  ✅ Code pushed:    main branch${NC}"
echo -e "${GREEN}  ✅ GitHub Pages:   https://${GITHUB_USER}.github.io/${REPO_NAME}${NC}"
echo -e "${YELLOW}  ⏳ Pages live in:  ~2 minutes${NC}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# ── Open in browser ───────────────────────────────────────────────────────────
REPO_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}"
if command -v open &>/dev/null; then
  open "$REPO_URL"
elif command -v xdg-open &>/dev/null; then
  xdg-open "$REPO_URL"
fi
