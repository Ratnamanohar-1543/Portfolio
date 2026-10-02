/* =========================================================
   Main: builds the page from data.js and wires up interactions.
   ========================================================= */
(function () {
  const ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h4v4H4zM16 13h4v4h-4zM10 5h4v4h-4zM8 9l2 2M14 9l-2 2M14 11l2 2"/><path d="M8 17h8"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 10.5 3.75 3.75 0 0 1 17.25 18H7z"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14 -1.5 8 5-3 5 3-1.5-8"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H4v1a3 3 0 0 0 3 3M16 6h4v1a3 3 0 0 1-3 3M12 13v4M8 21h8M10 17h4"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.9 1.28-1.9 2.6V21h-4V9.75z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 16-8-6 16-3-7-7-1z"/></svg>'
  };

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root) => (root || document).querySelector(sel);

  /* ---- Static icon slots: <span data-icon="github"></span> ---- */
  function injectIcons() {
    document.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = ICONS[el.dataset.icon] || "";
    });
  }

  /* ---- Renderers ---- */
  function renderStats() {
    $("#stat-certs").textContent = CERTIFICATES.length;
    $("#stat-interns").textContent = EXPERIENCE.length;
    $("#stat-projects").textContent = PROJECTS.length;
  }

  function timelineItem(item) {
    const status = item.status ? '<span class="tl-status">' + esc(item.status) + "</span>" : "";
    const points = item.points && item.points.length
      ? "<ul>" + item.points.map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul>"
      : "";
    return (
      '<li class="timeline-item" data-reveal><div class="tl-card">' +
      '<span class="tl-period">' + esc(item.period) + "</span>" +
      "<h3>" + esc(item.title) + status + "</h3>" +
      '<p class="tl-org">' + esc(item.org) + "</p>" + points +
      "</div></li>"
    );
  }

  function renderEducation() {
    $("#education-list").innerHTML = EDUCATION.map(timelineItem).join("");
  }

  function renderExperience() {
    $("#experience-list").innerHTML = EXPERIENCE.map(timelineItem).join("");
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = SKILLS.map((g) =>
      '<article class="skill-card" data-reveal>' +
      '<div class="icon">' + (ICONS[g.icon] || "") + "</div>" +
      "<h3>" + esc(g.group) + "</h3>" +
      '<div class="skill-pills">' + g.items.map((i) => '<span class="skill-pill">' + esc(i) + "</span>").join("") + "</div>" +
      "</article>"
    ).join("");
  }

  function renderProjects() {
    $("#projects-grid").innerHTML = PROJECTS.map((p) => {
      const links = [];
      if (p.github) links.push('<a class="btn btn-ghost btn-sm" href="' + esc(p.github) + '" target="_blank" rel="noopener">GitHub</a>');
      if (p.demo) links.push('<a class="btn btn-primary btn-sm" href="' + esc(p.demo) + '" target="_blank" rel="noopener">Live demo</a>');
      return (
        '<article class="project-card" data-reveal>' +
        '<div class="p-top"><div class="p-icon">' + esc(p.initials) + "</div></div>" +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="desc">' + esc(p.description) + "</p>" +
        '<ul class="features">' + p.features.map((f) => "<li>" + esc(f) + "</li>").join("") + "</ul>" +
        '<div class="project-stack">' + p.stack.map((s) => '<span class="skill-pill">' + esc(s) + "</span>").join("") + "</div>" +
        (links.length ? '<div class="project-links" style="display:flex;gap:.6rem;margin-top:1.2rem">' + links.join("") + "</div>" : "") +
        "</article>"
      );
    }).join("");
  }

  function renderAchievements() {
    $("#ach-grid").innerHTML = ACHIEVEMENTS.map((a) =>
      '<article class="ach-card" data-reveal>' +
      '<div class="ach-icon">' + (ICONS[a.icon] || ICONS.award) + "</div>" +
      "<h4>" + esc(a.title) + "</h4><p>" + esc(a.text) + "</p>" +
      '<span class="ach-meta">' + esc(a.meta) + "</span></article>"
    ).join("");
  }

  /* ---- Certificates: filters, grid, modal ---- */
  let activeFilter = "all";

  function renderCertFilters() {
    const counts = {};
    CERTIFICATES.forEach((c) => { counts[c.category] = (counts[c.category] || 0) + 1; });
    $("#cert-filters").innerHTML = CERT_CATEGORIES
      .filter((c) => c.id === "all" || counts[c.id])
      .map((c) =>
        '<button type="button" class="cert-filter-btn' + (c.id === activeFilter ? " active" : "") +
        '" data-filter="' + c.id + '" aria-pressed="' + (c.id === activeFilter) + '">' +
        esc(c.label) + " (" + (c.id === "all" ? CERTIFICATES.length : counts[c.id]) + ")</button>"
      ).join("");
  }

  function renderCertGrid() {
    const list = CERTIFICATES
      .map((c, i) => Object.assign({ index: i }, c))
      .filter((c) => activeFilter === "all" || c.category === activeFilter);

    $("#cert-grid").innerHTML = list.map((c) =>
      '<button type="button" class="cert-card" data-index="' + c.index + '" aria-label="Open certificate: ' + esc(c.title) + '">' +
      '<div class="cert-thumb"><img src="' + esc(c.image) + '" alt="Certificate: ' + esc(c.title) + ", " + esc(c.issuer) +
      '" loading="lazy" decoding="async"></div>' +
      '<div class="cert-body"><h4>' + esc(c.title) + "</h4>" +
      '<span class="cert-issuer">' + esc(c.issuer) + "</span>" +
      (c.date ? '<span class="cert-date">' + esc(c.date) + "</span>" : "") +
      "</div></button>"
    ).join("");

    PortfolioAnim.bindTilt(document.querySelectorAll(".cert-card"), 8, 1.03);
  }

  let lastFocus = null;
  const modal = $("#cert-modal");

  function openModal(index) {
    const c = CERTIFICATES[index];
    if (!c) return;
    lastFocus = document.activeElement;
    $("#modal-img").src = c.image;
    $("#modal-img").alt = "Certificate: " + c.title + ", " + c.issuer;
    $("#modal-title").textContent = c.title;
    $("#modal-issuer").textContent = c.issuer + (c.date ? " · " + c.date : "");
    $("#modal-detail").textContent = c.detail || "";
    $("#modal-open").href = c.image;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#modal-close").focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  function initCertInteractions() {
    $("#cert-filters").addEventListener("click", (e) => {
      const btn = e.target.closest(".cert-filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      renderCertFilters();
      renderCertGrid();
    });

    $("#cert-grid").addEventListener("click", (e) => {
      const card = e.target.closest(".cert-card");
      if (card) openModal(Number(card.dataset.index));
    });

    $("#modal-close").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
      // keep focus inside the dialog
      if (e.key === "Tab" && modal.classList.contains("open")) {
        const focusables = modal.querySelectorAll("a[href], button");
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---- Mobile menu ---- */
  function initMenu() {
    const toggle = $(".nav-toggle");
    const links = $(".nav-links");
    function set(open) {
      toggle.classList.toggle("open", open);
      links.classList.toggle("mobile-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }
    toggle.addEventListener("click", () => set(!links.classList.contains("mobile-open")));
    links.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  }

  /* ---- Contact form (front-end only: opens the visitor's email app) ---- */
  function initForm() {
    const form = $("#contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const subject = "Portfolio contact from " + name;
      const body = message + "\n\n" + name + "\n" + email;
      window.location.href =
        "mailto:" + PROFILE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ---- Init ---- */
  function init() {
    injectIcons();
    renderStats();
    renderEducation();
    renderSkills();
    renderProjects();
    renderExperience();
    renderCertFilters();
    renderCertGrid();
    renderAchievements();
    initCertInteractions();
    initMenu();
    initForm();

    PortfolioAnim.bindTilt(document.querySelectorAll(".project-card"), 5, 1.015);
    PortfolioAnim.init();

    $("#year").textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
