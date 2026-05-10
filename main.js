/* =========================
   TRAVELOOP MAIN.JS
========================= */

/* -------------------------
   APP INITIALIZATION
------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  initCursor();
  initStars();
  initGlobe();
  initCounters();
  initRevealAnimations();
  initSmoothScroll();
  initParallax();
  initNavigation();
  initScreenSwitcher();

});


/* =========================
   NAVIGATION
========================= */

function initNavigation() {

  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

      nav.style.background =
        "rgba(5, 8, 16, 0.95)";

      nav.style.backdropFilter = "blur(12px)";
      nav.style.borderBottom =
        "1px solid rgba(201,168,76,0.15)";

    } else {

      nav.style.background =
        "linear-gradient(to bottom, rgba(5,8,16,0.95), transparent)";

      nav.style.borderBottom =
        "1px solid rgba(201,168,76,0.08)";
    }

  });

}


/* =========================
   REVEAL ANIMATIONS
========================= */

function initRevealAnimations() {

  const revealElements =
    document.querySelectorAll(".reveal");

  const observer =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    }, {
      threshold: 0.15
    });

  revealElements.forEach(el => {
    observer.observe(el);
  });

}


/* =========================
   COUNTER ANIMATION
========================= */

function initCounters() {

  const counters =
    document.querySelectorAll("[data-target]");

  const counterObserver =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          counterObserver.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.5
    });

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });

}


function animateCounter(counter) {

  const target =
    parseInt(counter.dataset.target);

  let current = 0;

  const increment = target / 60;

  const timer = setInterval(() => {

    current += increment;

    if (current >= target) {

      counter.textContent = target + "+";

      clearInterval(timer);

    } else {

      counter.textContent =
        Math.floor(current) + "+";

    }

  }, 16);

}


/* =========================
   SMOOTH SCROLL
========================= */

function initSmoothScroll() {

  const links =
    document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

}


/* =========================
   HERO PARALLAX EFFECT
========================= */

function initParallax() {

  const heroTitle =
    document.querySelector(".hero-title");

  const globe =
    document.querySelector(".globe-container");

  document.addEventListener("mousemove", e => {

    const x =
      (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 10;

    if (heroTitle) {

      heroTitle.style.transform =
        `translate(${x * 0.3}px, ${y * 0.3}px)`;

    }

    if (globe) {

      globe.style.transform =
        `translateY(-50%) translate(${x * 0.15}px, ${y * 0.15}px)`;

    }

  });

}


/* =========================
   SCREEN SWITCHER
========================= */

function initScreenSwitcher() {

  const steps =
    document.querySelectorAll(".screen-step");

  steps.forEach((step, index) => {

    step.addEventListener("click", () => {

      switchScreen(index);

    });

  });

}


function switchScreen(index) {

  const steps =
    document.querySelectorAll(".screen-step");

  const screens =
    document.querySelectorAll(".mock-screen");

  steps.forEach(step => {
    step.classList.remove("active");
  });

  screens.forEach(screen => {
    screen.style.display = "none";
  });

  if (steps[index]) {

    steps[index].classList.add("active");

  }

  if (screens[index]) {

    screens[index].style.display = "block";

  }

}


/* =========================
   BUTTON EFFECTS
========================= */

const buttons =
  document.querySelectorAll(
    ".btn-primary, .btn-outline"
  );

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});


/* =========================
   OPTIONAL LOADER
========================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});


/* =========================
   DEBUG LOG
========================= */

console.log(
  "%cTraveloop Initialized ✈️",
  "color: gold; font-size: 14px; font-weight: bold;"
);
