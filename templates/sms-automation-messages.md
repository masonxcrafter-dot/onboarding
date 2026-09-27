# SMS & Automation Messages

Replace `[brackets]` with GHL merge fields. Customize tone per contractor. All messages include opt-out handling at the account level.

## New Lead — to the lead (instant)
> Hey [First Name], this is [Company]. We just received your request. Are you available for a quick call?

## New Lead — internal notification (instant, to client's lead handler)
> 🔥 NEW LEAD — [Name] — [Phone] — [Service]

## New Lead — no reply after 5 min (optional)
> Hi [First Name], [Rep Name] here with [Company]. What's the best time today for a quick call about your [Service]?

## Missed Call Text-Back
> Hey, sorry we missed your call. This is [Company]. How can we help?

## Appointment Confirmation
> You're all set for [Date] at [Time]. Reply YES to confirm.

## Appointment Reminder — 24 hours before
> Just a reminder that we're scheduled for tomorrow at [Time].

## Appointment Reminder — 2 hours before (optional)
> Hi [First Name], [Rep Name] from [Company] will see you today at [Time] at [Address]. Reply here if anything changes.

## No-Show
> Hey [Name], looks like we missed you today. Want to get another time scheduled?

---

## Estimate Follow-Up Sequence

Trigger: opportunity moved to **Estimate Sent**. Stop when lead replies, is marked Won, or Lost.
The exact messaging should be customized to the contractor.

| Day | Channel | Starting copy |
| --- | --- | --- |
| **1** | SMS | Hi [First Name], thanks again for having us out. Any questions on the estimate for your [Service]? |
| **3** | SMS | Hey [First Name], just checking in on your [Service] estimate. Happy to walk through options — financing is available too. |
| **7** | Email + SMS | [First Name], wanted to make sure the estimate didn't get buried. Our schedule is filling up for [Month] — want us to hold a spot? |
| **14** | SMS | Hi [First Name], are you still planning on getting your [Service] done? If the timing's not right, no worries — just let me know. |
| **30** | SMS | Hey [First Name], [Company] here. Checking back in on your [Service] project — anything we can do to help you move forward? |
