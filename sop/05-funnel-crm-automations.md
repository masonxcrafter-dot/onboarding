# 05 — Funnel, CRM & Automations Build (Phases 7–9)

## Phase 7 — Funnel Build

Default contractor funnel:

```text
AD → LANDING PAGE → FORM → CRM → INSTANT SMS → CALL / BOOKING → APPOINTMENT → ESTIMATE → JOB
```

### Landing Page
Full outline: [`templates/landing-page-outline.md`](../templates/landing-page-outline.md)

- **Headline:** `[Desired Outcome] Without [Major Pain Point]`
- **Subheadline:** service + location + offer
- **CTA:** *Get Your Free Estimate*
- **Sections:** Problem → Solution → Services → Why Choose Us → Reviews → Before/After → Process → Financing → FAQ → CTA

### Build checklist
- [ ] Landing page built on client subdomain (e.g. `get.clientdomain.com`)
- [ ] Mobile-first layout (most contractor traffic is mobile)
- [ ] Form: name, phone, email, zip/city, service needed, (optional) timeline
- [ ] Click-to-call button on mobile
- [ ] Thank-you page with next steps (+ optional calendar embed)
- [ ] Privacy policy + SMS consent language on the form (A2P compliance)

---

## Phase 8 — CRM Setup

### Lead Pipeline (client-facing)

```text
NEW LEAD → CONTACTED → QUALIFIED → APPOINTMENT BOOKED → APPOINTMENT CONFIRMED
→ APPOINTMENT COMPLETED → ESTIMATE SENT → FOLLOW-UP → WON / LOST
```

### Checklist
- [ ] Pipeline created with stages above
- [ ] Custom fields: service requested, lead source, UTM fields, job value, estimate amount, lost reason
- [ ] Lead assignment rules (who gets which leads)
- [ ] Calendar(s) with real availability + buffer times
- [ ] Client team users created + GHL mobile app installed on their phones
- [ ] Client trained on moving leads through stages (this is how we track revenue)

---

## Phase 9 — Automations

All message copy: [`templates/sms-automation-messages.md`](../templates/sms-automation-messages.md). Workflow specs: [`ghl/ghl-setup.md`](../ghl/ghl-setup.md).

| Workflow | Trigger | Action |
| --- | --- | --- |
| **New Lead** | Form submitted | Instant SMS to lead + internal 🔥 notification (SMS/app) to the client's lead handler |
| **Missed Call** | Inbound call not answered | Instant text-back |
| **Appointment Confirmation** | Appointment booked | Confirmation SMS, "Reply YES to confirm" |
| **Appointment Reminder** | 24h before (and 2h before) | Reminder SMS |
| **No-Show** | Appointment marked no-show | Reschedule SMS |
| **Estimate Follow-Up** | Moved to Estimate Sent | Day 1 · 3 · 7 · 14 · 30 sequence (customize per contractor) |
| **Stop on reply / booking** | Lead replies or books | Remove from nurture sequences |

### Compliance
- [ ] A2P 10DLC registration complete for the client's GHL number (SMS won't deliver reliably without it)
- [ ] STOP/opt-out handling enabled
- [ ] Quiet hours set (no automated SMS before 8am or after 9pm local time)
