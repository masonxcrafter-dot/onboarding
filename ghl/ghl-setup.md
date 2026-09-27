# GoHighLevel Setup — Valero Labs

Make the entire onboarding visible from one dashboard:

```text
NEW CLIENT → INTAKE → ACCESS → KICKOFF → BUILD → QA → LIVE → OPTIMIZATION
```

And have GHL automatically trigger:

```text
Closed Won → Welcome Email → Intake Form → Internal Tasks → Kickoff Reminder → Onboarding Complete → Client Live
```

There are **two layers**:
1. **Agency account (Valero Labs)** — our sales + client onboarding pipelines
2. **Client sub-accounts** — each client's lead pipeline and automations (snapshot)

---

## 1. Agency Account

### Pipeline A — Sales
`New Lead → Booked Call → Showed → Proposal Sent → Closed Won / Closed Lost`

### Pipeline B — Client Onboarding

| Stage | Entry criteria | Exit criteria | Owner |
| --- | --- | --- | --- |
| **New Client** | Agreement signed + payment received | Welcome email sent | AM |
| **Awaiting Intake** | Welcome sent | Intake form submitted | AM |
| **Awaiting Access** | Intake submitted | All required access verified | AM |
| **Kickoff Scheduled** | Access verified (or in progress) + call booked | Kickoff held, notes logged | AM |
| **Strategy** | Kickoff complete | Growth Brief approved | AM + Media Buyer |
| **Build** | Brief approved | Funnel, CRM, automations, tracking built | Automation |
| **Creative** | Brief approved (runs parallel to Build) | Creative approved + exported | Creative |
| **QA** | Build + Creative done | Launch QA passed + signed off | Media Buyer |
| **Ready to Launch** | QA passed | Campaign published | Media Buyer |
| **Live** | Campaign published + launch email sent | Day 30 | AM |

### Pipeline C — Client Success (after Live)
`First 7 Days → Optimizing → 30-Day Review → Retained / Scale → At Risk → Churned`

### Agency custom fields (on the client contact/opportunity)
- Package · Setup fee · Monthly fee · Ad budget
- Primary service · Service area · Avg job value · Capacity (jobs/month)
- Target launch date · Actual launch date
- AM · Media Buyer · Creative · Automation owner
- Intake submitted (Y/N) · Access verified (Y/N) · Assets received (Y/N)
- Client folder URL · GHL sub-account ID
- 90-day goal (verbatim)

### Agency workflows

| # | Workflow | Trigger | Actions |
| - | --- | --- | --- |
| A1 | **Closed Won → Onboarding** | Opportunity status = Won (Sales pipeline) **AND** payment received (invoice paid / Stripe) | Create opportunity in Onboarding → *New Client*; assign AM; internal notification; create task set |
| A2 | **Welcome** | Stage = New Client | Send [welcome email](../templates/welcome-email.md) with intake, access, asset, calendar links; move to *Awaiting Intake* |
| A3 | **Intake Chase** | Stage = Awaiting Intake | Day 2 SMS, Day 3 email, Day 4 task: AM call; Day 5+ daily reminder; Day 7 internal flag. **Exit** when form submitted |
| A4 | **Intake Submitted** | Intake form submitted | Map answers to custom fields; notify AM; move to *Awaiting Access*; create internal setup tasks |
| A5 | **Access Chase** | Stage = Awaiting Access | Same cadence as A3 for access; exit when "Access verified" = Y |
| A6 | **Kickoff Reminder** | Kickoff appointment booked | Move to *Kickoff Scheduled*; reminder 24h + 1h before; notify AM |
| A7 | **Kickoff Complete** | Appointment status = Showed | Move to *Strategy*; task: Growth Brief due in 1 business day |
| A8 | **Onboarding Complete** | Stage = Ready to Launch | Notify team; task: send launch email |
| A9 | **Client Live** | Stage = Live | Create Client Success opportunity (*First 7 Days*); schedule Day 1/3/7 review tasks, weekly report tasks, and 30-day review (Day 30) |
| A10 | **Stalled Stage Alert** | Opportunity in same stage > 3 days (before Live) | Notify AM + internal channel |

---

## 2. Client Sub-Account (build once as a Snapshot)

Create a **"Valero Labs — Contractor Snapshot"** with everything below and load it into each new sub-account, then customize.

### Lead Pipeline
`New Lead → Contacted → Qualified → Appointment Booked → Appointment Confirmed → Appointment Completed → Estimate Sent → Follow-Up → Won / Lost`

### Custom fields
- Service requested · Property address · Timeline
- UTM source / medium / campaign / content / term · Lead source
- Estimate amount · Job value (on Won) · Lost reason

### Workflows

| # | Workflow | Trigger | Actions |
| - | --- | --- | --- |
| C1 | **New Lead** | Form submitted / new contact from ads | Create opp in *New Lead*; instant SMS to lead; internal 🔥 notification to lead handler; assign user |
| C2 | **Speed-to-Lead Escalation** | 5 min after C1 with no outbound call/reply | Second notification to lead handler + owner |
| C3 | **Missed Call Text-Back** | Inbound call status = missed | Text-back SMS |
| C4 | **Appointment Confirmation** | Appointment booked | Move to *Appointment Booked*; confirmation SMS "Reply YES"; on YES → *Appointment Confirmed* |
| C5 | **Appointment Reminders** | Appointment booked | 24h and 2h reminders |
| C6 | **No-Show** | Appointment status = no-show | No-show SMS; task for client to call |
| C7 | **Estimate Follow-Up** | Stage = Estimate Sent | Day 1 / 3 / 7 / 14 / 30 messages; **exit on reply, Won, or Lost** |
| C8 | **Won** | Stage = Won | Require job value; send review request (optional) |
| C9 | **Conversion Sync** | Stage = Appointment Booked / Won | Send offline conversion events to Meta / Google (when set up) |

Message copy: [`templates/sms-automation-messages.md`](../templates/sms-automation-messages.md)

### Also in the snapshot
- Landing page + thank-you page template ([outline](../templates/landing-page-outline.md))
- Lead form with SMS consent
- Calendar template (estimate appointment, 60 min, buffers)
- Reporting dashboard: leads, appointments, show rate, estimates, won, revenue by source

### Sub-account launch requirements
- [ ] A2P 10DLC brand + campaign approved
- [ ] Phone number purchased + forwarding to client
- [ ] Client users invited + GHL mobile app installed
- [ ] Quiet hours set (8am–9pm local)
