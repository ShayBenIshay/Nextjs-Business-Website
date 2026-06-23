# Shay Tech Solutions — Marketing Site

Next.js 16 (App Router) + React 19 marketing site for shaytechsolutions.com.
Hebrew/RTL, statically exported, deployed to Hostinger via git.

## Local development

```bash
npm install
cp .env.example .env   # then fill in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

Open http://localhost:3000.

## Build & deploy

`next.config.mjs` sets `output: 'export'`, so `npm run build` produces a fully
static site in `out/`. Hostinger pulls `out/` via the git integration; the
included `public/.htaccess` is copied into `out/.htaccess` and handles HTTPS
redirect, www canonicalization, and security headers.

```bash
npm run build   # outputs to ./out
```

## Project layout

- `app/` — App Router pages (Hebrew, RTL). `layout.js` wires GA4 with Google
  Consent Mode v2 (denied by default until cookie banner accept).
- `components/` — one folder per component, co-located CSS modules.
- `lib/gtag.js` — GA4 helpers (`pageview`, `event`, `updateConsent`).
- `public/` — static assets and the production `.htaccess`.

## Contact form

`components/TalkToMeSection` POSTs directly to `api.web3forms.com/submit`
using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. The form includes a hidden
`botcheck` honeypot; restrict the allowed origin in the Web3Forms dashboard
to keep the public key from being abused.
