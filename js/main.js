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

// Momente-Detailseite: Klick auf ein Vorschaubild zeigt es gross
(function () {
  const main = document.querySelector(".md-main");
  if (!main) return;
  const thumbs = document.querySelectorAll(".md-thumb");
  thumbs.forEach((btn, i) =>
    btn.addEventListener("click", () => {
      main.src = btn.dataset.full;
      main.alt = main.alt.replace(/Bild \d+$/, "Bild " + (i + 1));
      thumbs.forEach((b) => b.removeAttribute("aria-current"));
      btn.setAttribute("aria-current", "true");
    })
  );
})();
