# Claude Code Prompt 01 — Public Foundation

Copy everything inside the prompt block into Claude Code while its working directory is `/Users/mac/Desktop/golf/site`.

```text
We are beginning Stage 1 of the fictional Nazario Kayla athlete fan-platform prototype in this existing repository.

Before editing anything, read these files completely:

1. CLAUDE.md
2. docs/PLATFORM-ARCHITECTURE.md
3. docs/BRAND-DIRECTION.md
4. docs/DASHBOARD-REFERENCE.md
5. README.md
6. CHANGELOG.md

Then inspect git status and the current static site structure. Preserve all existing user work and the untracked project documentation/reference assets. We are already working on the `athlete-platform-concept` branch. Do not create, switch, merge, or delete branches. Do not commit unless I explicitly ask.

This prompt authorizes only the first public-foundation brick. Do not implement or simulate authentication, registration, dashboards, databases, orders, payments, cryptocurrency submission, memberships, bookings, admin controls, donations, subscriptions, personalized messages, merchandise checkout, or backend APIs.

What to build now:

1. Establish the temporary concept identity using:
   - assets/images/brand/nk-monogram-concept.svg as the working site logo
   - Working label: “Nazario Kayla Fan Club — Prototype”
   - Working tagline: “Follow the journey. Join the experience.”

2. Update the shared public header/navigation across every HTML page to:
   - Home
   - About / Career
   - News & Media
   - Stats
   - Fan Cards
   - Bookings
   - Contact
   - Login

3. Use sensible mappings to existing placeholder HTML files where possible. If a required public destination does not exist, create only a matching styled placeholder page using the current shared shell. Every navigation link must resolve locally without a 404.

4. Replace the main header CTA with “Join the Fan Club” and link it to the Fan Cards page. This remains a public concept page; it must not create an order.

5. Update the shared footer identity and public quick links. Keep business contact details visibly marked as placeholders rather than inventing representation, management contact information, legal policies, or official social profiles.

6. Add a small, readable concept disclosure in the footer:
   “Fictional athlete platform prototype. Demonstration content only.”

7. Fix the light-page header contrast issue identified in CLAUDE.md. The header/navigation must remain readable on both dark photographic heroes and cream/light internal pages.

8. Consolidate only the minimum reusable public-shell CSS needed for the identity, header states, navigation, footer disclosure, buttons, focus states, and responsive behavior. Work with the existing static architecture; do not introduce a framework, package manager, or build step in this stage.

9. Preserve the approved palette and typography:
   - #0A0A0A ink black
   - #FCFBF5 warm cream
   - #F9F7EA soft sand
   - #FDF567 highlight yellow
   - #FFFFFF white
   - Inter Tight

10. Accessibility requirements:
    - Keep a working skip link.
    - Use meaningful logo alternative text.
    - Preserve logical heading structure.
    - Provide visible keyboard focus.
    - Ensure text contrast is readable.
    - Ensure the mobile menu has an accessible name and state.
    - Do not add split-letter animation to new headings.

11. Do not download or add real-athlete photography, sponsor marks, tournament logos, signatures, social-media images, or third-party branding. Existing golf-template images may remain temporarily where replacing them is outside this shell-only scope, but label them as generic placeholders and do not attribute them to Nazario Kayla.

Customer experience for this brick:

- A visitor sees one consistent fictional Nazario Kayla prototype identity.
- Navigation works on desktop and mobile.
- The site clearly states that it is an independent concept.
- Existing incomplete destinations remain honest styled placeholders.
- No visitor can register, pay, book, or submit personal data beyond the pre-existing nonfunctional placeholder form behavior.

Behind the scenes for this brick:

- Static HTML/CSS/JS only.
- No new data storage.
- No browser localStorage/sessionStorage used to fake application state.
- No private information or secrets.

Verification required before you finish:

1. Serve the site locally over HTTP.
2. Test index.html plus at least one light internal page at desktop width.
3. Test index.html plus at least one light internal page around 390px mobile width.
4. Verify the mobile menu opens, closes, and exposes the correct navigation.
5. Verify every shared navigation and primary CTA link resolves without a 404.
6. Check browser console errors on the tested pages.
7. Report every file changed or created.
8. Report anything intentionally deferred.
9. Do not claim that backend features exist.

Start by briefly restating the exact scope and listing the files you expect to touch. Then implement and verify this one brick.
```
