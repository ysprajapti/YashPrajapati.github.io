# How to Host Your Portfolio on GitHub Pages

Follow these steps to host your professional portfolio on GitHub for free.

## Prerequisites
1.  **GitHub Account**: Make sure you have an account at [github.com](https://github.com).
2.  **Git Installed**: Ensure Git is installed on your computer.

## Step 1: Initialize Git locally
Open your terminal (PowerShell or Command Prompt) and navigate to your project folder:
```powershell
cd C:\Users\DELL\.gemini\antigravity\scratch\yash-portfolio
```

Initialize a new Git repository:
```powershell
git init
```

Add your files:
```powershell
git add .
```

Commit your changes:
```powershell
git commit -m "Initial commit - Portfolio Website"
```

## Step 2: Create a Repository on GitHub
1.  Log in to GitHub.
2.  Click the **+** icon in the top right and select **New repository**.
3.  **Repository name**: `portfolio` (or `yash-portfolio`).
    *   *Tip: If you name it `yourusername.github.io`, it will be hosted at that exact address!*
4.  **Public/Private**: Choose **Public** (required for free GitHub Pages).
5.  Click **Create repository**.

## Step 3: Connect and Push
Copy the commands shown on the "…or push an existing repository from the command line" section. They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages
1.  Go to your repository **Settings** tab.
2.  On the left sidebar, click **Pages**.
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Under **Branch**, select `main` and folder `/(root)`.
5.  Click **Save**.

## Step 5: View Your Site
Wait about 1-2 minutes. Refresh the Pages settings page. You will see a banner at the top saying:
> "Your site is live at https://yourusername.github.io/portfolio/"

Click the link to see your live professional portfolio!

---

## Updating Your Site
Whenever you make changes to your code:
1.  `git add .`
2.  `git commit -m "Update details"`
3.  `git push`

Your site will automatically update in a few minutes.
