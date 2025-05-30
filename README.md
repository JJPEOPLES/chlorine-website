# Chlorine Linux Website

This is the official website for Chlorine Linux, a lightweight Debian-based distribution with multiple desktop environments.

## Structure

- `index.html` - Main landing page
- `css/` - Stylesheets
  - `styles.css` - Main stylesheet
- `js/` - JavaScript files
  - `main.js` - Main JavaScript file
- `images/` - Images and graphics
  - `chlorine-logo.svg` - Chlorine Linux logo
  - Desktop environment screenshots
- `downloads/` - Download pages and ISO files
  - `index.html` - Downloads listing page

## Development

To run this website locally:

1. Clone the repository
2. Navigate to the website directory
3. Start a local server (e.g., `python -m http.server`)
4. Open your browser to `http://localhost:8000`

## Deployment

This website is deployed to Netlify at [chlorine.k2lang.org](https://chlorine.k2lang.org).

### Manual Deployment to Netlify

If you're experiencing issues with automatic deployment, follow these steps for manual deployment:

1. Log in to your Netlify account at [netlify.com](https://app.netlify.com/)

2. Go to "Sites" and click on your site (or create a new one)

3. Go to "Deploys" tab

4. Click on "Deploy settings"

5. Under "Build settings":
   - Set "Base directory" to blank (no value)
   - Set "Build command" to blank (no value)
   - Set "Publish directory" to `.` (just a dot)

6. Save these settings

7. Go back to the "Deploys" tab

8. Click "Trigger deploy" > "Deploy site"

9. If you continue to experience issues, try the manual deploy option:
   - Click "Deploy manually"
   - Drag and drop the entire website folder from your local machine
   - This bypasses any configuration issues

### Setting Up Custom Domain

1. Once deployed, go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Enter "chlorine.k2lang.org" and follow the instructions
4. After the domain is verified and DNS is configured, enable HTTPS

## Adding New ISO Files

When a new version of Chlorine Linux is released:

1. Add the ISO file to the `downloads/` directory
2. Update the download links in `index.html` and `downloads/index.html`
3. Update the version number, release date, and file size
4. Generate and add the SHA256 checksum

## License

This website is licensed under the MIT License. See the LICENSE file for details.