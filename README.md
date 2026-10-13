# Yordy Cobas — Resume Website

Static single-page resume site. No build step, no dependencies — just open
`index.html` or serve the folder.

## Files

- `index.html` — all page content
- `styles.css` — styling (light theme, dark contrast sections)
- `script.js` — scroll-reveal animations, animated stat counters, audio toggle
- `images/photo.jpg` — hero photo (square crop via CSS)
- `audio/intro.mp3` — spoken intro for the "Hear my intro" button

## Publishing to GitHub Pages

1. Copy all files (and the `images/` + `audio/` folders) into your
   `Personal-Website` repo, replacing the old site files.
2. Commit and push to the repo's Pages branch (usually `main`).
3. GitHub Pages serves the site at `https://yordycobas.github.io/Personal-Website/`
   within a minute or two.

## Swapping the audio intro

`audio/intro.mp3` is a placeholder generated with an AI voice. To replace it
with your own recording:

1. Record your intro (keep it ~20 seconds).
2. Export/save it as MP3.
3. Overwrite `audio/intro.mp3` with your file (same name, same folder).
4. Commit and push — no code changes needed.

## Adding your resume PDF

The "Download Resume" button points to `Yordy-Cobas-Resume.pdf` in the site
root. Drop your PDF into the repo with exactly that filename and the button
works — no code changes needed.
