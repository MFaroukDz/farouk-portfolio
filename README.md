# Mohammed Farouk Nakmouche – Personal Website

This repository contains the source code for my personal academic portfolio. It is built as a simple
static website using HTML, CSS and JavaScript. All content is populated from a single
configuration file, `data/profile.js`, making updates straightforward.

## Quick start

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. **Edit your information**
   Open `data/profile.js` in your favorite editor and replace the fields with your own
   details (name, tagline, biography, publications, etc.).

3. **Replace the profile photo** (optional)
   Place a square headshot image in `images/profile.png`. The site uses this file by default.
   Alternatively, update the `photo` path in `data/profile.js` to reference another file.

4. **Preview locally**
   You can simply open `index.html` in your browser and verify that your information
   displays correctly. Because the site is completely static there is no build step.

5. **Deploy on GitHub Pages**
   - Create a new repository on GitHub and upload the contents of this directory.
   - Commit and push all files to the `main` branch.
   - Navigate to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**
     and set the source to the `main` branch at the root directory. Save your changes.
   - After a minute or two, your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## License

This project is licensed under the MIT License. See `LICENSE` for details.