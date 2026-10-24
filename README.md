# Yordy Cobas — Resume Website

Static single-page resume site. No build step, no dependencies — just open
`index.html` or serve the folder.

## Files

- `index.html` — all page content
- `styles.css` — styling (light theme, dark contrast sections)
- `script.js` — scroll-reveal animations, animated stat counters
- `images/photo.jpg` — profile photo
- `Yordy-Cobas-Resume.pdf` — the resume the Download buttons serve
  (this is the GENERAL resume — the public-safe 2-page cut)

## Page structure

1. Profile band + About Me (with details column)
2. By the Numbers
3. Skills
4. Things I've Built
5. Experience
6. Education & Certifications
7. Get in Touch

## Publishing to GitHub Pages

1. Copy all files (and the `images/` folder) into your `Personal-Website`
   repo, replacing the old site files.
2. Commit and push to the repo's Pages branch (usually `main`).
3. GitHub Pages serves the site at `https://yordycobas.github.io/Personal-Website/`
   within a minute or two.

## Updating the resume PDF

The Download buttons point to `Yordy-Cobas-Resume.pdf` in the site root.
Drop the updated general resume PDF into the repo with exactly that
filename and the buttons work — no code changes needed.
