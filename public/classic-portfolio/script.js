/* =========================================================
   Marthish DN — Portfolio interactions
   Progressive enhancement: the site is fully readable
   without JavaScript.
   ========================================================= */

(function () {
  "use strict";

  var currentPage = document.body.dataset.page || "";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Active navigation ---- */
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.dataset.nav === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ---- Current year in footer ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector("#nav-toggle");
  var navLinks = document.querySelector("#primary-nav");

  function closeNav() {
    if (!toggle || !navLinks) return;
    toggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      navLinks.classList.toggle("is-open", !open);
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeNav();
    });
  }

  /* ---- Scroll reveal ---- */
  var revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length && !reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  /* ---- Back to top ---- */
  var toTop = document.querySelector("#to-top");
  if (toTop) {
    var updateToTop = function () {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    };
    window.addEventListener("scroll", updateToTop, { passive: true });
    updateToTop();
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---- Project filters ---- */
  var filterButtons = document.querySelectorAll("[data-filter]");
  var projectCards = document.querySelectorAll(".project-card[data-category]");
  var projectCount = document.querySelector("[data-project-count]");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.dataset.filter;
        var shown = 0;

        filterButtons.forEach(function (btn) {
          var active = btn === button;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-pressed", String(active));
        });

        projectCards.forEach(function (card) {
          var visible = filter === "all" || card.dataset.category === filter;
          card.hidden = !visible;
          if (visible) shown += 1;
        });

        if (projectCount) {
          projectCount.textContent = shown + (shown === 1 ? " project" : " projects");
        }
      });
    });
  }

  /* ---- Contact form: prepares a real, prefilled email ---- */
  var form = document.querySelector("#contact-form");
  if (form) {
    var result = document.querySelector("#form-result");
    var resultText = document.querySelector("#result-text");
    var mailtoLink = document.querySelector("#result-mailto");
    var copyButton = document.querySelector("#result-copy");
    var copyFeedback = document.querySelector("#copy-feedback");
    var emailAddress = "marthish05@gmail.com";

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var topic = String(data.get("topic") || "Project / collaboration");
      var message = String(data.get("message") || "").trim();

      var body = [
        "Hi Marthish,",
        "",
        message,
        "",
        "— " + name,
        "Email: " + email
      ].join("\n");

      var subject = "[" + topic + "] Message from " + name;

      if (resultText) resultText.textContent = body;
      if (mailtoLink) {
        mailtoLink.href = "mailto:" + emailAddress +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
      }
      if (copyFeedback) copyFeedback.textContent = "";

      if (result) {
        result.hidden = false;
        result.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
      }
    });

    if (copyButton && resultText) {
      copyButton.addEventListener("click", function () {
        var text = resultText.textContent || "";
        var done = function () {
          if (copyFeedback) copyFeedback.textContent = "Copied to clipboard.";
        };
        var fallback = function () {
          var area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          try { document.execCommand("copy"); done(); } catch (err) { /* no-op */ }
          document.body.removeChild(area);
        };

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(done).catch(fallback);
        } else {
          fallback();
        }
      });
    }
  }
})();
