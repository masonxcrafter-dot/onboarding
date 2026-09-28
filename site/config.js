/*
 * Valero Labs onboarding — site settings.
 * Edit the values below, then redeploy. Nothing else needs to change.
 */
window.VALERO_CONFIG = {
  // Who the client talks to. Shown in the sidebar, portal and done screen.
  strategist: {
    name: "[STRATEGIST NAME]",
    phone: "[PHONE]",
    email: "[EMAIL]"
  },

  // Used in the access instructions ("invite ___ as Manager").
  agencyEmail: "[AGENCY EMAIL]",
  metaBusinessId: "[BUSINESS ID]",

  // Kickoff call booking page.
  calendlyUrl: "https://calendly.com/masonvoeng/valero-labs-on-boarding-call",
  // true = show the Calendly scheduler inline on the kickoff step.
  embedCalendly: true,

  // Optional shared folder (Google Drive / Dropbox "file request" link) for large uploads.
  // Leave "" to hide the link.
  uploadFolderUrl: "",

  // Where finished onboarding answers are sent.
  // Paste a GoHighLevel inbound webhook, Zapier/Make webhook, or Formspree endpoint.
  // Answers go as JSON. If sendFilesTo is also set, files are sent there as multipart/form-data.
  // Leave "" and clients will see a "Copy my answers" button instead.
  submitUrl: "",
  sendFilesTo: "",

  // Days from kickoff to launch, shown in the portal.
  launchDays: 14
};
