# VELS STUDIO — Static HTML Project

A plain HTML/CSS/JS conversion of the VELS STUDIO portfolio. No build step required.

## Folder structure

```
vels-studio/
├── index.html        # All page sections (nav, hero, services, etc.)
├── css/
│   └── styles.css    # Design tokens + all component styles
├── js/
│   └── main.js       # Scroll reveal, portfolio filters, testimonial carousel, form
├── assets/
│   ├── founder-photo.jpg
│   ├── work-branding.jpg
│   ├── work-packaging.jpg
│   ├── work-social.jpg
│   ├── work-web.jpg
│   ├── work-logo.jpg
│   ├── work-motion.jpg
│   ├── client1.jpg
│   ├── client2.jpg
│   └── client3.jpg
└── README.md
```

## Run locally

Just open `index.html` in your browser — or serve it for proper asset paths:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000

## Customize

- **Colors** — edit the CSS variables at the top of `css/styles.css` (`--neon`, `--surface`, etc.)
- **Fonts** — change the Google Fonts `<link>` in `index.html` and the `--font-*` vars
- **Content** — all text lives inline in `index.html`
- **Images** — drop replacements into `assets/` keeping the same filenames
- **Sections** — every section is clearly commented (`<!-- HERO -->`, `<!-- SERVICES -->`, …)

## Notes

- Icons use inline SVG masks (no JS icon library required).
- No external runtime dependencies — fully self-contained except Google Fonts.
- Responsive breakpoints: 640px, 768px, 1024px.
