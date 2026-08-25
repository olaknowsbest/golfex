# Future Authentication Requirements

Status: deferred until the backend and authentication architecture decision.

The current `login.html` remains an honest prototype holding page. Do not add fake fields, credentials, sessions, or dashboard behavior during the public-site stage.

## Approved future login direction

Use the supplied NK Management login screenshot as composition inspiration only:

- centered dark authentication card;
- NK black, cream, sand, and yellow brand treatment rather than electric blue;
- email and password sign-in;
- password visibility control;
- forgot-password flow;
- primary sign-in action;
- `Continue with Google` OAuth option;
- account-registration link;
- email verification where required;
- secure session creation and logout;
- authenticated redirect to the customer dashboard.

Do not copy NK Management branding, wording, user data, proprietary assets, or live implementation.

## Architecture gate

Before implementation, approve and document:

- authentication provider and backend architecture;
- Google OAuth/OIDC configuration and redirect origins;
- password hashing/handling ownership;
- email verification and account-recovery delivery;
- secure cookie and session policy;
- CSRF, rate limiting, bot/abuse protection, and audit requirements;
- customer/admin roles and authorization boundaries;
- account isolation tests;
- privacy, retention, deletion, and incident procedures.

No public UI should claim authentication works until the end-to-end flows and security controls are verified.
