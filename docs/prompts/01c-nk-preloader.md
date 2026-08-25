# Claude Code Prompt 01C — Shared NK Preloader

Copy the block below into Claude Code in `/Users/mac/Desktop/golf/site`.

```text
Replace the inherited Golfex page-loader visual with a shared Nazario Kayla loader across every public HTML page.

Read `CLAUDE.md`, `docs/BRAND-DIRECTION.md`, `docs/prompts/01-public-foundation.md`, the existing brand SVGs, `assets/css/site-shell.css`, and the current preloader CSS/JS before editing. Preserve branch `athlete-platform-concept`, the dirty worktree, and all completed page designs. Do not commit.

Scope:
- Create `assets/images/brand/nk-loader.svg`.
- Update shared loader styling in `assets/css/site-shell.css` only as needed.
- Replace every HTML reference to `assets/images/theme/loader.svg` with the new asset; there are currently 26 references.
- Make the repeated preloader decorative to assistive technology (`aria-hidden="true"` where appropriate) without changing page content or navigation.
- Do not modify page bodies, headers, footers, product content, or unrelated inherited scripts/styles.

Visual direction:
- Ink-black loading surface.
- Center the approved cream NK monogram direction.
- Animate one yellow golf ball along a clean rising ball-flight arc around/above the monogram.
- Add only a subtle monogram fade/scale; no spinner, Golfex mark, text slogan, flashing, bounce, or electric blue.
- Total visual cycle about 0.9–1.2 seconds and smooth on reload.
- Keep the mark crisp and centered at desktop and mobile sizes.
- `prefers-reduced-motion: reduce` must show the static NK mark and yellow ball/arc with no travel or scaling animation.
- The SVG must be original and based on the project-owned NK brand direction, not a real athlete/company logo.

Implementation notes:
- A self-contained animated SVG is preferred so the ball and arc remain synchronized; embedded SVG CSS may use motion-path/offset-path with a safe static fallback.
- The external `<img>` remains decorative (`alt=""`).
- Ensure existing loader-dismiss behavior still completes even if animation is disabled or the SVG fails; do not extend or block page loading.
- If the old theme `.loading` ring remains visible behind the new mark, override only that obsolete visual in `site-shell.css` rather than rewriting the loader lifecycle.

Verify:
1. Confirm exactly zero HTML references to `assets/images/theme/loader.svg` and exactly 26 references to `assets/images/brand/nk-loader.svg`.
2. Reload `index.html`, `about-us.html`, `pricing-plan.html`, `shop.html`, and one legacy page over local HTTP; the NK loader appears and dismisses normally.
3. Confirm the yellow ball follows the arc, the monogram stays centered, and no Golfex loader is visible.
4. Test desktop, mobile near 390px, and reduced-motion emulation.
5. Confirm no page-level overflow, stuck overlay, delayed interaction, broken asset, or console error.
6. Validate the SVG/XML and report every changed file. Do not commit.

Before editing, state this shared-loader-only scope. Then implement and verify.
```
