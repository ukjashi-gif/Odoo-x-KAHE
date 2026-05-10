/* =========================
   TRAVELOOP MODAL.JS
========================= */

/* -------------------------
   ELEMENTS
------------------------- */

const modalOverlay =
  document.querySelector(".modal-overlay");

const modal =
  document.querySelector(".modal");

const openButtons =
  document.querySelectorAll("[data-open-modal]");

const closeButtons =
  document.querySelectorAll("[data-close-modal]");

const body =
  document.body;


/* =========================
   OPEN MODAL
========================= */

function openModal(modalName = "default") {

  if (!modalOverlay || !modal) return;

  modalOverlay.classList.add("active");

  body.style.overflow = "hidden";

  modal.setAttribute("data-modal", modalName);

  resetModalAnimations();

}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

  if (!modalOverlay) return;

  modalOverlay.classList.remove("active");

  body.style.overflow = "auto";

}


/* =========================
   RESET MODAL ANIMATIONS
========================= */

function resetModalAnimations() {

  const animatedItems =
    document.querySelectorAll(
      ".modal .fade-item"
    );

  animatedItems.forEach((item, index) => {

    item.style.animation = "none";

    item.offsetHeight;

    item.style.animation =
      `fadeUp 0.6s ease forwards ${index * 0.1}s`;

  });

}


/* =========================
   EVENT LISTENERS
========================= */

/* Open Buttons */

openButtons.forEach(button => {

  button.addEventListener("click", () => {

    const modalName =
      button.dataset.openModal;

    openModal(modalName);

  });

});


/* Close Buttons */

closeButtons.forEach(button => {

  button.addEventListener("click", () => {

    closeModal();

  });

});


/* Click Outside */

if (modalOverlay) {

  modalOverlay.addEventListener("click", e => {

    if (e.target === modalOverlay) {

      closeModal();

    }

  });

}


/* Escape Key */

document.addEventListener("keydown", e => {

  if (e.key === "Escape") {

    closeModal();

  }

});


/* =========================
   AUTH FORM SWITCH
========================= */

function switchAuth(type = "login") {

  const loginForm =
    document.querySelector(".login-form");

  const signupForm =
    document.querySelector(".signup-form");

  const tabs =
    document.querySelectorAll(".auth-tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  if (type === "login") {

    loginForm.style.display = "block";
    signupForm.style.display = "none";

    document
      .querySelector('[data-auth="login"]')
      ?.classList.add("active");

  } else {

    loginForm.style.display = "none";
    signupForm.style.display = "block";

    document
      .querySelector('[data-auth="signup"]')
      ?.classList.add("active");

  }

}


/* =========================
   PASSWORD TOGGLE
========================= */

function togglePassword(inputId, icon) {

  const input =
    document.getElementById(inputId);

  if (!input) return;

  if (input.type === "password") {

    input.type = "text";

    icon.innerHTML = "🙈";

  } else {

    input.type = "password";

    icon.innerHTML = "👁️";

  }

}


/* =========================
   FAKE LOGIN
========================= */

function fakeLogin(event) {

  event.preventDefault();

  const button =
    event.target.querySelector("button");

  button.innerHTML = "Logging in...";

  button.disabled = true;

  setTimeout(() => {

    button.innerHTML = "Success ✓";

    setTimeout(() => {

      closeModal();

      button.innerHTML = "Login";

      button.disabled = false;

    }, 1200);

  }, 1500);

}


/* =========================
   FAKE SIGNUP
========================= */

function fakeSignup(event) {

  event.preventDefault();

  const button =
    event.target.querySelector("button");

  button.innerHTML = "Creating Account...";

  button.disabled = true;

  setTimeout(() => {

    button.innerHTML = "Welcome ✈️";

    setTimeout(() => {

      closeModal();

      button.innerHTML = "Create Account";

      button.disabled = false;

    }, 1400);

  }, 1800);

}


/* =========================
   TRIP PLANNER MODAL
========================= */

function openPlanner() {

  openModal("planner");

  const planner =
    document.querySelector(".planner-step");

  if (planner) {

    planner.classList.add("active");

  }

}


/* =========================
   STEP NAVIGATION
========================= */

let currentStep = 0;

const plannerSteps =
  document.querySelectorAll(".planner-step");

function nextStep() {

  if (currentStep >= plannerSteps.length - 1)
    return;

  plannerSteps[currentStep]
    .classList.remove("active");

  currentStep++;

  plannerSteps[currentStep]
    .classList.add("active");

}


function prevStep() {

  if (currentStep <= 0)
    return;

  plannerSteps[currentStep]
    .classList.remove("active");

  currentStep--;

  plannerSteps[currentStep]
    .classList.add("active");

}


/* =========================
   LOADING OVERLAY
========================= */

function showLoading() {

  const loader =
    document.querySelector(".loading-overlay");

  if (loader) {

    loader.classList.add("active");

  }

}


function hideLoading() {

  const loader =
    document.querySelector(".loading-overlay");

  if (loader) {

    loader.classList.remove("active");

  }

}


/* =========================
   SUCCESS TOAST
========================= */

function showToast(message = "Success!") {

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.innerHTML = `
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.classList.add("show");

  }, 100);

  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => {

      toast.remove();

    }, 400);

  }, 3000);

}


/* =========================
   DEBUG
========================= */

console.log(
  "%cModal System Loaded ✨",
  "color: #c9a84c; font-size: 13px;"
);
