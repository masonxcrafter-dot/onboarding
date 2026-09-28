(function () {
  "use strict";

  var CFG = window.VALERO_CONFIG || {};
  var STORE_KEY = "valero-onboarding-v1";

  // ---------- Question content ----------
  var QUESTIONS = [
    { nav: "Business information", navSub: "Contact, location, team", title: "Business information", sub: "The basics: who you are, how to reach you and where you work.", fields: [
      { k: "Owner Name", l: "Owner name", t: "in", req: 1, ph: "First and last name", ac: "name" },
      { k: "Business Name", l: "Business name", t: "in", req: 1, ph: "As customers know you", ac: "organization" },
      { k: "Lead Phone", l: "Phone for new leads", t: "in", req: 1, ph: "(555) 555-0123", type: "tel", ac: "tel" },
      { k: "Lead Email", l: "Email for lead alerts", t: "in", req: 1, ph: "you@company.com", type: "email", ac: "email" },
      { k: "Website", l: "Website", t: "in", ph: "https://", type: "url", ac: "url" },
      { k: "Home Base", l: "Home base (city, state)", t: "in", req: 1, ph: "e.g. Worcester, MA" },
      { k: "Years in Business", l: "Years in business", t: "in", ph: "e.g. 8", im: "numeric" },
      { k: "Team Size", l: "Team size", t: "in", ph: "e.g. 2 crews, 6 people" },
      { k: "Licensed & Insured", l: "Licensed and insured?", t: "in", w: 2, ph: "e.g. Licensed and insured in MA, $2M general liability" },
      { k: "Travel Radius", l: "How far will you travel for a job?", t: "chips", w: 2, opts: ["10 mi", "25 mi", "50 mi", "75+ mi"], def: "25 mi" }
    ]},
    { nav: "Services", navSub: "What you do", title: "Your services", sub: "What you do, and which jobs you want more of.", fields: [
      { k: "Trades", l: "What do you do?", t: "ta", w: 2, req: 1, ph: "e.g. Residential roofing and gutters, plus storm damage repair" },
      { k: "Services Offered", l: "List every service you offer", t: "ta", w: 2, ph: "e.g. Full roof replacement, repairs, gutters, skylights, inspections" },
      { k: "Priority Services", l: "Which services make you the most money? What should we push first?", t: "ta", w: 2, req: 1, ph: "e.g. Full replacements and storm claims" },
      { k: "Services to Avoid", l: "Jobs you don't want", t: "in", ph: "e.g. Small patch jobs, commercial flat roofs" },
      { k: "Seasonality", l: "Busy and slow seasons", t: "in", ph: "e.g. Slammed April–October, slow January–February" }
    ]},
    { nav: "Offer", navSub: "Why customers pick you", title: "Your offer", sub: "What you promise customers, and why they should pick you over the next guy.", fields: [
      { k: "Current Offer", l: "What's your current offer or promotion?", t: "ta", w: 2, ph: "e.g. Free inspection, same-week quote, $500 off full replacements" },
      { k: "Guarantees", l: "Guarantees or warranties", t: "in", ph: "e.g. 10-year workmanship warranty" },
      { k: "Financing", l: "Do you offer financing?", t: "in", ph: "e.g. Yes, through [LENDER] / No" },
      { k: "Pricing Model", l: "How do you price jobs?", t: "in", ph: "e.g. Per square, flat rate, time and materials" },
      { k: "Estimate Type", l: "How are estimates given?", t: "in", ph: "e.g. Free in-home, or photo quotes by text" },
      { k: "Differentiator", l: "Why do customers choose you over competitors?", t: "ta", w: 2, req: 1, ph: "e.g. Owner on every job, 4.9 stars on Google, we finish in one day" }
    ]},
    { nav: "Ideal customer", navSub: "Who you want more of", title: "Your ideal customer", sub: "Who you want more of, so we target the right people and filter out the wrong ones.", fields: [
      { k: "Customer Type", l: "Who are your best customers?", t: "in", ph: "e.g. Homeowners 45+, realtors, property managers" },
      { k: "Property Type", l: "Type of property", t: "in", ph: "e.g. Single-family homes, rentals, small commercial" },
      { k: "Target Areas", l: "Towns or zip codes you most want jobs in", t: "ta", w: 2, req: 1, ph: "e.g. Shrewsbury, Westborough, Northborough, 01545" },
      { k: "Customer Triggers", l: "What's usually going on when they call you?", t: "ta", w: 2, ph: "e.g. Leak after a storm, selling the house, insurance inspection" },
      { k: "Best Customer Example", l: "Describe your best customer or job from the last year", t: "ta", w: 2, ph: "Who they were, what the job was, why it was a great fit" },
      { k: "Customers to Avoid", l: "Customers or jobs you'd rather not get", t: "in", w: 2, ph: "e.g. Price shoppers, jobs under $1,000, anything outside 30 miles" }
    ]},
    { nav: "Sales process", navSub: "From call to booked job", title: "Your sales process", sub: "What happens after the phone rings. Fast follow-up is where most jobs are won or lost.", fields: [
      { k: "Who Answers Leads", l: "Who answers new leads?", t: "in", req: 1, ph: "e.g. Me, office manager, answering service" },
      { k: "Response Time", l: "How fast do you usually respond?", t: "in", req: 1, ph: "e.g. Within an hour, same day" },
      { k: "Estimate Process", l: "Walk us through how you give an estimate", t: "ta", w: 2, ph: "e.g. Call, book a walkthrough, quote on the spot, follow up by text" },
      { k: "Close Rate (%)", l: "Estimates you close (%)", t: "in", ph: "e.g. 40", im: "decimal" },
      { k: "Time to Close", l: "First call to booked job", t: "in", ph: "e.g. Same day to 1 week" },
      { k: "Follow-Up Process", l: "How do you follow up on estimates that don't book?", t: "ta", w: 2, ph: "e.g. One call two days later, or we don't" },
      { k: "CRM / Software Used", l: "CRM or job software", t: "in", w: 2, ph: "e.g. Jobber, Housecall Pro, ServiceTitan, spreadsheet, none" }
    ]},
    { nav: "Marketing history", navSub: "What worked, what didn't", title: "Your marketing history", sub: "What you've tried, what worked and what burned money. No wrong answers.", fields: [
      { k: "Channels Tried", l: "What have you tried? Pick all that apply", t: "multi", w: 2, opts: ["Google Ads", "Local Services Ads", "Facebook / Instagram ads", "SEO", "Angi / HomeAdvisor", "Thumbtack", "Yelp", "Nextdoor", "Direct mail", "Door hangers / flyers", "Referrals only", "Nothing yet"] },
      { k: "Lead Sources", l: "Where do most of your jobs come from today?", t: "in", w: 2, ph: "e.g. Referrals and Google Maps" },
      { k: "What Worked", l: "What worked?", t: "ta", ph: "Channels, offers or ads that brought in good jobs" },
      { k: "What Didn't Work", l: "What didn't work?", t: "ta", ph: "Where you lost money or got bad leads" },
      { k: "Current Marketing Spend ($)", l: "Current monthly marketing spend ($)", t: "in", ph: "e.g. 800", im: "decimal" },
      { k: "Past Agencies", l: "Worked with an agency before?", t: "in", ph: "e.g. Yes, in 2023. Didn't see results." },
      { k: "Google Reviews", l: "Google reviews (count and rating)", t: "in", w: 2, ph: "e.g. 84 reviews, 4.9 stars" }
    ]},
    { nav: "Goals", navSub: "Numbers and targets", title: "Your goals", sub: "Best guesses are fine. We use these to set cost-per-lead targets and report real ROI, not just clicks.", goals: 1, fields: [
      { k: "Avg Ticket ($)", l: "Average job ticket ($)", t: "in", req: 1, ph: "e.g. 850", im: "decimal" },
      { k: "Extra Jobs / Month", l: "Extra jobs you want per month", t: "in", req: 1, ph: "e.g. 20", im: "numeric" },
      { k: "Monthly Ad Budget ($)", l: "Monthly ad budget ($)", t: "in", ph: "e.g. 1500", im: "decimal" },
      { k: "Max Jobs / Month", l: "Most jobs you can handle per month", t: "in", req: 1, ph: "e.g. 60", im: "numeric" },
      { k: "12-Month Revenue Goal ($)", l: "12-month revenue goal ($)", t: "in", w: 2, ph: "e.g. 750000", im: "decimal" },
      { k: "90-Day Win", l: "What would make the first 90 days a win?", t: "ta", w: 2, ph: "e.g. Booked out 2 weeks ahead, hire a second crew" }
    ]}
  ];

  var ACCESS = [
    { id: "gbp", label: "Google Business Profile", tag: "REQUIRED", how: "Profile › Business settings › People and access › Add. Invite " + (CFG.agencyEmail || "[AGENCY EMAIL]") + " as Manager." },
    { id: "meta", label: "Meta Business (Facebook & Instagram)", tag: "REQUIRED", how: "Business Settings › Partners › Add. Share your Page, Instagram and Ad account with partner ID " + (CFG.metaBusinessId || "[BUSINESS ID]") + "." },
    { id: "site", label: "Website", tag: "REQUIRED", how: "Add " + (CFG.agencyEmail || "[AGENCY EMAIL]") + " as an admin user on WordPress, Wix, Squarespace or GoDaddy." },
    { id: "crm", label: "CRM or job software", tag: "IF YOU HAVE IT", how: "Jobber, Housecall Pro, ServiceTitan, etc. Add us as a user so leads flow straight into your schedule." }
  ];

  var ASSETS = [
    { id: "logo", label: "Logo", hint: "SVG, PNG or even a photo of your truck door. We will clean it up.", accept: "image/*,.svg,.pdf,.ai,.eps" },
    { id: "jobs", label: "Before & after photos", hint: "10+ photos of real jobs. These become your best-performing ads.", accept: "image/*,video/*" },
    { id: "crew", label: "Crew & trucks", hint: "Your team in uniform, your trucks, your shop. Builds instant trust.", accept: "image/*,video/*" },
    { id: "reviews", label: "Reviews & testimonials", hint: "Screenshots or links from Google, Yelp, Angi, Nextdoor.", accept: "image/*,video/*,.pdf" },
    { id: "pricing", label: "Price sheet or services list", hint: "What you charge and what you don't do, so we filter out bad leads.", accept: "image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv" },
    { id: "licenses", label: "License & insurance", hint: "Numbers or certificates we can show on your landing page.", accept: "image/*,.pdf" }
  ];

  var STEP_DEFS = [["Welcome", "What to expect"]]
    .concat(QUESTIONS.map(function (q) { return [q.nav, q.navSub]; }))
    .concat([["Account access", "Google, Meta, website"], ["Brand assets", "Logo & job photos"], ["Onboarding call", "Book on Calendly"]]);

  var Q_START = 1;
  var ACCESS_STEP = QUESTIONS.length + 1;
  var ASSETS_STEP = QUESTIONS.length + 2;
  var KICKOFF_STEP = QUESTIONS.length + 3;
  var DONE_STEP = QUESTIONS.length + 4;
  var TOTAL = KICKOFF_STEP + 1;

  // ---------- State ----------
  var state = { step: 0, maxStep: 0, form: { "Travel Radius": "25 mi" }, multi: {}, access: {}, assetNames: {}, booked: false, submitted: null };
  var files = {}; // id -> File[] (kept in memory only)
  var errors = {};

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) { var s = JSON.parse(raw); for (var k in s) state[k] = s[k]; }
    } catch (e) { /* storage unavailable — start fresh */ }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  // ---------- Helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function num(v) { var n = parseFloat(String(v || "").replace(/[^0-9.]/g, "")); return isNaN(n) ? 0 : n; }
  function money(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
  function $(id) { return document.getElementById(id); }
  var ICON_ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  var ICON_UP = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4M6 10l6-6 6 6M4 20h16"/></svg>';
  var ICON_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>';

  function countTrue(o) { return Object.keys(o || {}).filter(function (k) { return o[k]; }).length; }
  function assetDone(id) { return (files[id] && files[id].length) || (state.assetNames[id] && state.assetNames[id].length); }

  // ---------- Rendering: rail ----------
  function renderSteps() {
    var html = STEP_DEFS.map(function (d, i) {
      var done = i < state.step || (state.step >= DONE_STEP);
      var cur = i === state.step;
      var locked = i > state.maxStep;
      return '<button type="button" class="step-btn' + (done ? " done" : "") + '" data-go="' + i + '"' +
        (cur ? ' aria-current="step"' : "") + (locked ? " disabled" : "") + ">" +
        '<span class="dot">' + (done ? ICON_CHECK : i + 1) + "</span>" +
        '<span><span class="step-label">' + esc(d[0]) + '</span><span class="step-sub">' + esc(d[1]) + "</span></span></button>";
    }).join("");
    $("steps").innerHTML = html;
    $("stepsMobile").innerHTML = html;
    $("mobileStepsLabel").textContent = state.step >= DONE_STEP ? "COMPLETE" : "STEP " + (state.step + 1) + " OF " + TOTAL;
  }

  function renderProgress() {
    var pct = state.step >= DONE_STEP ? 100 : Math.round(state.step / TOTAL * 100);
    $("progressLabel").textContent = state.step >= DONE_STEP ? "ONBOARDING COMPLETE" : "STEP " + (state.step + 1) + " OF " + TOTAL + " · " + pct + "% DONE";
    $("progressFill").style.width = pct + "%";
    $("progressBar").setAttribute("aria-valuenow", pct);
  }

  // ---------- Rendering: panes ----------
  function paneWelcome() {
    return '<div class="pane" style="gap:40px">' +
      '<div class="stack-lg"><span class="eyebrow">Welcome to Valero Labs</span>' +
      '<h1 class="hero-title">Let\'s build your<br>Done-For-You Lead System.</h1>' +
      '<p class="lede">This takes about 25 minutes. Tell us about your business and how you sell, give us access to the right accounts, and book your kickoff call. We handle the rest: ads, leads, and follow-up that turns estimates into booked jobs.</p></div>' +
      '<div class="grid-3">' +
      card("01 · 15 MIN", "Your business, inside out", "Services, offer, ideal customer, sales process, marketing history and goals.") +
      card("02 · 8 MIN", "Access &amp; brand assets", "Google, Meta and website access, plus your logo and real job photos.") +
      card("03 · 2 MIN", "Book your kickoff", "A 30-minute call to lock in your offer and launch plan.") +
      "</div>" +
      '<div class="note"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>' +
      "<span>We never ask for passwords. Access is granted through each platform's own partner and user invites, and you can remove us anytime.</span></div></div>";
  }
  function card(eyebrow, title, body) {
    return '<div class="card"><span class="mono">' + eyebrow + "</span><h3>" + title + "</h3><p>" + body + "</p></div>";
  }

  function paneQuestion(qi) {
    var def = QUESTIONS[qi];
    var out = '<div class="pane"><div class="stack"><span class="eyebrow">Part ' + (qi + 1) + " of " + QUESTIONS.length + " · About your business</span>" +
      '<h2 class="h2">' + esc(def.title) + '</h2><p class="sub">' + esc(def.sub) + "</p></div>";
    if (errors._form) out += '<div class="form-error" role="alert">' + esc(errors._form) + "</div>";
    out += '<div class="fields">';
    def.fields.forEach(function (f, i) {
      var id = "q" + qi + "_" + i;
      var span = f.w === 2 ? " span-2" : "";
      var bad = errors[f.k] ? " invalid" : "";
      if (f.t === "chips" || f.t === "multi") {
        out += '<div class="field span-2" role="group" aria-labelledby="' + id + '_l"><span class="label" id="' + id + '_l">' + esc(f.l) + '</span><div class="chips">';
        f.opts.forEach(function (o) {
          var on = f.t === "multi" ? !!(state.multi[f.k] || {})[o] : (state.form[f.k] || f.def) === o;
          out += '<button type="button" class="chip" aria-pressed="' + on + '" data-chip="' + esc(f.k) + '" data-kind="' + f.t + '" data-val="' + esc(o) + '">' + esc(o) + "</button>";
        });
        out += "</div></div>";
        return;
      }
      var val = esc(state.form[f.k] || "");
      var common = ' id="' + id + '" class="inp" data-key="' + esc(f.k) + '" placeholder="' + esc(f.ph || "") + '"' +
        (f.req ? ' required aria-required="true"' : "") + (f.ac ? ' autocomplete="' + f.ac + '"' : "") +
        (f.im ? ' inputmode="' + f.im + '"' : "") + (errors[f.k] ? ' aria-invalid="true" aria-describedby="' + id + '_e"' : "");
      out += '<div class="field' + span + bad + '"><label for="' + id + '">' + esc(f.l) + (f.req ? ' <span class="req">*</span>' : "") + "</label>" +
        (f.t === "ta" ? "<textarea" + common + ">" + val + "</textarea>" : '<input type="' + (f.type || "text") + '"' + common + ' value="' + val + '">') +
        (errors[f.k] ? '<span class="err" id="' + id + '_e">' + esc(errors[f.k]) + "</span>" : "") + "</div>";
    });
    out += "</div>";
    if (def.goals) {
      out += '<div class="card target"><div class="stack" style="gap:6px"><span class="mono">Your monthly target</span><span class="target-sub">Extra jobs × average ticket</span></div>' +
        '<span class="target-num" id="revenueGoal">' + revenueGoal() + "</span></div>" +
        '<p class="sub" id="capacityNote" style="font-size:15px">' + capacityNote() + "</p>";
    }
    return out + "</div>";
  }
  function revenueGoal() {
    var g = num(state.form["Extra Jobs / Month"]) * num(state.form["Avg Ticket ($)"]);
    return g > 0 ? money(g) + " / mo" : "—";
  }
  function capacityNote() {
    var want = num(state.form["Extra Jobs / Month"]), max = num(state.form["Max Jobs / Month"]);
    if (want && max && want > max) return "Heads up: you want " + want + " extra jobs but can handle " + max + " a month. We'll plan lead volume around what your crew can actually deliver.";
    return "We size lead volume to your capacity, so you never pay for leads you can't take.";
  }

  function paneAccess() {
    var out = '<div class="pane" style="gap:28px"><div class="stack"><h2 class="h2">Give us access</h2>' +
      '<p class="sub">Add Valero Labs as a partner or manager on each account. You stay the owner, and can remove us anytime. Stuck? Mark it and we\'ll walk you through it on the kickoff call.</p></div><div class="access-list">';
    ACCESS.forEach(function (a) {
      var ok = !!state.access[a.id];
      out += '<div class="access' + (ok ? " ok" : "") + '"><div class="access-body"><div class="access-title">' + esc(a.label) +
        ' <span class="tag">' + a.tag + '</span></div><div class="access-how">' + esc(a.how) + "</div></div>" +
        '<button type="button" class="toggle" data-access="' + a.id + '" aria-pressed="' + ok + '">' + (ok ? "Access granted" : "Mark as granted") + "</button></div>";
    });
    return out + "</div></div>";
  }

  function paneAssets() {
    var out = '<div class="pane" style="gap:28px"><div class="stack"><h2 class="h2">Upload your brand assets</h2>' +
      "<p class=\"sub\">Real photos of your trucks, crew and finished jobs beat stock photos every time. Phone pictures are perfect. Drag files onto a card or tap Choose files.</p>";
    if (CFG.uploadFolderUrl) out += '<p class="sub" style="font-size:15px">Big videos or lots of photos? <a href="' + esc(CFG.uploadFolderUrl) + '" target="_blank" rel="noopener">Drop them in your shared folder</a> instead.</p>';
    out += '</div><div class="grid-2">';
    ASSETS.forEach(function (a) {
      var live = files[a.id] || [];
      var names = live.length ? live.map(function (f) { return f.name; }) : (state.assetNames[a.id] || []);
      var ok = names.length > 0;
      var stale = ok && !live.length && CFG.sendFilesTo;
      out += '<div class="asset' + (ok ? " ok" : "") + '" data-drop="' + a.id + '">' +
        '<div class="asset-head"><span>' + esc(a.label) + '</span><span class="badge' + (stale ? " warn" : ok ? " ok" : "") + '">' +
        (stale ? "RE-ADD FILES" : ok ? names.length + " FILE" + (names.length > 1 ? "S" : "") : "NEEDED") + "</span></div>" +
        '<div class="asset-hint">' + esc(a.hint) + "</div>" +
        (ok ? '<ul class="file-list">' + names.slice(0, 4).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + (names.length > 4 ? "<li>+ " + (names.length - 4) + " more</li>" : "") + "</ul>" : "") +
        '<label class="btn btn-ghost btn-sm pick" for="file_' + a.id + '">' + ICON_UP + (ok ? "Add or replace" : "Choose files") + "</label>" +
        '<input class="sr-only" type="file" multiple id="file_' + a.id + '" data-file="' + a.id + '" accept="' + a.accept + '"></div>';
    });
    return out + "</div></div>";
  }

  function paneKickoff() {
    var url = CFG.calendlyUrl || "#";
    var email = state.form["Lead Email"];
    var embed = CFG.embedCalendly && url !== "#";
    var src = url + (url.indexOf("?") > -1 ? "&" : "?") + "hide_gdpr_banner=1" +
      (state.form["Owner Name"] ? "&name=" + encodeURIComponent(state.form["Owner Name"]) : "") +
      (email ? "&email=" + encodeURIComponent(email) : "");
    return '<div class="pane"><div class="stack"><h2 class="h2">Book your onboarding call</h2>' +
      "<p class=\"sub\">30 minutes with Valero Labs. We'll confirm your offer, review your service area and set your launch date. Pick any open time below.</p></div>" +
      '<div class="book"><div class="book-head"><div class="book-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg></div>' +
      "<div><h3>Valero Labs Onboarding Call</h3><p>Scheduled through Calendly · invite sent to " + esc(email || "your email") + "</p></div></div>" +
      '<div class="scheduler">' +
      (embed ? '<iframe title="Book your onboarding call on Calendly" src="' + esc(src) + '" loading="lazy"></iframe><span class="muted" style="font-size:14px">Scheduler not showing?</span>' : '<span class="mono muted" style="font-size:12px">Opens Calendly in a new tab</span>') +
      '<a class="btn btn-dark" href="' + esc(src) + '" target="_blank" rel="noopener">Pick a time on Calendly' + ICON_ARROW + "</a></div>" +
      '<label class="check-row" for="bookedBox"><input type="checkbox" id="bookedBox"' + (state.booked ? " checked" : "") + "> I've booked my call</label>" +
      "</div></div>";
  }

  function paneDone() {
    var first = (state.form["Owner Name"] || "").trim().split(" ")[0] || "partner";
    var s = state.submitted;
    var status = "";
    if (s && s.ok) status = '<div class="send-status ok" role="status">Your answers were sent to Valero Labs on ' + esc(s.at) + ".</div>";
    else if (s && s.error) status = '<div class="send-status warn" role="status">We couldn\'t send your answers automatically (' + esc(s.error) + '). Copy them below and email them to ' + esc(CFG.strategist && CFG.strategist.email) + ', or try again.</div>';
    else if (s && s.sending) status = '<div class="send-status" role="status">Sending your answers…</div>';
    else if (!CFG.submitUrl) status = '<div class="send-status warn" role="status">Last step: copy your answers and send them to your strategist at ' + esc(CFG.strategist && CFG.strategist.email) + ".</div>";

    return '<div class="pane" style="gap:36px;max-width:920px"><div class="stack-lg">' +
      '<div class="done-badge"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg></div>' +
      '<h2 class="h2" style="font-size:clamp(36px,5vw,52px)">You\'re in, ' + esc(first) + ".</h2>" +
      '<p class="lede" style="font-size:18px">Your strategist is reviewing everything now. Here\'s what happens over the next two weeks.</p></div>' +
      status +
      '<div class="grid-3">' +
      '<div class="card stat"><span class="mono">Accounts connected</span><span class="stat-num">' + countTrue(state.access) + " of " + ACCESS.length + "</span></div>" +
      '<div class="card stat"><span class="mono">Assets uploaded</span><span class="stat-num">' + ASSETS.filter(function (a) { return assetDone(a.id); }).length + " of " + ASSETS.length + "</span></div>" +
      '<div class="card stat"><span class="mono">Kickoff</span><span class="stat-txt">' + (state.booked ? "Booked on Calendly" : "Not booked yet") + "</span></div></div>" +
      '<div class="timeline">' +
      tl("Days 1–3", "Audit & tracking", "We audit your profiles and install call and form tracking so every lead is counted.") +
      tl("Days 4–10", "Build the system", "Offer, ad creative from your photos, landing page and instant lead follow-up.") +
      tl("Days 11–14", "Launch", "Ads go live. Leads hit your phone and inbox the moment they come in.") +
      tl("Every week", "Report & optimize", "Leads, estimates, booked jobs and revenue, tracked in your client portal.") +
      "</div>" +
      '<div class="row"><a class="btn btn-dark" href="portal.html">Open my client portal <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' +
      '<button type="button" class="btn btn-ghost" id="copyBtn">Copy my answers</button>' +
      (CFG.submitUrl && !(s && s.ok) ? '<button type="button" class="btn btn-ghost" id="resendBtn">Send again</button>' : "") +
      '<button type="button" class="btn btn-ghost" id="editBtn">Edit answers</button></div>' +
      '<pre class="answers" id="answers" hidden></pre></div>';
  }
  function tl(when, title, body) { return '<div class="tl"><span class="mono">' + when + "</span><h3>" + esc(title) + "</h3><p>" + esc(body) + "</p></div>"; }

  function render(focus) {
    var s = state.step, html;
    if (s === 0) html = paneWelcome();
    else if (s >= Q_START && s < ACCESS_STEP) html = paneQuestion(s - Q_START);
    else if (s === ACCESS_STEP) html = paneAccess();
    else if (s === ASSETS_STEP) html = paneAssets();
    else if (s === KICKOFF_STEP) html = paneKickoff();
    else html = paneDone();
    $("content").innerHTML = html;

    $("footer").hidden = s >= DONE_STEP;
    $("footLeft").innerHTML = s === 0
      ? '<span class="hint muted" style="font-size:14px">About 25 minutes · ' + TOTAL + " steps</span>"
      : '<button type="button" class="btn btn-ghost" id="backBtn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Back</button>';
    $("nextLabel").textContent = s === 0 ? "Start onboarding" : s === KICKOFF_STEP ? "Finish onboarding" : "Continue";

    renderSteps();
    renderProgress();
    if (focus) { $("content").scrollTop = 0; window.scrollTo(0, 0); $("content").focus({ preventScroll: true }); }
  }

  // ---------- Navigation ----------
  function validate(step) {
    errors = {};
    if (step < Q_START || step >= ACCESS_STEP) return true;
    QUESTIONS[step - Q_START].fields.forEach(function (f) {
      var v = String(state.form[f.k] || "").trim();
      if (f.req && !v) errors[f.k] = "Required";
      else if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errors[f.k] = "Enter a valid email, like you@company.com";
      else if (v && f.type === "tel" && v.replace(/\D/g, "").length < 10) errors[f.k] = "Enter a 10-digit phone number";
    });
    var n = Object.keys(errors).length;
    if (n) errors._form = n === 1 ? "One answer needs attention before you continue." : n + " answers need attention before you continue.";
    return n === 0;
  }
  function go(i) {
    if (i > state.step && !validate(state.step)) {
      render(false);
      var bad = document.querySelector('[aria-invalid="true"]');
      if (bad) bad.focus();
      return;
    }
    errors = {};
    state.step = Math.max(0, Math.min(i, DONE_STEP));
    state.maxStep = Math.max(state.maxStep, state.step);
    save();
    $("mobileSteps").open = false;
    render(true);
    if (state.step === DONE_STEP && !(state.submitted && state.submitted.ok)) submit();
  }

  // ---------- Submission ----------
  function payload() {
    var answers = {};
    QUESTIONS.forEach(function (q) {
      q.fields.forEach(function (f) {
        if (f.t === "multi") answers[f.k] = Object.keys(state.multi[f.k] || {}).filter(function (o) { return state.multi[f.k][o]; }).join(", ");
        else answers[f.k] = state.form[f.k] || (f.def || "");
      });
    });
    return {
      source: "Valero Labs onboarding",
      submittedAt: new Date().toISOString(),
      answers: answers,
      monthlyRevenueTarget: revenueGoal(),
      access: ACCESS.reduce(function (o, a) { o[a.label] = state.access[a.id] ? "Granted" : "Not yet"; return o; }, {}),
      assets: ASSETS.reduce(function (o, a) { o[a.label] = (files[a.id] || []).map(function (f) { return f.name; }).concat(files[a.id] ? [] : state.assetNames[a.id] || []); return o; }, {}),
      kickoffBooked: !!state.booked
    };
  }
  function answersText() {
    var p = payload(), lines = ["VALERO LABS ONBOARDING", ""];
    Object.keys(p.answers).forEach(function (k) { if (p.answers[k]) lines.push(k + ": " + p.answers[k]); });
    lines.push("", "Monthly revenue target: " + p.monthlyRevenueTarget, "", "ACCESS");
    Object.keys(p.access).forEach(function (k) { lines.push(k + ": " + p.access[k]); });
    lines.push("", "ASSETS");
    Object.keys(p.assets).forEach(function (k) { lines.push(k + ": " + (p.assets[k].length ? p.assets[k].join(", ") : "none")); });
    lines.push("", "Kickoff call booked: " + (p.kickoffBooked ? "Yes" : "No"));
    return lines.join("\n");
  }
  function submit() {
    if (!CFG.submitUrl) return;
    state.submitted = { sending: true };
    render(false);
    var p = payload();
    var jobs = [fetch(CFG.submitUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p) })];
    var anyFiles = Object.keys(files).some(function (k) { return files[k].length; });
    if (CFG.sendFilesTo && anyFiles) {
      var fd = new FormData();
      fd.append("business", p.answers["Business Name"] || "");
      fd.append("email", p.answers["Lead Email"] || "");
      Object.keys(files).forEach(function (k) { files[k].forEach(function (f) { fd.append(k, f, f.name); }); });
      jobs.push(fetch(CFG.sendFilesTo, { method: "POST", body: fd, headers: { Accept: "application/json" } }));
    }
    Promise.all(jobs).then(function (rs) {
      var bad = rs.filter(function (r) { return !r.ok; })[0];
      state.submitted = bad ? { error: "server replied " + bad.status } : { ok: true, at: new Date().toLocaleString() };
    }).catch(function () {
      state.submitted = { error: "no connection to the server" };
    }).then(function () { save(); if (state.step === DONE_STEP) render(false); });
  }

  // ---------- Events ----------
  document.addEventListener("click", function (e) {
    var t = e.target.closest("button, [data-go]");
    if (!t) return;
    if (t.id === "nextBtn") return go(state.step + 1);
    if (t.id === "backBtn") return go(state.step - 1);
    if (t.dataset.go != null) return go(+t.dataset.go);
    if (t.dataset.chip) {
      var k = t.dataset.chip, v = t.dataset.val;
      if (t.dataset.kind === "multi") { var g = Object.assign({}, state.multi[k]); g[v] = !g[v]; state.multi[k] = g; }
      else state.form[k] = v;
      save(); render(false);
      var again = document.querySelector('[data-chip="' + CSS.escape(k) + '"][data-val="' + CSS.escape(v) + '"]');
      if (again) again.focus();
      return;
    }
    if (t.dataset.access) {
      state.access[t.dataset.access] = !state.access[t.dataset.access];
      save(); render(false);
      var btn = document.querySelector('[data-access="' + t.dataset.access + '"]');
      if (btn) btn.focus();
      return;
    }
    if (t.id === "editBtn") return go(1);
    if (t.id === "resendBtn") return submit();
    if (t.id === "copyBtn") {
      var txt = answersText(), pre = $("answers");
      pre.textContent = txt; pre.hidden = false;
      var done = function () { t.textContent = "Copied"; setTimeout(function () { t.textContent = "Copy my answers"; }, 2000); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(pre); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); t.textContent = "Selected. Press Ctrl/⌘ + C"; };
      try { navigator.clipboard.writeText(txt).then(done, fallback); } catch (err) { fallback(); }
    }
  });

  document.addEventListener("input", function (e) {
    var k = e.target.dataset && e.target.dataset.key;
    if (!k) return;
    state.form[k] = e.target.value;
    if (errors[k]) { delete errors[k]; var fld = e.target.closest(".field"); if (fld) { fld.classList.remove("invalid"); var er = fld.querySelector(".err"); if (er) er.remove(); } e.target.removeAttribute("aria-invalid"); }
    save();
    if ($("revenueGoal")) { $("revenueGoal").textContent = revenueGoal(); $("capacityNote").textContent = capacityNote(); }
  });

  function addFiles(id, list) {
    files[id] = Array.prototype.slice.call(list);
    state.assetNames[id] = files[id].map(function (f) { return f.name; });
    save(); render(false);
  }
  document.addEventListener("change", function (e) {
    if (e.target.dataset && e.target.dataset.file && e.target.files.length) addFiles(e.target.dataset.file, e.target.files);
    if (e.target.id === "bookedBox") { state.booked = e.target.checked; save(); renderSteps(); }
  });
  ["dragenter", "dragover"].forEach(function (ev) {
    document.addEventListener(ev, function (e) { var d = e.target.closest && e.target.closest("[data-drop]"); if (d) { e.preventDefault(); d.classList.add("drag"); } });
  });
  document.addEventListener("dragleave", function (e) { var d = e.target.closest && e.target.closest("[data-drop]"); if (d && !d.contains(e.relatedTarget)) d.classList.remove("drag"); });
  document.addEventListener("drop", function (e) {
    var d = e.target.closest && e.target.closest("[data-drop]");
    if (!d) return;
    e.preventDefault();
    if (e.dataTransfer.files.length) addFiles(d.dataset.drop, e.dataTransfer.files);
  });

  // ---------- Boot ----------
  var st = CFG.strategist || {};
  $("helpContact").textContent = [st.name, st.phone, st.email].filter(Boolean).join(" · ");
  load();
  if (state.submitted && state.submitted.sending) state.submitted = null;
  render(false);
})();
