/* GALAXIQURA — content lives in data; markup is rendered once on load. */
(() => {
  "use strict";

  const DATA = {
    pillars: [
      ["<path d='M12 6v12M6 12h12'/><rect x='3' y='3' width='18' height='18' rx='4'/>", "Hospital Operations", "Streamline processes, improve productivity and strengthen operational excellence."],
      ["<path d='M3 17l6-6 4 4 8-8'/><path d='M15 7h6v6'/><path d='M4 21h16'/>", "Financial Performance", "Control costs, improve EBITDA and identify revenue opportunities."],
      ["<path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/>", "Customer & Patient Experience", "Create smoother journeys and improve service quality."],
      ["<path d='M4 4v5h5M20 20v-5h-5'/><path d='M20 9A8 8 0 004.93 6.93L4 9M4 15a8 8 0 0015.07 2.07L20 15'/>", "Process Excellence", "Transform inefficient processes into measurable, standardized workflows."],
      ["<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'/>", "People & Productivity", "Align people, roles, capabilities and performance."],
      ["<circle cx='12' cy='12' r='9'/><circle cx='12' cy='12' r='5'/><circle cx='12' cy='12' r='1.5'/>", "Business Growth & Strategy", "Build practical strategies for sustainable organizational growth."]
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
      { t: "International Patients Service", tag: "Chennai Care, Global Trust", badge: "Global Healthcare", pill: "Leading Hospital Tie-ups",
        icon: "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2'><path d='M4.5 3h3v5.5a4.5 4.5 0 009 0V3h3v5.5a7.5 7.5 0 01-6 7.35V19a3 3 0 01-6 0v-3.15A7.5 7.5 0 014.5 8.5V3z'/><circle cx='18' cy='19' r='2'/></svg>",
        d: "We assist international patients coming to Chennai for treatment at leading multispecialty hospitals.",
        l: ["Doctor appointment & second-opinion coordination", "Visa invitation letter support, airport pickup & hospital stay", "Dedicated translator & daily hospital visit escort", "Post-treatment follow-up coordination back in your home country"],
        f: "Supported by Galaxiqura's trusted network of leading NABH/JCI multispecialty hospitals in Chennai. Transparent appointments, hospital stay & post-treatment follow-up." },
      { t: "Pure Organics", tag: "Eat Pure, Live Pure", badge: "Direct Farm Fresh", pill: "Chemical-Free Millets",
        icon: "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 2a10 10 0 0110 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0112 2zm0 4v12m-6-6h12'/></svg>",
        d: "Direct from farm to home: chemical-free traditional millets, cold-pressed virgin oils and natural wellness produce.",
        l: ["Traditional unpolished millets: Foxtail, Kodo, Barnyard & Little Millet", "Wood cold-pressed virgin gingelly, coconut & groundnut oils", "Direct procurement empowering local millet farmers with fair pricing", "Zero chemical preservatives; small-batch freshly packed with farmer bill transparency"],
        f: "Supported by trusted local organic millet farmers & traditional cold-press mills. 100% tested, chemical-free, with farmer bill transparency. Door delivery in Chennai; pan-India courier." },
      { t: "NRI Senior Citizen Care", tag: "We Care When You Can't Be There", badge: "Elder Dignity & Care", pill: "Aadhaar-Verified Staff",
        icon: "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2'><path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/></svg>",
        d: "Dedicated personal care companion for NRI families whose elderly parents live alone in Chennai.",
        l: ["Daily wellness check-in call and video/photo reports on WhatsApp", "Medicine delivery, doctor visit escort & doorstep lab tests", "Trained home attendants for 12 or 24 hours assistance", "Rapid emergency hospital coordination before your flight lands in India"],
        f: "Supported by MSME-registered, Aadhaar-verified caregivers and doctor escort networks across Chennai. Transparent daily photo/video updates on WhatsApp." },
      { t: "Custom Apparel & Corporate Workwear", tag: "Direct Sourcing, Quality Assured", badge: "Tiruppur Hub Direct", pill: "Zero Fabric Waste",
        icon: "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2'><path d='M6 3l3 2 3-2 3 2 3-2v5l-3 1v12H9V9L6 8V3z'/></svg>",
        d: "Direct from the Tiruppur knitwear hub: premium corporate T-shirts, institutional uniforms, and specialized healthcare workwear.",
        l: ["Corporate wellness & annual day T-shirts: 180 GSM bio-wash, custom logo print & embroidery", "School & college department uniforms, sports jerseys & team hoodies", "Healthcare textiles: hospital scrub suits, doctor lab coats & 100% cotton patient apparel", "Bulk order customization with direct factory pricing and pan-India dispatch"],
        f: "Supported by trusted Tiruppur knitwear hub manufacturing. Direct factory pricing, zero fabric waste upcycled into reusable eco-bags, and strict quality control." },
      { t: "Academic Counselling & Placement", tag: "From Classroom to Career", badge: "Skill & Guidance", pill: "TNSDC Skill Partner",
        icon: "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2'><path d='M22 10v6M2 10l10-5 10 5-10 5z'/><path d='M6 12v5c0 2 3 3 6 3s6-1 6-3v-5'/></svg>",
        d: "Career empowerment for youth: resume building, mock interviews, placement preparation, and industry internships.",
        l: ["Internships in corporate wellness & healthcare operations with stipend and certificate", "Placement assistance for hospital front office, patient relations, and administrative roles", "Free monthly career orientation and mentorship sessions for government school students", "Institutional partnerships for TNSDC skill programs, health camps & workshops"],
        f: "Supported by institutional TNSDC skill development programs, corporate healthcare partners, and free career orientation for Govt school students." }
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

  const esc = s => (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mount = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  mount("pillars", DATA.pillars.map(([i, t, d]) =>
    `<div class="col-md-6 col-lg-4"><article class="gx-card"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24">${i}</svg></span><h3>${esc(t)}</h3><p>${esc(d)}</p></article></div>`).join(""));

  mount("steps", DATA.steps.map(([t, d]) =>
    `<li><strong>${esc(t)}</strong><br>${esc(d)}</li>`).join(""));

  const ART = ["patient-care", "organics", "senior-care", "apparel", "careers"];
  const wa = n => `https://wa.me/919994636380?text=${encodeURIComponent("Hello GALAXIQURA, I'd like to enquire about " + n + ".")}`;

  mount("vnav", DATA.verticals.map((v, i) =>
    `<button class="vtab${i ? "" : " active"}" id="vt${i}" type="button" role="tab" data-bs-toggle="pill" data-bs-target="#vp${i}" aria-controls="vp${i}" aria-selected="${!i}">
      <span class="vtab-icon" aria-hidden="true">${v.icon}</span>
      <div class="vtab-info">
        <span class="vtab-title">${esc(v.t)}</span>
        <small class="vtab-tag">${esc(v.tag)}</small>
      </div>
    </button>`).join(""));

  mount("vpanes", DATA.verticals.map((v, i) =>
    `<div class="tab-pane fade vpane${i ? "" : " show active"}" id="vp${i}" role="tabpanel" aria-labelledby="vt${i}" tabindex="0">
      <div class="vlayout">
        <div class="vtext">
          <div class="vmeta-row">
            <span class="vpill-category">Vertical 0${i + 1} &middot; ${esc(v.badge)}</span>
            <span class="vtag-lead">${esc(v.tag)}</span>
          </div>
          <h3 class="vheading">${esc(v.t)}</h3>
          <p class="vdesc">${esc(v.d)}</p>
          
          <div class="vfeatures-grid">
            ${v.l.map(x => `
              <div class="vfeature-item">
                <span class="vfeature-check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </span>
                <span class="vfeature-text">${esc(x)}</span>
              </div>
            `).join("")}
          </div>

          ${v.f ? `
            <div class="vnote-box">
              <span class="vnote-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              <div class="vnote-content">${esc(v.f)}</div>
            </div>
          ` : ""}

          <div class="vcta-bar">
            <a class="btn btn-gx" href="${wa(v.t)}" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="me-2"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              Enquire on WhatsApp
            </a>
            <a class="btn btn-gx-line" href="tel:+919994636380">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 99946 36380
            </a>
          </div>
        </div>
        <div class="vvisual-col">
          <div class="vframe">
            <div class="vpill-tag">${esc(v.pill)}</div>
            <img class="vart" src="assets/img/services/${ART[i]}.svg" alt="${esc(v.t)}" width="480" height="320" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </div>`).join(""));

  /* On small screens, bring the active panel into view smoothly after selection */
  document.getElementById("vnav")?.addEventListener("shown.bs.tab", e => {
    if (window.innerWidth >= 992) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector(e.target.dataset.bsTarget)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  });

  mount("focus", DATA.focus.map(([t, d]) =>
    `<div class="col-sm-6"><div class="focus-item"><strong>${esc(t)}</strong><span>${esc(d)}</span></div></div>`).join(""));

  const yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
