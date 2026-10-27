/* GALAXIQURA — content lives in data; markup is rendered once on load. */
(() => {
  "use strict";

  const DATA = {
    pillars: [
      ["<rect x='3' y='3' width='18' height='18' rx='3'/><path d='M12 8v8M8 12h8'/>", "Hospital Operations", "Streamline processes, improve productivity and strengthen operational excellence."],
      ["<path d='M3 17l6-6 4 4 8-8'/><path d='M15 7h6v6'/>", "Financial Performance", "Control costs, improve EBITDA and identify revenue opportunities."],
      ["<path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z'/>", "Customer & Patient Experience", "Create smoother journeys and improve service quality."],
      ["<path d='M4 20V10M10 20V4M16 20v-7M22 20H2'/>", "Process Excellence", "Transform inefficient processes into measurable, standardized workflows."],
      ["<circle cx='9' cy='8' r='3.5'/><path d='M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6'/><circle cx='17' cy='9' r='2.5'/><path d='M17 14c2.8 0 4.5 1.9 4.5 4.5'/>", "People & Productivity", "Align people, roles, capabilities and performance."],
      ["<circle cx='12' cy='12' r='9'/><circle cx='12' cy='12' r='5'/><circle cx='12' cy='12' r='1.2'/>", "Business Growth & Strategy", "Build practical strategies for sustainable organizational growth."]
    ],
    steps: [
      ["AS-IS", "Understand how the organization actually works today."],
      ["Analyse", "Identify gaps, bottlenecks, waste and opportunities."],
      ["Design", "Create the improved TO-BE process."],
      ["Implement", "Convert strategy into action."],
      ["Measure", "Track KPIs and financial impact."],
      ["Improve", "Continuously refine performance."]
    ],
    verticals: [
      { t: "International Patients Service", tag: "Chennai Care, Global Trust",
        d: "We assist international patients coming to Chennai for treatment at leading hospitals.",
        l: ["Doctor appointment & second-opinion coordination", "Visa invitation letter support, airport pickup, stay near hospital", "Translator and daily hospital visit assistance", "Post-treatment follow-up back in your home country"],
        f: "We don't provide medical treatment. We make your Chennai medical journey smooth, transparent and stress-free. For patients from Sri Lanka, Maldives, Bangladesh, the Middle East and Africa." },
      { t: "Organics", tag: "Eat Pure, Live Pure",
        d: "Direct from farm to home: chemical-free millets, cold-pressed oils and herbal products from organic farmers.",
        l: ["Traditional millets: Foxtail, Kodo, Barnyard", "Cold-pressed gingelly and groundnut oil"],
        f: "100% tested, no mixing, farmer bill available, small-batch freshness. Home delivery in Chennai; courier across India." },
      { t: "NRI Senior Citizen Care", tag: "We Care When You Can't Be There",
        d: "For NRI families whose parents live alone in Chennai.",
        l: ["Daily wellness check-in call and video report", "Medicine delivery, doctor visit escort, home lab tests", "Trained home attendant for 12 or 24 hours", "Emergency hospital coordination before you land"],
        f: "MSME registered. Aadhaar-verified attendants. Daily photo update on WhatsApp." },
      { t: "T-Shirt Supply", tag: "Pure Quality, Low Price",
        d: "Direct from the Tiruppur knitwear hub: corporate T-shirts, school sports uniforms and hospital patient banians.",
        l: ["Corporate wellness and annual day T-shirts: 180 GSM bio-wash, custom logo print", "School and college department T-shirts, sports jerseys", "Hospital scrub suits and 100% cotton patient banians"],
        f: "" },
      { t: "Academic Counselling & Placement", tag: "From Classroom to Career",
        d: "For students: resume building, LinkedIn profile and interview preparation.",
        l: ["Internships in corporate wellness and healthcare, with certificate and stipend", "Placement help for hospital front office, home healthcare and customer relations roles"],
        f: "For colleges: we partner on TNSDC skill programs, health camps and career workshops at no cost to the college." }
    ],
    focus: [
      ["Business & Growth Transformation", "Strategic planning, business development, revenue enhancement"],
      ["Operational Excellence", "Process transformation, AS-IS to TO-BE, SOPs, productivity"],
      ["Financial Performance", "Cost optimization, EBITDA improvement, resource optimization"],
      ["Customer & Patient Experience", "Customer journey, service excellence, retention"],
      ["Leadership & People Excellence", "Leadership development, HOD capability building, training strategy"],
      ["Quality & Governance", "Quality systems, KPI frameworks, dashboards, continuous improvement"]
    ]
  };

  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mount = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  mount("pillars", DATA.pillars.map(([i, t, d]) =>
    `<div class="col-md-6 col-lg-4"><article class="gx-card"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24">${i}</svg></span><h3>${esc(t)}</h3><p>${esc(d)}</p></article></div>`).join(""));

  mount("steps", DATA.steps.map(([t, d]) =>
    `<li><strong>${esc(t)}</strong><br>${esc(d)}</li>`).join(""));

  const wa = n => `https://wa.me/919994636380?text=${encodeURIComponent("Hello GALAXIQURA, I'd like to know more about " + n + ".")}`;
  mount("vnav", DATA.verticals.map((v, i) =>
    `<button class="vtab${i ? "" : " active"}" id="vt${i}" type="button" role="tab" data-bs-toggle="pill" data-bs-target="#vp${i}" aria-controls="vp${i}" aria-selected="${!i}"><span>${esc(v.t)}</span><small>${esc(v.tag)}</small></button>`).join(""));
  mount("vpanes", DATA.verticals.map((v, i) =>
    `<div class="tab-pane fade vpane${i ? "" : " show active"}" id="vp${i}" role="tabpanel" aria-labelledby="vt${i}" tabindex="0"><h3>${esc(v.t)}</h3><p class="tag">${esc(v.tag)}</p><p class="vdesc">${esc(v.d)}</p><div class="vbody${v.f ? "" : " single"}"><ul class="vlist">${v.l.map(x => `<li>${esc(x)}</li>`).join("")}</ul>${v.f ? `<aside class="vnote">${esc(v.f)}</aside>` : ""}</div><a class="btn btn-gx" href="${wa(v.t)}" target="_blank" rel="noopener">Enquire on WhatsApp</a></div>`).join(""));

  /* On small screens the panel sits below the tab list, so bring it into view after a tab is chosen. */
  document.getElementById("vnav")?.addEventListener("shown.bs.tab", e => {
    if (window.innerWidth >= 992) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector(e.target.dataset.bsTarget)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });

  mount("focus", DATA.focus.map(([t, d]) =>
    `<div class="col-sm-6"><div class="focus-item"><strong>${esc(t)}</strong><span>${esc(d)}</span></div></div>`).join(""));

  const yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
