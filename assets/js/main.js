const navItems = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "about", label: "About", href: "about.html" },
  { id: "services", label: "Services", href: "services.html" },
  { id: "contact", label: "Contact", href: "contact.html" },
];

const topLocations = [
  "Outram Lane",
  "Hudson Lane",
  "Vijay Nagar",
  "GTB Nagar",
  "Mukherjee Nagar",
  "Kamla Nagar",
  "Model Town",
  "Derawal Nagar",
  "Gujranwala Nagar",
];

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
  initMobileMenu();
  initCounterAnimations();
  initTestimonialSlider();
  initLeadForm();
  initContactForm();
  setCurrentYear();
});

function renderNavbar() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const activePage = document.body.dataset.page || "";
  const desktopLinks = navItems
    .map(
      (item) => `
        <a href="${item.href}" class="nav-link text-sm font-semibold tracking-[0.18em] uppercase ${
          activePage === item.id ? "active text-brand-gold" : "text-white/80"
        }">
          ${item.label}
        </a>
      `
    )
    .join("");

  const mobileLinks = navItems
    .map(
      (item) => `
        <a href="${item.href}" class="mobile-link block rounded-2xl px-4 py-3 text-base font-semibold ${
          activePage === item.id ? "active bg-white/10 text-brand-gold" : "text-white/80"
        }">
          ${item.label}
        </a>
      `
    )
    .join("");

  header.className = "sticky top-0 z-50";
  header.innerHTML = `
    <div class="site-header-shell">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="index.html" class="flex items-center gap-3 text-white">
          <span class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 bg-white/5 font-display text-2xl text-brand-gold">
            AB
          </span>
          <span>
            <span class="block font-display text-2xl leading-none tracking-[0.12em] text-white">Ashvik Buildcon</span>
            <span class="block pt-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/55">Delhi NCR Realty</span>
          </span>
        </a>

        <nav class="hidden items-center gap-8 lg:flex">
          ${desktopLinks}
        </nav>

        <div class="hidden lg:block">
          <a href="contact.html#contact-form" class="btn-primary">Book a Visit</a>
        </div>

        <button id="menu-toggle" type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden" aria-expanded="false" aria-label="Toggle navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="hidden border-t border-white/10 px-4 pb-4 pt-2 lg:hidden">
        <div class="mx-auto max-w-7xl space-y-2 rounded-3xl border border-white/8 bg-black/20 p-3">
          ${mobileLinks}
          <a href="contact.html#contact-form" class="btn-primary mt-3 w-full">Book a Visit</a>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="dark-panel text-white">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] lg:px-8">
        <div>
          <div class="flex items-center gap-3">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 bg-white/5 font-display text-2xl text-brand-gold">AB</span>
            <div>
              <p class="font-display text-2xl tracking-[0.08em]">Ashvik Buildcon</p>
              <p class="pt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Premium + Trust + Affordable Luxury</p>
            </div>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Premium residential solutions across Delhi NCR with a focus on trusted guidance, elegant living spaces, and long-term value.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Quick Links</p>
          <div class="mt-5 space-y-3 text-sm text-white/70">
            ${navItems
              .map(
                (item) => `
                  <a href="${item.href}" class="footer-link block">${item.label === "About" ? "About Us" : item.label}</a>
                `
              )
              .join("")}
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Top Locations</p>
          <div class="mt-5 grid grid-cols-2 gap-3 text-sm text-white/70">
            ${topLocations
              .map(
                (location) => `
                  <span>${location}</span>
                `
              )
              .join("")}
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Contact Info</p>
          <div class="mt-5 space-y-4 text-sm leading-7 text-white/70">
            <a href="tel:+919999648766" class="footer-link block">+91 9999648766</a>
            <a href="tel:+919650490650" class="footer-link block">+91 9650490650</a>
            <a href="mailto:ashvikbuildcon@gmail.com" class="footer-link block">ashvikbuildcon@gmail.com</a>
            <p>1443/1, Outram Lines, Opp. BBM Depot, Delhi - 110009</p>
            <p>Sunday-Friday: 9 AM - 6 PM</p>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; <span id="current-year"></span> Ashvik Buildcon. All rights reserved.</p>
          <p>Crafted for premium living in Delhi NCR.</p>
        </div>
      </div>
    </div>
  `;
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initCounterAnimations() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.counter || 0);
    const duration = 1800;
    const startTime = performance.now();

    const tick = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * eased);
      counter.textContent = `${currentValue.toLocaleString()}+`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initTestimonialSlider() {
  const slider = document.querySelector("[data-testimonial-slider]");
  if (!slider) return;

  const slides = slider.querySelectorAll(".testimonial-slide");
  const dots = slider.querySelectorAll(".slider-dot");
  const prev = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  let index = 0;

  const showSlide = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  prev?.addEventListener("click", () => showSlide(index - 1));
  next?.addEventListener("click", () => showSlide(index + 1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => showSlide(dotIndex));
  });

  setInterval(() => {
    showSlide(index + 1);
  }, 5000);

  showSlide(index);
}

function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;

  const input = form.querySelector('input[type="email"]');
  const status = form.querySelector("[data-form-status]");
  if (!input || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = input.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    status.classList.remove("hidden");

    if (!isValid) {
      input.classList.add("field-invalid");
      status.className = "mt-4 hidden text-sm font-medium text-red-600";
      status.classList.remove("hidden");
      status.textContent = "Please enter a valid email address to receive property updates.";
      return;
    }

    input.classList.remove("field-invalid");
    status.className = "success-banner mt-4 px-4 py-3 text-sm font-medium";
    status.textContent = "Thanks for your interest. Our team will share the latest property updates soon.";
    form.reset();
  });

  input.addEventListener("input", () => {
    input.classList.remove("field-invalid");
    status.classList.add("hidden");
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = [
    { name: "firstName", rule: (value) => value.length >= 2, message: "Please enter your first name." },
    { name: "lastName", rule: (value) => value.length >= 2, message: "Please enter your last name." },
    {
      name: "phone",
      rule: (value) => /^[0-9+\-\s()]{10,16}$/.test(value),
      message: "Enter a valid phone number with 10 to 16 characters.",
    },
    {
      name: "email",
      rule: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Please enter a valid email address.",
    },
    { name: "serviceType", rule: (value) => value !== "", message: "Please choose a service type." },
    { name: "message", rule: (value) => value.length >= 12, message: "Please share a message with at least 12 characters." },
  ];

  const setFieldState = (input, message) => {
    const error = form.querySelector(`[data-error-for="${input.name}"]`);
    if (!error) return;

    if (message) {
      input.classList.add("field-invalid");
      error.textContent = message;
      error.classList.remove("hidden");
    } else {
      input.classList.remove("field-invalid");
      error.textContent = "";
      error.classList.add("hidden");
    }
  };

  fields.forEach(({ name, rule, message }) => {
    const input = form.elements[name];
    if (!input) return;

    const validate = () => {
      const value = String(input.value).trim();
      const isValid = rule(value);
      setFieldState(input, isValid ? "" : message);
      return isValid;
    };

    input.addEventListener("input", validate);
    input.addEventListener("change", validate);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isFormValid = true;

    fields.forEach(({ name, rule, message }) => {
      const input = form.elements[name];
      if (!input) return;
      const value = String(input.value).trim();
      const isValid = rule(value);
      setFieldState(input, isValid ? "" : message);
      if (!isValid) {
        isFormValid = false;
      }
    });

    const status = form.querySelector("[data-form-status]");
    if (!status) return;

    if (!isFormValid) {
      status.className = "mt-5 text-sm font-medium text-red-600";
      status.textContent = "Please fix the highlighted fields before sending your enquiry.";
      return;
    }

    status.className = "success-banner mt-5 px-4 py-3 text-sm font-medium";
    status.textContent = "Your enquiry has been captured successfully. Our team will contact you shortly.";
    form.reset();

    fields.forEach(({ name }) => {
      const input = form.elements[name];
      if (input) {
        input.classList.remove("field-invalid");
      }
    });

    form.querySelectorAll("[data-error-for]").forEach((error) => {
      error.textContent = "";
      error.classList.add("hidden");
    });
  });
}

function setCurrentYear() {
  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}
