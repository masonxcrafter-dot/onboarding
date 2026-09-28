# Valero Labs — Onboarding Website

A static website with two pages, built from the Valero Labs design:

| Page | What it does |
| --- | --- |
| `index.html` | 11-step client onboarding flow: welcome → 7 intake sections → account access → brand assets → Calendly kickoff → done |
| `portal.html` | Client portal: launch plan, funnel numbers (after launch), to-dos, documents, strategist contact |

No build step and no framework. The site is plain HTML, CSS, and JS.

## Set it up (5 minutes)

Open **`config.js`** and fill in:

- `strategist` — name, phone, and email clients see
- `agencyEmail` and `metaBusinessId` — used in the access instructions
- `calendlyUrl` — already set to your onboarding call
- `submitUrl` — where answers are sent (see below)
- `uploadFolderUrl` — optional Google Drive / Dropbox link for large uploads

### Getting answers into GoHighLevel

1. In GHL, create a workflow with the **Inbound Webhook** trigger and copy its URL.
2. Paste it into `submitUrl` in `config.js`.
3. Complete one test onboarding, then map the fields in the webhook trigger (e.g. `answers.Business Name` → Company Name) and add actions: create/update contact, create opportunity in **Onboarding → Awaiting Access**, notify the AM.

When `submitUrl` is empty, the done screen shows a **Copy my answers** button, and the client emails them to the strategist.

### Receiving uploaded files

Webhooks accept JSON only, so files need their own endpoint. Set `sendFilesTo` to a form service that accepts file uploads (e.g. Formspree, Basin, Getform) and files are sent there as `multipart/form-data`. Otherwise, set `uploadFolderUrl` so clients can drop files into a shared folder.

## Deploy

Any static host works. Pick one:

- **Netlify / Vercel / Cloudflare Pages:** point it at this repo and set the publish directory to `site`.
- **GitHub Pages:** Settings → Pages → deploy from a branch → select `/site` via a GitHub Action, or copy the folder to a `docs/` folder.
- **GoHighLevel:** paste each page into a Custom HTML/JS element, with `styles.css`, `config.js`, and `app.js` inlined.

Send clients the link to `index.html` in the welcome email (`templates/welcome-email.md` → `[ONBOARDING LINK]`).

## Notes

- Progress saves in the client's browser (localStorage), so they can leave and come back on the same device.
- Required fields are validated before a client can move on. Email and phone formats are checked.
- The Calendly scheduler embeds inline (`embedCalendly: true`); the button opens Calendly in a new tab either way.
- Fonts: Bricolage Grotesque, IBM Plex Sans, and IBM Plex Mono from Google Fonts. Supports light and dark mode, and works on phones.
