/* =========================================================
   Interaction effects: cursor glow, scroll reveal, 3D tilt,
   hero photo parallax, sticky nav state and scroll spy.
   Everything here respects prefers-reduced-motion.
   ========================================================= */
const PortfolioAnim = (function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---- Cursor glow ---- */
  function initCursorGlow() {
    const glow = document.querySelector(".cursor-glow");
    if (!glow) return;

    if (reduceMotion || !finePointer) {
      glow.style.setProperty("--gx", "50%");
      glow.style.setProperty("--gy", "30%");
      return;
    }

    let tx = window.innerWidth / 2, ty = window.innerHeight * 0.35;
    let cx = tx, cy = ty;

    window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });

    // Stronger glow over interactive elements
    const interactive = "a, button, .cert-card, .project-card, .skill-card, .contact-item, input, textarea";
    document.addEventListener("pointerover", (e) => {
      if (e.target.closest(interactive)) glow.classList.add("glow-strong");
    });
    document.addEventListener("pointerout", (e) => {
      if (e.target.closest(interactive)) glow.classList.remove("glow-strong");
    });

    (function loop() {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      glow.style.setProperty("--gx", cx.toFixed(1) + "px");
      glow.style.setProperty("--gy", cy.toFixed(1) + "px");
      requestAnimationFrame(loop);
    })();
  }

  /* ---- Scroll reveal ---- */
  let revealObserver;
  function observeReveals(root) {
    const els = (root || document).querySelectorAll("[data-reveal]:not(.in-view)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    }
    els.forEach((el) => revealObserver.observe(el));
  }

  /* ---- 3D tilt for cards ---- */
  function bindTilt(elements, maxDeg, lift) {
    if (reduceMotion || !finePointer) return;
    const max = maxDeg || 7;
    elements.forEach((el) => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = "1";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform =
          "perspective(800px) rotateX(" + (-py * max).toFixed(2) + "deg) rotateY(" + (px * max).toFixed(2) +
          "deg) scale(" + (lift || 1.02) + ")";
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---- Hero photo parallax ---- */
  function initHeroPhoto() {
    const frame = document.querySelector(".hero-photo-frame");
    if (!frame || reduceMotion || !finePointer) return;
    window.addEventListener("pointermove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      frame.style.transform = "rotateY(" + (x * 9).toFixed(2) + "deg) rotateX(" + (-y * 9).toFixed(2) + "deg)";
    }, { passive: true });
  }

  /* ---- Nav: scrolled state + scroll spy ---- */
  function initNav() {
    const nav = document.querySelector(".navbar");
    const links = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 24);
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];
      sections.forEach((s) => { if (s.offsetTop <= mid) current = s; });
      links.forEach((a) => a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function init() {
    initCursorGlow();
    initHeroPhoto();
    initNav();
    observeReveals();
  }

  return { init, observeReveals, bindTilt };
})();
