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

## Adding New ISO Files

When a new version of Chlorine Linux is released:

1. Add the ISO file to the `downloads/` directory
2. Update the download links in `index.html` and `downloads/index.html`
3. Update the version number, release date, and file size
4. Generate and add the SHA256 checksum

## License

This website is licensed under the MIT License. See the LICENSE file for details.