  document.addEventListener("DOMContentLoaded", function () {
    // ==== Set current year ====
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // ==== Typed.js Animation ====
    try {
      new Typed("#typed-text", {
        strings: [
          "Back-end Developer",
          "Web Developer",
          "Android Developer",
          "Problem Solver",
          "DSA Enthusiast",
          "System Design",
          "Low Level Design",
        ],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
      });
    } catch (error) {
      console.error("Typed.js initialization failed:", error);
      const typedTextEl = document.getElementById("typed-text");
      if (typedTextEl) typedTextEl.textContent = "Back-end Developer";
    }

    // ==== Smooth scrolling ====
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // Close mobile sidebar if open
        document.getElementById("mobileSidebar")?.classList.remove("show");

        // Close small menu if open
        document.querySelector(".header__sm-menu")?.classList.remove("header__sm-menu--active");
        document.querySelector(".header__main-ham-menu")?.classList.remove("d-none");
        document.querySelector(".header__main-ham-menu-close")?.classList.add("d-none");
      });
    });

    // ==== Header shadow on scroll ====
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
      if (!header) return;
      if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "none";
      }
    });

    // ==== Mobile sidebar toggle ====
    const mobileToggle = document.querySelector(".header__mobile-toggle");
    const mobileSidebar = document.getElementById("mobileSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    mobileToggle?.addEventListener("click", () => {
      mobileSidebar?.classList.add("show");
    });

    closeSidebar?.addEventListener("click", () => {
      mobileSidebar?.classList.remove("show");
    });

    // ==== Optional small menu logic (if used) ====
    const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
    const smallMenu = document.querySelector(".header__sm-menu");
    const hamMenuIcon = document.querySelector(".header__main-ham-menu");
    const hamCloseIcon = document.querySelector(".header__main-ham-menu-close");
    const smallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

    hamMenuBtn?.addEventListener("click", () => {
      smallMenu?.classList.toggle("header__sm-menu--active");
      hamMenuIcon?.classList.toggle("d-none");
      hamCloseIcon?.classList.toggle("d-none");
    });

    smallMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        smallMenu?.classList.remove("header__sm-menu--active");
        hamMenuIcon?.classList.remove("d-none");
        hamCloseIcon?.classList.add("d-none");
      });
    });

    // ==== Logo click to redirect home ====
    const logoContainer = document.querySelector(".header__logo-container");
    logoContainer?.addEventListener("click", () => {
      location.href = "index.html";
    });

    // ==== Form submission animation ====
    const contactForm = document.querySelector(".contact__form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (!submitBtn) return;

        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000); // Simulated delay
      });
    }

    // ==== Intersection Observer for animation ====
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card, .about__content > div").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });
  });

