# 03 — Internal Client Setup (Phase 4)

Once the intake form is submitted, the client moves into the internal onboarding pipeline.

## GHL Onboarding Pipeline

```text
New Client → Awaiting Intake → Awaiting Access → Kickoff Scheduled → Strategy
→ Build → Creative → QA → Ready to Launch → Live
```

Full stage definitions and automations: [`ghl/ghl-setup.md`](../ghl/ghl-setup.md).

## Setup Checklist
- [ ] Client folder created (structure below) and shared with the client's upload subfolders only
- [ ] Signed agreement saved to `01 - Contract`
- [ ] Intake responses exported to `02 - Intake`
- [ ] GHL sub-account created (or client's existing account connected)
- [ ] Project/task list created from [`checklists/onboarding-tasks.csv`](../checklists/onboarding-tasks.csv)
- [ ] Owners assigned for every role (AM, Media Buyer, Creative, Automation)
- [ ] Internal client channel created (e.g. `#client-companyname`)
- [ ] Client communication channel set up (one channel, AM as point of contact)
- [ ] Target launch date set and shared internally
- [ ] Access verified — log into each account and confirm permission level

## Client Folder Structure

Create one folder for every client:

```text
CLIENT NAME
│
├── 01 - Contract
├── 02 - Intake
├── 03 - Brand Assets
├── 04 - Photos
├── 05 - Videos
├── 06 - Testimonials
├── 07 - Ad Creative
├── 08 - Landing Pages
├── 09 - Reports
└── 10 - Strategy
```

**Naming convention:** `CompanyName - City ST` (e.g. `Summit Roofing - Austin TX`).
Share only `03`–`06` with the client for uploads; everything else stays internal.
