# Deploying to Netlify

Follow these steps to deploy the Chlorine Linux website to Netlify:

1. Log in to your Netlify account at [netlify.com](https://app.netlify.com/)

2. Click "Add new site" > "Import an existing project"

3. Choose "GitHub" as the Git provider

4. Select the "chlorine-website" repository

5. Configure the deployment settings:
   - Branch to deploy: `master`
   - Base directory: (leave blank)
   - Build command: (leave blank or enter `echo 'No build command needed'`)
   - Publish directory: `.` (just a dot)

6. Click "Deploy site"

7. If you encounter any issues with the deployment, try these troubleshooting steps:
   - Go to "Site settings" > "Build & deploy" > "Continuous Deployment"
   - Make sure the "Base directory" is empty and the "Publish directory" is set to `.`
   - Check the deploy logs for any errors
   - If needed, you can manually deploy by clicking "Trigger deploy" > "Deploy site"

8. Once deployed, go to "Site settings" > "Domain management"

9. Click "Add custom domain"

10. Enter "chlorine.k2lang.org" and follow the instructions to set up the domain

11. After the domain is verified and the DNS is configured, enable HTTPS

## Setting up Large File Storage for ISOs

For ISO files, you'll need to use Netlify Large Media or a different file hosting service:

### Option 1: Netlify Large Media

1. Install the Netlify CLI and Git LFS
   ```
   npm install netlify-cli -g
   ```

2. Initialize Netlify Large Media
   ```
   netlify login
   netlify link
   netlify lm:setup
   ```

3. Configure Git LFS for ISO files
   ```
   git lfs track "*.iso"
   git add .gitattributes
   git commit -m "Configure Git LFS for ISO files"
   ```

4. Add and commit your ISO files
   ```
   git add downloads/*.iso
   git commit -m "Add ISO files via Git LFS"
   git push
   ```

### Option 2: Use a separate file hosting service

For very large files, you might want to use a dedicated file hosting service like:
- GitHub Releases
- AWS S3
- Backblaze B2
- Wasabi

Then update the download links in the website to point to these external locations.