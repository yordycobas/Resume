// Yordy Cobas — resume website interactions

(function () {
  "use strict";

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---------- Animated stat counters ----------
  function formatNum(value, decimals) {
    if (decimals > 0) return value.toFixed(decimals);
    return Math.round(value).toLocaleString("en-US");
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1600;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = target * eased;
      el.textContent = prefix + formatNum(current, decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + formatNum(target, decimals) + suffix;
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll(".stat-num");
  var countersDone = new WeakSet();
  if ("IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersDone.has(entry.target)) {
          countersDone.add(entry.target);
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(animateCounter);
  }

  // ---------- Audio intro toggle ----------
  var btn = document.getElementById("introBtn");
  var icon = document.getElementById("introIcon");
  var audio = document.getElementById("introAudio");
  var wrap = document.getElementById("photoWrap");

  if (btn && audio) {
    btn.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
    audio.addEventListener("play", function () {
      btn.classList.add("playing");
      if (wrap) wrap.classList.add("speaking");
      icon.innerHTML = "&#10074;&#10074;"; // pause glyph
    });
    audio.addEventListener("pause", function () {
      btn.classList.remove("playing");
      if (wrap) wrap.classList.remove("speaking");
      icon.innerHTML = "&#9654;"; // play glyph
    });
    audio.addEventListener("ended", function () {
      btn.classList.remove("playing");
      if (wrap) wrap.classList.remove("speaking");
      icon.innerHTML = "&#9654;";
    });
  }
})();
