# Rishiram Pokhrel - Official Portfolio & CV Website

Professional portfolio and curriculum vitae for **Rishiram Pokhrel**, Warehouse Supervisor & Logistics Professional with 15+ years of experience in Qatar.

---

## 🚀 How to Deploy on GitHub Pages (Fixing Blank Screen)

A Vite/React application must be built before browsers can render it because browsers cannot run raw `.tsx` files directly.

### Option 1: Automatic Build via GitHub Actions (Recommended — 1 Click)

1. Open your repository on GitHub: `https://github.com/laptopshishir9-afk/rishirampokhrel-website`
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** → **Source**, change the dropdown from **"Deploy from a branch"** to **"GitHub Actions"**.
4. Push your latest code to GitHub (which includes `.github/workflows/deploy.yml`):
   ```bash
   git add .
   git commit -m "Deploy with GitHub Actions"
   git push
   ```
5. GitHub will automatically run the build and publish your site at `https://laptopshishir9-afk.github.io/rishirampokhrel-website/`.

---

### Option 2: Deploy Using `npm run deploy`

If you prefer deploying from your local machine:
```bash
# 1. Install dependencies (if you haven't already)
npm install

# 2. Automatically builds into dist/ and pushes to the gh-pages branch
npm run deploy
```
Then in GitHub **Settings** > **Pages**:
- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / Folder: `/(root)`
- Click **Save**.
