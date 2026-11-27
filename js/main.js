// HEDRA – Seitliche Panels (Menu links, Kontakt rechts)
(function () {
  const overlay = document.querySelector(".overlay");
  const panels = document.querySelectorAll(".panel");
  let lastTrigger = null;

  function closeAll() {
    panels.forEach((p) => {
      p.classList.remove("is-open");
      p.setAttribute("aria-hidden", "true");
    });
    document.querySelectorAll("[data-open]").forEach((b) => b.setAttribute("aria-expanded", "false"));
    overlay.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
    if (lastTrigger) lastTrigger.focus();
  }

  function open(id, trigger) {
    const panel = document.getElementById(id);
    if (!panel) return;
    const wasOpen = panel.classList.contains("is-open");
    closeAll();
    if (wasOpen) return;
    lastTrigger = trigger;
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-visible");
    document.body.classList.add("no-scroll");
    const first = panel.querySelector("a, button");
    if (first) first.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-open]").forEach((btn) =>
    btn.addEventListener("click", () => open(btn.dataset.open, btn))
  );
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", closeAll));
  overlay.addEventListener("click", closeAll);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

})();

// Zeile unter HEDRA: falls die Schrift breiter läuft als HEDRA (z. B. andere
// Schrift als Avenir Book), Schriftgrösse so weit verkleinern, dass sie passt.
(function () {
  const word = document.querySelector(".logo-word");
  const tag = document.querySelector(".logo-tagline");
  if (!word || !tag) return;
  function fit() {
    tag.style.fontSize = "";
    const probe = document.createElement("span");
    probe.textContent = tag.textContent;
    probe.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;letter-spacing:inherit";
    tag.appendChild(probe);
    const minGap = 0.4 * parseFloat(getComputedStyle(tag).fontSize); // Mindestabstand zwischen den Wörtern
    const natural = probe.getBoundingClientRect().width + 2 * minGap;
    probe.remove();
    const available = tag.getBoundingClientRect().width;
    if (natural > available) {
      tag.style.fontSize = parseFloat(getComputedStyle(tag).fontSize) * (available / natural) + "px";
    }
  }
  fit();
  if (document.fonts) document.fonts.ready.then(fit);
  window.addEventListener("resize", fit);
})();
