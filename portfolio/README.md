# Manohar's 3D Portfolio

Static website (HTML, CSS, JavaScript, Three.js). No build step needed.

## Run locally

Option 1 (simplest): double-click `index.html`.

Option 2 (recommended, behaves like a real website):

```bash
cd portfolio
python -m http.server 8000
```

Then open http://localhost:8000

An internet connection is needed the first time for Three.js and the Google Fonts (Sora, Inter). If they fail to load, the site still works; only the 3D background and fonts are affected.

## Project structure

```
portfolio/
├── index.html
├── css/style.css
├── js/
│   ├── data.js               <- all your content lives here
│   ├── main.js               <- builds sections, certificate modal, menu, form
│   ├── animations.js         <- cursor glow, scroll reveal, tilt, nav
│   └── three-background.js   <- Three.js particles and shapes
└── assets/
    ├── profile/   (photo)
    ├── certificates/  (certificate images)
    └── resume/    (resume PDF + preview image)
```

## Updating content

Everything is in `js/data.js`.

**Add a certificate**
1. Save the image (JPG/PNG, ideally under 200 KB) in `assets/certificates/`.
2. Add an object to the `CERTIFICATES` array:

```js
{
  title: "Course name",
  issuer: "Organisation",
  date: "12 Jan 2027",
  detail: "Any ID or extra info",
  image: "assets/certificates/your-file.jpg",
  category: "programming"   // internship | cloud | programming | ai | design | business | event
}
```

**Add a project link:** in `PROJECTS`, set `github` and/or `demo` to a URL. The buttons appear automatically.

**Add experience, skills, achievements, education:** edit the matching array in `data.js`.

**Change resume:** replace the PDF in `assets/resume/` (keep the same file name, or update `href` in `index.html`), and regenerate `resume-preview.jpg`.

## Notes

- The contact form opens the visitor's email app (there is no server). For a real form backend, connect a service such as Formspree.
- Accessibility: keyboard navigation, skip link, visible focus, alt text, and `prefers-reduced-motion` (disables the cursor glow motion, particles and tilt).
- Performance: particle count scales down on small or low-core devices; certificate images are lazy-loaded and compressed.
- The photo of you at the podium (Wipro placement banner) is not used, because I did not know the context. Add it to `ACHIEVEMENTS` if you want it featured.
