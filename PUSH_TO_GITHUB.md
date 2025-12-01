# Push Your Portfolio to GitHub

Follow these exact steps to push your portfolio code to GitHub:

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "My professional portfolio - Product Leadership & AI Research"
4. Choose **Public** (so it's visible to employers/recruiters)
5. Click "Create repository"
6. **Copy the repository URL** (looks like: `https://github.com/yourusername/portfolio.git`)

## Step 2: Push Your Code to GitHub

Run these commands in your terminal from the project directory:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Anuja Gadde Portfolio"

# Add remote (replace with your repo URL from Step 1)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify

Go to your GitHub repo URL and verify all files are there:
- ✅ All source code files
- ✅ README.md
- ✅ .env.example
- ✅ package.json, tsconfig.json, etc.
- ✅ design_guidelines.md

## What's Excluded (as per .gitignore)

These folders are NOT pushed (and don't need to be):
- `node_modules/` - Downloaded dependencies
- `dist/` - Build output
- `attached_assets/` - Your generated/local images
- `.env` - Sensitive environment variables

**Future Note:** After you pull the code on another machine, run `npm install` to restore node_modules.

## All Set!

Your portfolio is now on GitHub and ready to share with employers, recruiters, and the community!

**Share your portfolio with:**
- Your LinkedIn profile
- Resume/CV
- Email signatures
- Portfolio collections
- Job applications
