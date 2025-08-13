# Deploying to Render

This guide will help you deploy your portfolio to Render.

## Prerequisites

1. A Render account (free at [render.com](https://render.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Using render.yaml (Recommended)

1. **Push your code to Git repository**
   ```bash
   git add .
   git commit -m "Add Render deployment config"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" and select "Blueprint"
   - Connect your Git repository
   - Render will automatically detect the `render.yaml` file and configure the deployment

3. **Deploy**
   - Render will automatically build and deploy your site
   - You'll get a URL like `https://your-app-name.onrender.com`

### Method 2: Manual Setup

1. **Go to Render Dashboard**
   - Visit [render.com](https://render.com)
   - Click "New +" and select "Static Site"

2. **Connect Repository**
   - Connect your Git repository
   - Select the repository containing your portfolio

3. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static Site

4. **Deploy**
   - Click "Create Static Site"
   - Render will build and deploy your site

## Custom Domain (Optional)

1. In your Render dashboard, go to your site settings
2. Click "Custom Domains"
3. Add your domain and follow the DNS configuration instructions

## Environment Variables

If you need environment variables, you can add them in the Render dashboard under your site's "Environment" tab.

## Troubleshooting

- **Build fails**: Check the build logs in Render dashboard
- **404 errors**: Ensure the `_redirects` file is in the `public` directory
- **Routing issues**: The `_redirects` file should handle client-side routing

## Notes

- Your site will automatically redeploy when you push changes to your main branch
- Render provides free SSL certificates
- Free tier includes 750 hours of build time per month
