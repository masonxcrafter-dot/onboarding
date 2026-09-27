# Valero Labs — Client Onboarding System

> **The client isn't just hiring us for ads. They're handing us the system responsible for turning marketing into booked jobs.**

**Primary niche:** Contractors / Home Service Businesses
**Primary outcome:** Build and manage a predictable **lead → appointment → job** acquisition system.

This repo is the Valero Labs internal operating system for onboarding a new client — from "Closed Won" to a live, reporting, retained account. Every client follows the same path, whether we're onboarding one contractor or fifty.

---

## Client Lifecycle

```text
SALE CLOSED → Agreement Signed → Payment Collected → Welcome Email → Intake Form
→ Asset + Access Collection → Internal Client Setup → Kickoff Call → Strategy + Offer
→ CRM/Funnel Build → Creative Production → Tracking + Automations → QA
→ Campaign Launch → Optimization → Weekly Reporting → 30-Day Review → Scale / Retain
```

## Target Timeline (Close → Live in 14 days)

| Day | Milestone | Owner | Gate to move on |
| --: | --- | --- | --- |
| 0 | Sale closed, agreement + payment link sent | Sales | Agreement signed **and** payment received |
| 0–1 | Welcome email + onboarding link sent | Account Manager | Email sent, internal folder created |
| 1–3 | Intake form, assets, access submitted | Client (AM chases) | Intake submitted, required access granted |
| 3–5 | Kickoff call (30–45 min) | Account Manager | Call notes logged |
| 5–6 | Growth Brief written + approved internally | AM + Media Buyer | Brief signed off |
| 6–11 | Funnel, CRM, automations, creative, tracking built | Automation / Creative / Media Buyer | All build tasks complete |
| 12–13 | Launch QA — test lead end-to-end | Media Buyer + Automation | **Every** QA item passes |
| 14 | Campaign launch + client notified | Media Buyer + AM | Launch email sent |
| 15–21 | First 7 days — daily monitoring | Media Buyer | Day 1 / 3 / 7 reviews logged |
| Weekly | Report + 15–20 min client call | Account Manager | Report delivered |
| 30 | 30-Day Review → Scale / Retain plan | AM + Media Buyer | Next growth plan agreed |

> Timelines slip almost always because of **client-side access and assets**. The AM owns chasing them — see the follow-up cadence in [`sop/02-intake-access-assets.md`](sop/02-intake-access-assets.md).

---

## How to Use This Repo

| Folder | What's inside |
| --- | --- |
| [`sop/`](sop/) | Step-by-step Standard Operating Procedures for every phase |
| [`templates/`](templates/) | Copy-paste emails, SMS, forms, scripts, briefs, and reports |
| [`checklists/`](checklists/) | Master onboarding checklist, launch QA checklist, and an importable task CSV |
| [`ghl/`](ghl/) | GoHighLevel pipelines, workflows, custom fields, and automations spec |

### SOPs (in order)

0. [Principles, Roles & Communication Rules](sop/00-principles-roles-communication.md)
1. [Sale Closed & Client Welcome](sop/01-sale-closed-and-welcome.md) — Phases 1–2
2. [Intake, Access & Asset Collection](sop/02-intake-access-assets.md) — Phase 3
3. [Internal Client Setup](sop/03-internal-client-setup.md) — Phase 4
4. [Kickoff Call & Strategy](sop/04-kickoff-and-strategy.md) — Phases 5–6
5. [Funnel, CRM & Automations Build](sop/05-funnel-crm-automations.md) — Phases 7–9
6. [Creative Production](sop/06-creative-production.md) — Phase 10
7. [Tracking, QA & Launch](sop/07-tracking-qa-launch.md) — Phases 11–13
8. [Optimization & Weekly Reporting](sop/08-optimization-and-reporting.md) — Phases 14–16
9. [30-Day Review & Retention](sop/09-30-day-review-and-retention.md) — Phase 17

### Templates

- [Welcome Email](templates/welcome-email.md)
- [Client Intake Form](templates/client-intake-form.md)
- [Access Request Guide (client-facing)](templates/access-request-guide.md)
- [Asset Request List (client-facing)](templates/asset-request-list.md)
- [Kickoff Call Script](templates/kickoff-call-script.md)
- [Client Growth Brief](templates/growth-brief.md)
- [Landing Page Outline](templates/landing-page-outline.md)
- [SMS & Automation Messages](templates/sms-automation-messages.md)
- [Launch Email](templates/launch-email.md)
- [Weekly Report](templates/weekly-report.md)
- [Weekly Client Call Agenda](templates/weekly-call-agenda.md)
- [30-Day Review](templates/30-day-review.md)

### Checklists

- [Master Onboarding Checklist](checklists/master-onboarding-checklist.md)
- [Launch QA Checklist](checklists/launch-qa-checklist.md)
- [Onboarding Tasks CSV](checklists/onboarding-tasks.csv) — import into ClickUp / Asana / Monday / GHL Tasks

### GoHighLevel

- [Pipelines, Workflows & Custom Fields](ghl/ghl-setup.md)

---

## The Two Hard Gates

1. **No onboarding starts** until **Agreement = Signed** and **Payment = Received**.
2. **No campaign launches** until **every** item on the [Launch QA Checklist](checklists/launch-qa-checklist.md) passes.
