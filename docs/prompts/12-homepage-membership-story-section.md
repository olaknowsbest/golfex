# Prompt 12 — Homepage Membership Story Section

Work in `/Users/mac/Desktop/golf/site` on the current `athlete-platform-concept` branch.

Read `CLAUDE.md`, the complete current `index.html`, `assets/css/page-home-prototype.css`, and the homepage-related JavaScript before editing. Also review the user-approved visual direction described below; do not restore old Golfex markup wholesale.

## Goal

Add a personalized athlete-story/membership section to the homepage between the existing Achievements section and Fan Cards section. Recreate the strong composition from the earlier Golfex design—overlapping imagery, copy on the right, and a rotating yellow `Get Membership` seal—but rebuild it cleanly for the fictional Nazario Kayla prototype and current NK design system.

## Allowed files

Edit only:

- `index.html`
- `assets/css/page-home-prototype.css`
- one existing homepage-specific JavaScript file only if interaction genuinely requires it; prefer CSS for rotation/pause/hover and do not add a new library

Do not edit the public shell, navigation, footer, dashboard, other pages, shared brand assets, or backend/authentication documentation.

## Required section

Insert the new semantic section immediately after `.home-achieve` and before `.home-cards`.

### Left image composition

- Rear image: `assets/images/uploads/about-us-img-1.jpg` (golf ball/course detail), displayed as a large rounded editorial card.
- Front image: `assets/images/characters/nazario-kayla-swing-cutout-v1.png`, presented in a separate overlapping framed card with an intentional cream/sand/yellow background treatment so the transparent cutout looks designed rather than pasted on.
- Do not use `assets/images/uploads/about-us-img-2.jpg`; it depicts a different person and must not be presented as Nazario.
- Keep the athlete's face and body unobstructed.

### Rotating membership seal

Overlay a circular yellow seal near the lower-left/lower-center edge of the image composition, inspired by the supplied screenshot.

- Outer text must remain `Get Membership` repeated around the circle with tasteful separators.
- Replace only the old Golfex center symbol with the existing NK monogram/ball-flight identity, using `assets/images/brand/nk-monogram-mark.svg` or a faithful inline treatment derived from that existing asset.
- The outer text ring rotates slowly and continuously.
- The central NK mark remains upright and stationary.
- Hovering or keyboard-focusing the seal pauses the outer rotation and adds a restrained lift/scale/shadow response.
- Make the entire seal an honest link to `pricing-plan.html`, with an accessible label such as `Explore Fan Card membership concepts`.
- Touch interaction must not leave a stuck hover state.
- Under `prefers-reduced-motion: reduce`, disable continuous rotation, lift, zoom, tilt, and nonessential transitions while keeping the seal fully legible and functional.

### Right-side content

Use concise fictional/prototype-safe content:

- eyebrow: `Meet Nazario`
- heading: `Inside Nazario Kayla's journey.`
- lead: explain that this fictional athlete profile demonstrates how supporters could follow a career and eventually access approved fan-club experiences.
- feature 1: `A career built through consistency` with a short fictional-story description that makes no real-world claim.
- feature 2: `A closer connection for supporters` with a short explanation of the future fan-platform direction, without claiming functionality exists.
- CTA: `Explore Her Journey` linking to `about-us.html`.
- include a restrained disclosure that Nazario Kayla and the storyline are fictional prototype content.

Do not reintroduce golf-club, course-membership, venue, facility, booking, sponsor, or real-athlete claims. Do not include prices or transaction language in this section.

## Visual behavior

- Match the existing homepage's ink/cream/sand/yellow tokens, typography, container width, spacing rhythm, rounded corners, and focus treatment.
- Desktop: two-column layout; overlapping image cards and seal on the left, content on the right.
- Tablet: retain two columns where practical with reduced overlap and proportional seal sizing; stack before content becomes cramped.
- Mobile: image composition then content; controlled overlap; seal remains attached to the image group without covering the athlete, text, or viewport edge.
- Images preserve aspect ratio and never stretch.
- Add only subtle hover movement to image cards; no exaggerated tilt or parallax.
- No page-level horizontal overflow.

## JavaScript and interaction boundary

Inspect existing homepage scripts before adding anything. Use CSS animation and `:hover`/`:focus-visible` pause behavior if sufficient. Do not duplicate listeners, introduce GSAP usage, add dependencies, track users, or add application state. If no JavaScript is required, change no JavaScript files and say so.

## Verification

Serve locally over HTTP and verify:

1. Section is exactly between Achievements and Fan Cards in the DOM.
2. Desktop, tablet, and narrow-mobile layouts are visually balanced with no clipping or page overflow.
3. Outer membership text rotates while the center NK mark stays upright.
4. Hover and keyboard focus pause rotation; focus remains visible; the link resolves to `pricing-plan.html` with HTTP 200.
5. Reduced-motion CSS disables decorative movement by source inspection and live emulation if available; disclose tooling limitations.
6. Athlete is unobstructed and the excluded different-person image is not used.
7. Exactly one homepage `<h1>` remains and heading order is logical.
8. No real athlete/brand names, Golfex-visible copy, forms, storage, APIs, authentication, checkout, payment, or fake functionality are introduced.
9. Header/footer/navigation and all non-homepage pages remain untouched.
10. The four sensitive screenshots numbered 17–20 remain untracked, untouched, and unstaged.
11. No console errors and `git diff --check` passes.

Do not commit, amend, push, create a PR, change branches, or modify Git configuration. Finish with exact files changed, verification results, `git status --short`, and any honestly disclosed limitation.
