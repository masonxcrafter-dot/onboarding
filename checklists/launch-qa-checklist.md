# Launch QA Checklist

**Client:** ________ · **Built by:** ________ · **QA by:** ________ (must be someone who didn't build it) · **Date:** ________

> 🚫 **Do not launch until everything passes.**

## Funnel
- [ ] Landing page works (all links, buttons, images load)
- [ ] Mobile responsive (tested on a real phone, iOS + Android if possible)
- [ ] Click-to-call works on mobile
- [ ] Form works (all fields, validation, submits)
- [ ] Calendar works (correct availability, time zone, buffers)
- [ ] Thank-you page works
- [ ] SMS consent + privacy policy present
- [ ] Page speed acceptable (< 3s on mobile)
- [ ] No typos; phone number, address, and offer are correct

## CRM
- [ ] Lead enters CRM
- [ ] Correct pipeline stage (New Lead)
- [ ] Source / UTM fields populated
- [ ] SMS fires to lead
- [ ] Internal notification fires to the client
- [ ] Lead assigned correctly
- [ ] Appointment confirmation + reminders fire
- [ ] Missed-call text-back fires
- [ ] Estimate follow-up sequence triggers and stops on reply
- [ ] A2P 10DLC approved; test SMS actually delivered

## Tracking
- [ ] Pixel fires on landing page
- [ ] Lead / conversion event fires on submit (checked in Events Manager test tool)
- [ ] Call tracking number routes to the right phone
- [ ] UTMs present on every ad

## Ads
- [ ] Correct account
- [ ] Correct location
- [ ] Correct budget
- [ ] Correct audience
- [ ] Correct creative
- [ ] Correct CTA
- [ ] Correct destination URL (with UTMs)
- [ ] Tracking installed
- [ ] Special Ad Category checked if applicable (e.g. financing / credit offers)

## End-to-End Test
- [ ] Submit a fake lead
- [ ] Call the number
- [ ] Book a test appointment
- [ ] Confirm every automation
- [ ] Delete all test data before launch

**QA sign-off:** ________ ✅
