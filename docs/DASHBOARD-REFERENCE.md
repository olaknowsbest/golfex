# Customer Dashboard Reference Analysis

## Source material

The user supplied 20 screenshots stored in `docs/reference/dashboard/`. They cover:

1. Payment-method selection
2. Dashboard summary and quick actions
3. Fan-card empty state and package selection
4. Booking list and booking-request form
5. Subscription tiers
6. Personalized-message request
7. Donation list and donation form
8. Merchandise detail/purchase
9. Manual cryptocurrency selection, wallet address, QR code, instructions, and submission

These screenshots are visual and workflow references only. Do not copy source code, logos, text, wallet addresses, QR codes, customer data, tokens, chat widgets, or brand identity from them.

## Patterns to reuse

- Persistent left navigation on desktop
- Compact top bar for search, notifications, cart, and account
- Page title plus one primary action
- Summary cards for fan cards, bookings, memberships, orders, and payments
- Empty states with a clear next action
- Bordered content panels and consistent form fields
- Order summary adjacent to payment details on wide screens
- Responsive stacking on small screens
- Explicit status badges and lifecycle language
- Copy-address action and network-specific QR presentation
- Separate list, detail, and create/request screens

## Patterns to change

- Replace electric blue with the project's yellow/cream accent system.
- Remove the third-party management logo and all copied brand elements.
- Remove the floating chat robot unless support requirements later justify a restrained support tool.
- Do not put merchandise search in the global header unless merchandise becomes a confirmed launch feature.
- Do not show donations, subscriptions, personalized messages, or merchandise in the first dashboard release unless their business rules are approved.
- Reduce oversized empty space and improve information density without making screens crowded.
- Keep labels and statuses consistent across overview, list, and detail pages.
- Avoid four competing pricing tiers when the approved concept currently has Standard, Premium, and VIP.

## Critical workflow corrections

The screenshots are not authoritative requirements. Several visible behaviors conflict with this project's safety rules:

- A transaction hash must be required for manual crypto submission, not optional.
- A proof-of-payment screenshot should not replace a valid TXID. If uploads are supported later, treat them as supplemental and scan/restrict them securely.
- The chosen currency, displayed network, wallet address, QR code, amount, and written instructions must always agree. The reference visibly selects Ethereum while some instructions mention Bitcoin.
- Show both USD total and the exact crypto amount derived from a timestamped rate snapshot.
- Explicitly name the blockchain network; do not rely only on the asset name.
- Submission produces `PAYMENT_SUBMITTED`, never confirmation or activation.
- Do not promise verification within `2–4 hours` unless operations can guarantee it.
- Do not tell a customer to wait for automatic blockchain confirmation when the current process is administrator-reviewed.
- Never reuse the public wallet address or QR code visible in the screenshots.
- Never place private keys, seed phrases, recovery phrases, wallet passwords, or signing credentials in the site, database, repository, logs, or admin screens.
- Fan-card quantity should normally be one entitlement per order unless gifting/bulk sales are deliberately designed.
- Booking price and availability should not be treated as automatically approved. A booking can require review before a quote or payment request.

## Recommended first-release customer navigation

Keep the authenticated MVP focused:

```text
Dashboard
My Fan Cards
My Memberships
My Orders
My Payments
My Bookings
Profile
Logout
```

`My Fan Cards` and `My Memberships` are intentionally separate. Fan Cards are one-time tiered products; Memberships are recurring monthly or yearly plans. They share order/payment infrastructure but do not automatically grant one another.

Deferred until separately approved:

```text
Merchandise
Subscriptions
Personalized Messages
Donations
Notifications
Live Support
```

## Proposed dashboard overview

Header:

- `Welcome back, {first name}`
- Member ID
- Account/verification status

Primary summaries:

- Active fan card and expiration
- Pending order/payment review
- Upcoming booking
- Recent order

Activity panels:

- Recent payments
- Recent orders
- Upcoming bookings
- Important account notices

Quick actions:

- View fan cards
- Request a booking
- Continue a pending payment
- Update profile

Do not invent counts or display zero-filled vanity metrics when a useful empty state is clearer.

## Manual crypto screen specification

Wide layout:

- Left/main: payment method, network, rate/amount snapshot, public receiving address, copy action, QR code, instructions, required TXID field, and submit action.
- Right/sticky summary: order number, fan-card package, USD price, crypto amount, payment expiration, and current status.

Required content:

```text
Order number
Fan-card package
USD amount due
Selected cryptocurrency
Exact crypto amount
Network
Public receiving address
Rate timestamp / payment expiration
QR code
Required TXID
Status and review explanation
```

Submission response:

```text
PAYMENT SUBMITTED
Your transaction information has been received for review.
Status: AWAITING VERIFICATION
Your fan card remains inactive until an authorized administrator approves the payment.
```

## Admin reference gap

The supplied screenshots cover customer-facing pages only. They do not establish the protected administrator design. Admin payment review must be designed separately with role enforcement, transaction inspection links, notes, approval/rejection controls, membership activation/deactivation, and an audit trail.

## Build boundary

Do not implement these dashboard screens during the public-site stage. They are saved now so their information architecture can inform later schema and UI decisions after authentication and database choices are documented.
