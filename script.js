// ==========================================================================
// 0. Performance Utilities
// ==========================================================================

// Polyfill for yielding to main thread (INP improvement)
async function yieldToMain() {
  if ('scheduler' in window && 'yield' in scheduler) {
    return await scheduler.yield();
  }
  return new Promise(resolve => setTimeout(resolve, 0));
}

// ==========================================================================
// 1. DOM Elements Selection
// ==========================================================================
const topbar = document.querySelector(".topbar");
const modal = document.getElementById("callback-modal");
const openButtons = document.querySelectorAll(".open-popup");
const closeTargets = document.querySelectorAll("[data-close-modal]");
const modalForm = document.getElementById("modal-form");
const contactForm = document.getElementById("contact-form");

// Header scrolled styling logic removed since topbar is now absolute and scrolls with page.

// Floor plan elements
const planButtons = document.querySelectorAll("[data-plan]");
const planPanels = document.querySelectorAll(".plan-panel");

// Accordion elements
const accordionButtons = document.querySelectorAll("#location-accordion button");

// EMI elements
const emiForm = document.getElementById("emi-form");
const loanAmountInput = document.getElementById("loan-amount");
const interestRateInput = document.getElementById("interest-rate");
const loanTenureInput = document.getElementById("loan-tenure");
const amountDisplay = document.getElementById("amount-display");
const rateDisplay = document.getElementById("rate-display");
const tenureDisplay = document.getElementById("tenure-display");
const emiOutput = document.getElementById("emi-output");

// ==========================================================================

// ==========================================================================
// 2. Native <dialog> Modal Controllers & Fallbacks
// ==========================================================================
function openModal() {
  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
    // Auto-focus first input
    const firstInput = modal.querySelector("input");
    if (firstInput) firstInput.focus();
  }
}

function closeModal() {
  if (modal && typeof modal.close === "function") {
    modal.close();
  }
}

// Bind show/hide listeners
openButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeTargets.forEach((target) => {
  target.addEventListener("click", closeModal);
});

// Polyfill/Fallback for light-dismiss (clicking outside the dialog card content)
if (modal) {
  // Check if browser natively supports closedby (Chrome 134+, Firefox 141+)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    modal.addEventListener('click', (event) => {
      // If the clicked target is the dialog wrapper itself (the backdrop layer)
      if (event.target === modal) {
        const rect = modal.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        // Clicked outside dialog content boundaries
        if (!isDialogContent) {
          closeModal();
        }
      }
    });
  }

  // Double check manual close button if data-close-modal didn't bind
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }
}


// ==========================================================================================
// 4. Interactive Floor & Master Plans Toggle
// ==========================================================================
planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedPlan = button.dataset.plan;

    planButtons.forEach((item) => item.classList.toggle("active", item === button));
    planPanels.forEach((panel) => panel.classList.remove("active"));

    const panelClass = selectedPlan === "master" ? ".master-plan" : ".floor-plan";
    const activePanel = document.querySelector(panelClass);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});


// ==========================================================================
// 5. Accordion Event Listener
// ==========================================================================
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const current = button.closest("article");
    const isOpen = current.classList.contains("open");

    // Close all accordion sections
    document.querySelectorAll("#location-accordion article").forEach((article) => {
      article.classList.remove("open");
    });

    // Toggle only if it was closed
    if (!isOpen) {
      current.classList.add("open");
    }
  });
});


// ==========================================================================
// 6. Real-time EMI Calculator Logic
// ==========================================================================
function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

function formatAmountText(value) {
  if (value >= 10000000) {
    return `Rs. ${(value / 10000000).toFixed(2)} Cr`;
  }
  return `Rs. ${(value / 100000).toFixed(0)} Lakhs`;
}

function calculateEMI() {
  if (!loanAmountInput || !interestRateInput || !loanTenureInput) return;

  const principal = Number(loanAmountInput.value);
  const annualRate = Number(interestRateInput.value);
  const years = Number(loanTenureInput.value);

  // Update slider visual text
  if (amountDisplay) amountDisplay.textContent = formatAmountText(principal);
  if (rateDisplay) rateDisplay.textContent = `${annualRate.toFixed(1)}%`;
  if (tenureDisplay) tenureDisplay.textContent = `${years} Year${years > 1 ? "s" : ""}`;

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  if (isNaN(emi) || !isFinite(emi)) {
    if (emiOutput) emiOutput.textContent = "Rs. 0";
    return;
  }

  if (emiOutput) {
    emiOutput.textContent = `Rs. ${formatCurrency(Math.round(emi))}`;
  }
}

// Bind slider input listeners
if (loanAmountInput && interestRateInput && loanTenureInput) {
  [loanAmountInput, interestRateInput, loanTenureInput].forEach((input) => {
    input.addEventListener("input", calculateEMI);
  });
  
  // Calculate on initialization
  calculateEMI();
}

// Support form submission to open enquiry modal
if (emiForm) {
  emiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    openModal();
  });
}


// ==========================================================================
// 7. Lead Forms Submission Handling
// ==========================================================================
function handleLeadFormSubmit(form) {
  const note = form.querySelector(".form-note");
  form.reset();
  if (note) {
    note.textContent = "Thank you! Our sales team will connect with you shortly.";
    // Clear message after 4 seconds
    setTimeout(() => {
      note.textContent = "";
    }, 4000);
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLeadFormSubmit(contactForm);
  });
}

if (modalForm) {
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLeadFormSubmit(modalForm);
    // Close modal after brief success presentation
    setTimeout(() => {
      closeModal();
    }, 1500);
  });
}
