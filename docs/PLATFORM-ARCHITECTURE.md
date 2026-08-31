# Athlete Fan Platform Architecture and Roadmap

## Conceptual architecture

```text
Public visitors ─┐
Customers ───────┼──> Cloudflare Pages frontend
Administrators ──┘              │
                                v
                     Backend API / server functions
                       │       │        │
                       │       │        └── Crypto rate source
                       │       └────────── Authentication/authorization
                       v
                    Database
                       │
     ┌─────────┬───────┼────────┬───────────┬──────────┬─────────┐
     v         v       v        v           v          v         v
   Users    Packages  Orders  Payments  Memberships  Bookings  Audit log

Public receiving addresses may be stored by the platform.
Private keys and wallet recovery material must remain outside the platform.
```

This diagram is conceptual. Cloudflare Pages remains suitable for the public frontend, but the backend, database, and authentication services require a documented comparison before selection.

## Public experience map

The proposed public homepage contains:

1. Header and navigation
2. Athlete hero
3. Short career introduction
4. Career highlights and statistics
5. Latest news and media
6. Fan-card packages
7. Fan experiences and bookings
8. Sponsors
9. Fan community or testimonials
10. FAQ
11. Final membership CTA
12. Footer

## Development stages

### 1. Public website

Build the public pages and design system. Store public copy, images, news, sponsors, statistics, fan-card summaries, booking-type summaries, and contact submissions. Validate public forms, control media, and prevent spam. Completion requires approved responsive pages.

### 2. Authentication

Build registration, optional email verification, login, logout, password reset, protected routes, and account states. Store user identity, verification state, role, status, and timestamps. Never store plaintext passwords. Completion requires secure account isolation and recovery.

### 3. Backend and database foundation

Compare Cloudflare-compatible database, backend, authentication, email, and storage options before selecting them. Then create the API, schema, migrations, validation, environment separation, and audit foundations. Completion requires a recorded architecture decision and reviewed schema.

### 4. Customer dashboard

Build dashboard overview, profile, fan cards, memberships, orders, payments, bookings, and logout. Every API query must enforce record ownership. Completion requires proving that test customers cannot access one another's data.

### 5. Fan-card packages

Make package name, price, benefits, duration, availability, display order, and version configurable. Snapshot package details when an order is created so later product edits do not rewrite purchase history.

### 6. Orders

Create server-generated order numbers and immutable item/price snapshots. Initial status is `PENDING`. The server calculates totals and protects against duplicate requests, replay, and browser-supplied prices.

### 7. Manual BTC, ETH, and SOL payments

Let customers choose an asset and show a server-recorded exchange-rate snapshot, exact crypto amount, network, public address, QR code, instructions, expiration, and TXID form. Store USD amount, crypto amount, rate/time/source, asset, network, public address, TXID, status, and timestamps.

TXID submission produces only `PAYMENT_SUBMITTED`.

### 8. Administrator verification

Build a protected queue showing customer, order, fan card, USD/crypto amounts, network, address, TXID, submission time, payment status, and membership status. Actions include view, copy/open TXID, mark under review, approve, reject, activate, and deactivate where policy permits. Log every decision and override.

### 9. Membership activation

Generate member IDs and store tier, originating order, status, activation, expiration, and deactivation reason. Activation follows authorized payment approval; TXID submission alone can never activate membership.

### 10. Bookings

Support Meet & Greet, appearances, events, personalized messages, fan experiences, and other approved services. A booking may require approval before payment.

Suggested lifecycle:

`REQUESTED → UNDER_REVIEW → APPROVED → PAYMENT_REQUIRED → CONFIRMED → COMPLETED`

Alternative terminal states include `REJECTED` and `CANCELLED`.

### 11. Future payment integrations

Add provider adapters for credit/debit cards, Apple Pay, Google Pay, PayPal, Venmo, ACH, or suitable US options without changing the core order or membership model. Verify signed webhooks and use idempotency; never trust a success redirect alone.

### 12. Production security and deployment

Complete environment separation, HTTPS, monitoring, backups, restoration testing, error reporting, email delivery, abuse controls, dependency scanning, Content Security Policy, secure cookies, privacy/retention rules, accessibility review, and incident procedures. Require strong admin authentication and MFA readiness.

## Primary data entities

Expected high-level entities:

- User
- User profile
- Role/account state
- Fan-card package
- Package benefit
- Membership plan
- Membership-plan benefit
- Order
- Order item
- Payment attempt
- Crypto rate snapshot
- Public receiving-address configuration
- Fan card
- Membership
- Booking type
- Booking
- Admin review/action
- Audit event
- Notification

Exact tables and relationships are deferred until the technology comparison and schema-design stage.

## Status models

Payment:

`PENDING → PAYMENT_SUBMITTED → UNDER_REVIEW → PAID | REJECTED | EXPIRED`

Order:

`PENDING → PAYMENT_SUBMITTED → UNDER_REVIEW → PAID | REJECTED | EXPIRED`

Membership:

`INACTIVE → ACTIVE → EXPIRED | DEACTIVATED`

Booking:

`REQUESTED → UNDER_REVIEW → APPROVED → PAYMENT_REQUIRED → CONFIRMED → COMPLETED`

Booking alternatives: `REJECTED`, `CANCELLED`.

These are initial models, not permission to implement arbitrary status mutations. Valid transitions and responsible roles must be defined server-side.

## Production approval invariant

Manual crypto approval must be performed by an authorized administrator and committed atomically. A successful approval changes payment, order, and membership together and records an audit event. If any part fails, none of the state changes should be committed.
