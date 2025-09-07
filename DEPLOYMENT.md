# GitHub Pages Deployment Guide

This guide will help you deploy the Bill Receipt Generator to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `bill-receipt-generator` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (since we already have files)

### 2. Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Bill Receipt Generator"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/bill-receipt-generator.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. Automatic Deployment

The GitHub Action workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your application when you push to the main branch
- Deploy it to GitHub Pages
- Make it available at: `https://YOUR_USERNAME.github.io/bill-receipt-generator/`

### 5. Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run for your push
3. Wait for it to complete (green checkmark)
4. Visit your deployed site at the GitHub Pages URL

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name matches the base path in `vite.config.ts`
2. **Build Fails**: Check the Actions tab for error details
3. **Assets Not Loading**: Verify the `base` path in `vite.config.ts` is correct

### Updating the Site

To update your deployed site:
1. Make your changes locally
2. Commit and push to main branch
3. GitHub Actions will automatically rebuild and redeploy

## Configuration Files

The following files are configured for GitHub Pages:

- `vite.config.ts` - Dynamically sets the base path (root for dev, `/bill-receipt-generator/` for production)
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Contains deployment scripts

### Development vs Production

The Vite configuration automatically handles different base paths:
- **Development**: Serves from root path `/` for local development
- **Production**: Uses `/bill-receipt-generator/` base path for GitHub Pages

## Security Note

The login credentials are currently hardcoded for demo purposes. For production use, consider:
- Implementing proper authentication
- Using environment variables for sensitive data
- Adding HTTPS enforcement
