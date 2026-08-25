# Pending Work

This file records intentionally deferred work so it is not lost between prompts.

## Immediate

- Review the complete uncommitted diff and create an approved Git checkpoint/commit only when the owner requests it.
- Perform a real-device or independent-browser spot check near 390px.
- Live-test the NK loader with `prefers-reduced-motion: reduce` when media emulation is available.

## Public-site decisions

- Decide whether to remove, archive, redirect, or retain the unlinked legacy Golfex pages.
- After that decision, audit and safely remove unused legacy Elementor/GSAP/jQuery page dependencies; do not delete original assets without approval.
- Replace fictional athlete identity/statistics only after written authorization, approved assets, and a licensed/approved statistics source.
- Replace fictional partner and merchandise marks only with approved names/assets and documented rights.

## Architecture decision

- Compare and document the best backend, PostgreSQL/database, authentication, email, storage, spam protection, monitoring, backup, and hosting options.
- Record an architecture decision before implementing forms, authentication, accounts, dashboards, orders, or payments.

## Authentication

- Implement the requirements in `docs/AUTHENTICATION-REQUIREMENTS.md` only after architecture approval.
- Future login: email/password, Google Sign-In, registration, verification, recovery, secure sessions, logout, and dashboard redirect.
- Keep the current public header CTA label `Join the Fan Club` unchanged during the prototype stage; its destination remains the Fan Cards concept page for now.
- During authentication implementation, connect `Join the Fan Club` to the approved real registration flow.
- Future signed-in header states: `My Account`/`Dashboard` and `Logout` where appropriate.

## Application and dashboard

- Backend/database foundation and migrations.
- Customer dashboard with strict account isolation.
- Profile, Fan Cards, memberships, orders, payments, bookings, and notifications.
- Contact submission/routing only after privacy, retention, spam controls, and recipient ownership are approved.
- Configurable Fan Card packages and immutable order snapshots.
- Authorized payment architecture, verification, admin review, audit logging, and atomic membership activation.
- Booking/request workflows, fulfillment rules, support ownership, and operational policies.

## Production readiness

- Privacy, terms, refund/cancellation, accessibility, retention/deletion, and incident policies.
- Security review, MFA readiness for administrators, rate limiting, CSP, monitoring, backups, restoration tests, and dependency scanning.
- End-to-end testing across browser, API, database, authorization, and audit records before launch.
