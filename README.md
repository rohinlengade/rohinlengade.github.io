# Rohin Lengade — Portfolio Site

A static one-page portfolio built from your resume, with light/dark mode. No build step — just HTML, CSS, and vanilla JS.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `rohin-portfolio`).
2. Copy all the files in this folder into the repo (keep the folder structure: `css/`, `js/`, `assets/`, `resume/`, and `index.html` at the root).
3. Commit and push:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/rohin-portfolio.git
   git push -u origin main
   ```
4. In the repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `root`** → Save.
5. Your site will be live at `https://<your-username>.github.io/rohin-portfolio/` within a minute or two.

If you'd rather it live at `https://<your-username>.github.io/` directly (no `/rohin-portfolio/` path), name the repo `<your-username>.github.io` instead.

## Adding your own images

The site ships with dashed-border placeholder graphics so you can see where images go. Replace them by adding your own files to `assets/images/` and updating the `src` in `index.html` (each spot has an HTML comment marking it):

| Where | Current placeholder | Replace with | Suggested size |
|---|---|---|---|
| Hero photo | `assets/images/profile-placeholder.svg` | `assets/images/profile.jpg` | Square, 800×800px+ |
| Project 1 — Parametric Cell Configurator | `project-parametric-cad-placeholder.svg` | `parametric-cad.jpg` | 1600×1000px (screenshot of the Grasshopper tool or a resulting cell layout) |
| Project 2 — Automated Tool-Changer | `project-tool-changer-placeholder.svg` | `tool-changer.jpg` | 1600×1000px (photo of the deployed cell/tool-changer) |
| Project 3 — Propulsive Landing Hopper | `project-landing-hopper-placeholder.svg` | `landing-hopper.jpg` | 1600×1000px (photo of the hopper or static-fire test) |

To swap an image, just add the new file to `assets/images/` and change the matching `<img src="...">` line in `index.html` to point at it.

## Adding your resume PDF

Drop your resume PDF into the `resume/` folder as `Rohin_Lengade_Resume.pdf` (the nav bar's "Resume" button already links there). If you use a different filename, update the `href` on the "Resume" link near the top of `index.html`.

## Editing content

All text content lives directly in `index.html`, organized by section (`#about`, `#experience`, `#projects`, `#skills`, `#education`, `#contact`) — no CMS or data file, just edit the HTML directly.

## Customizing the theme

Colors, fonts, and spacing are defined as CSS custom properties at the top of `css/style.css` (`:root` for light mode, `html[data-theme="dark"]` for dark mode). Change the values there to adjust the palette without touching the rest of the file.
