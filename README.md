# Golfex — Static Site

A static HTML/CSS/JS golf-club website (no WordPress, no PHP, no build step).
See `CHANGELOG.md` for what this was built from and what's still a placeholder.

## Running it locally

Asset paths are relative and a couple of scripts run AJAX-style `fetch`/webpack
chunk loads, so open it through a local web server rather than double-clicking the
HTML file (`file://` will mostly work, but serve it properly to match production):

```bash
cd site
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

Any static server works the same way (`npx serve`, VS Code's "Live Server", etc.).

## Structure

```
site/
├── index.html                  ← the real homepage (only page with final content)
├── about-us.html, blog.html, … ← 21 placeholder pages (shared header/footer, "coming soon")
├── 404.html
├── robots.txt, sitemap.xml, .htaccess
└── assets/
    ├── css/      every stylesheet, flat — third-party (bootstrap, fontawesome5/6,
    │             elementor-*, elementskit-*, swiper, contact-form-7, mediaelement,
    │             google-fonts-intertight) and site-specific (theme.css,
    │             theme-variables.css, kit-global.css, template-header.css,
    │             template-footer.css, page-home.css) side by side
    ├── js/       every script, flat, same naming convention — plus
    │             elementor-chunks/js/  Elementor's own runtime lazy-loads a
    │             handful of per-widget bundles from this exact sub-path
    │             (baked into elementorFrontendConfig.urls.assets in <head>)
    │             main.js  the one hand-written file: contact-form handling
    │             + auto rel="noopener" on target="_blank" links
    ├── fonts/    one subfolder per font family (fontawesome5/, fontawesome6/,
    │             elementor-icons/, elementskit-icons/, google-fonts/) — two
    │             different Font Awesome *versions* are used by different
    │             widgets, so those two stay separate even though filenames overlap
    └── images/   uploads/ (content photos), theme/ (decorative theme graphics),
                  icons/ (small UI icons used by ElementsKit widget CSS)
```

## Adding a new real page

1. Copy any placeholder page closest to what you need (they all share the same
   header/footer markup).
2. Replace the `<div class="elementor elementor-placeholder-page">…</div>` block
   with real content — reuse the classes already loaded via `assets/css/`
   (`.elementor-button`, `.section-title`, `.elementor-heading-title`, container/grid
   classes, etc.) to match the design.
3. Update `<title>` / `<meta name="description">` and the entry in `sitemap.xml`.

## Before going live

- Wire the newsletter/contact form (`assets/js/main.js`) to a real backend —
  it currently only validates and shows a success message, it does not send email.
- Replace the placeholder phone/email/address and the `#` social links in the footer.
- Update `sitemap.xml`'s domain from the `yourdomain.com` placeholder.
- Fill in the 21 placeholder pages with real content.
