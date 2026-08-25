# Claude Code Prompt 06A — Contact Scope Correction

```text
Correct the completed public Contact concept page in `/Users/mac/Desktop/golf/site`.

The page currently exposes future application/dashboard workflow too early. Remove these two sections completely from `contact-us.html`:

- `How enquiries could work later.` including Choose route / Submit details / Reference number / Track response.
- `What must be ready before messages open.` including operational-readiness cards.

Remove only the now-unused CSS for those sections from `assets/css/page-contact-concept.css`.

Keep the page focused on:

1. Existing hero and prototype/messaging-unavailable disclosure.
2. Existing four enquiry-route preview cards: Partnerships, Media, General enquiries, Platform support.
3. Existing Contact FAQ, but simplify any answer that describes workflow. It should only state that channels will open in a later release after the real backend, ownership, privacy, and operating policies are approved.
4. Existing final CTA.

Do not add replacement steps, process diagrams, tracking, ticket/reference numbers, forms, fields, buttons that submit, email/phone details, backend simulation, dashboard previews, or readiness checklists. Submission and enquiry tracking belong to the later authenticated dashboard/backend stage and are intentionally deferred.

Preserve the shared shell, NK loader, navigation, footer, other pages, and all unrelated Contact styling. Ensure the shorter page still has balanced spacing and no pale gap before the footer.

Verify at desktop, tablet, and narrow/mobile width: no overflow, no orphaned CSS, one H1, four route cards, four FAQ items, working final links, active Contact nav, working mobile menu, and no console errors. Confirm the removed workflow/readiness phrases no longer exist. Report exact changes and do not commit.
```
