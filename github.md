# GitHub Pages Hosting Plan for cyberConCTF

## Overview
This guide walks through hosting your React + Vite site on GitHub Pages using the `gh-pages` deployment package.

---

## Step 1: Install `gh-pages` Package

Run this command in your project root:

```bash
npm install --save-dev gh-pages
```

This adds the deployment tool as a dev dependency.

---

## Step 2: Update `package.json` Scripts

Add these two scripts to your `package.json` file under the `"scripts"` section:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

**What these do:**
- `predeploy`: Automatically runs before `deploy` to build the project
- `deploy`: Deploys the `dist/` folder to GitHub Pages

---

## Step 3: Verify Vite Configuration

Your `vite.config.js` should have the correct `base` path (already set):

```javascript
export default defineConfig({
  base: '/cyberConCTF/',  // ✅ This is required for GitHub Pages
  plugins: [react()],
})
```

This ensures all assets load from the correct path on GitHub Pages.

---

## Step 4: Push Your Code to GitHub

Make sure your repository is pushed to GitHub:

```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

⚠️ **Important:** Your repo should be named `cyberConCTF`.

---

## Step 5: Deploy to GitHub Pages

Run the deploy command:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Generate a `dist/` folder with optimized assets
3. Push the `dist/` folder to a `gh-pages` branch on GitHub

---

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/cyberConCTF/`

---

## Step 7: Verify Deployment

- Wait 1-2 minutes for GitHub to process
- Visit: `https://yourusername.github.io/cyberConCTF/`
- Check that all pages and assets load correctly

---

## Troubleshooting

### Assets Not Loading?
- ✅ Verify `base: '/cyberConCTF/'` is in `vite.config.js`
- ✅ Check that `gh-pages` branch exists on GitHub

### Build Fails?
```bash
npm run lint     # Check for linting errors
npm run build    # Run build manually to see errors
```

### Deploy Fails?
```bash
# Clear and retry
npm run deploy -- --clean
```

---

## Automatic Deployments (Optional - GitHub Actions)

If you want GitHub to auto-deploy on every push to `main`:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## What's Included in Deployment

✅ Optimized assets from `dist/`  
✅ All React components and pages  
✅ CSS (Tailwind)  
✅ Images and media  
✅ JavaScript bundles (minified & optimized by Vite)

---

## Next Steps

1. Run `npm run deploy` now
2. Enable Pages in GitHub settings
3. Visit your live URL
4. Consider optimizing images (16.7 MB is large for web)

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Check for code issues
npm run lint
```

---

**Status:** Ready to deploy! ✅
