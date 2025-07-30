document.addEventListener("DOMContentLoaded", function () {
  // ==== CURRENT YEAR ====
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ==== TYPED.JS ====
  try {
    new Typed("#typed-text", {
      strings: [
        "Back-end Developer",
        "Software Engineer",
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
    console.error("Typed.js failed:", error);
    const fallback = document.getElementById("typed-text");
    if (fallback) fallback.textContent = "Software Engineer";
  }

  // ==== SMOOTH SCROLL ====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.getElementById("mobileSidebar")?.classList.remove("show");
      document
        .querySelector(".header__sm-menu")
        ?.classList.remove("header__sm-menu--active");
      document
        .querySelector(".header__main-ham-menu")
        ?.classList.remove("d-none");
      document
        .querySelector(".header__main-ham-menu-close")
        ?.classList.add("d-none");
    });
  });

  // ==== HEADER SHADOW ====
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

  // ==== SIDEBAR ====
  const mobileToggle = document.querySelector(".header__mobile-toggle");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  mobileToggle?.addEventListener("click", () =>
    mobileSidebar?.classList.add("show")
  );
  closeSidebar?.addEventListener("click", () =>
    mobileSidebar?.classList.remove("show")
  );

  // ==== SMALL MENU ====
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

  // ==== LOGO REDIRECT ====
  document
    .querySelector(".header__logo-container")
    ?.addEventListener("click", () => {
      location.href = "index.html";
    });

  // ==== FORM SUBMIT ====
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
      }, 3000);
    });
  }

  // ==== ANIMATION ====
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

  document
    .querySelectorAll(".project-card, .about__content > div")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });

  // ==== PROJECTS SECTION ====
  const projects = [
    {
      title: "Mentee",
      description: [
        "A comprehensive Learning Management System that facilitates mentorship.",
        "Includes course tracking, user management, and interactive features.",
      ],
      techStack: [
        "React",
        "Spring Boot",
        "Hibernate",
        "Spring Security",
        "JWT",
        "PostgreSQL",
      ],
      image: "./assets/mentee.png",
      githubLink: "https://github.com/TejPrakash18/Mentee-LMS",
    },
    {
      title: "Shift Management",
      description: [
        "A robust Shift Management System designed to streamline employee scheduling.",
        "Tracks shifts, manages user roles, real-time updates.",
      ],
      techStack: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "Hibernate",
        "Postman",
        "JWT",
      ],
      image: "assets/shift_management.png",
      githubLink: "https://github.com/TejPrakash18/Shift-Management",
    },
    {
      title: "E-Commerce",
      description: [
        "E-commerce app with functionalities such as product listings, categories, order processing, shopping carts, and user profiles which supports smooth scalability as business needs grow.",
      ],
      techStack: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "Hibernate",
        "Postman",
        "JWT",
      ],
      image: "assets/ecommerce1.jpg",
      githubLink: "https://github.com/TejPrakash18/Shift-Management",
    },
  ];

  const projectContainer = document.getElementById("projectCardsWrapper");
  const projectHTML = projects
    .map((item, index) => {
      const isEven = index % 2 === 0;
      const descriptionHTML = item.description
        .map((d) => `<div>${d}</div>`)
        .join("");
      const techHTML = item.techStack
        .map((tech) => `<span class="tech-tag">${tech}</span>`)
        .join("");

      return `
      <div class="project-card">
        <div class="project-card__content">
          ${
            isEven
              ? `<div class="project-card__image-wrapper">
                  <img src="${item.image}" alt="${item.title}" class="project-card__image" />
                 </div>`
              : ""
          }
          <div class="project-card__info">
            <h3 class="project-card__title">${item.title}</h3>
            <p class="project-card__description">${descriptionHTML}</p>
            <div class="tech-stack">${techHTML}</div>
            <a href="${
              item.githubLink
            }" class="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> View Project
            </a>
          </div>
          ${
            !isEven
              ? `<div class="project-card__image-wrapper">
                  <img src="${item.image}" alt="${item.title}" class="project-card__image" />
                 </div>`
              : ""
          }
        </div>
      </div>
    `;
    })
    .join("");

  if (projectContainer)
    projectContainer.insertAdjacentHTML("beforeend", projectHTML);

  // ==== EDUCATION / EXPERIENCE / CERTIFICATES ====
  const education = [
    {
      year: "June 2022 - July 2025",
      title: "Bachelor Of Computer Application",
      subtitle: "Raja Mahendra Pratap University • Aligarh, UP",
    },
    {
      year: "Aug 2018 - March 2021",
      title: "Diploma In Computer Science",
      subtitle: "Mg Polytechnic • Hathras, UP",
    },
  ];

  const experience = [
    {
      year: "2017 - Present",
      title: "Agri-Tech Engineer & Farming Analyst",
      subtitle: "Self-employed • Aligarh & Iglas, Uttar Pradesh",
      description: [
        "Balanced academic learning in software engineering with hands-on agricultural operations.",
        "Developed farm tools using Excel, Sheets, and Spring Boot.",
        "Handled agri-marketing, crop strategy, and digital data reporting.",
        "Completed Diploma & BCA while managing technical and farming work.",
      ],
    },
  ];

  const certificates = [
    {
      year: "Jan 2024",
      title: "Spring Boot & Microservices Specialization",
      subtitle: "Coursera • University of San Diego",
    },
    {
      year: "Dec 2023",
      title: "React Frontend Developer",
      subtitle: "Meta • Coursera",
    },
    {
      year: "Jul 2022",
      title: "Certified Android Developer",
      subtitle: "Google Developer Community",
    },
  ];

  function renderTimelineSection(title, data, includeDescription = false) {
    const section = document.createElement("section");
    section.className = "timeline-section";

    const itemsHTML = data
      .map((item) => {
        const descriptionHTML =
          includeDescription && item.description
            ? item.description.map((d) => `<div>${d}</div>`).join("")
            : "";
        return `
        <div class="timeline-item">
          <span class="timeline-date">${item.year}</span>
          <div class="timeline-card">
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
            ${descriptionHTML}
          </div>
        </div>`;
      })
      .join("");

    section.innerHTML = `
      <h2 class="section-title">${title}</h2>
      <div class="timeline">${itemsHTML}</div>
    `;
    document.getElementById("content")?.appendChild(section);
  }

  renderTimelineSection("Education", education);
  renderTimelineSection("Certificates", certificates);
  renderTimelineSection("Experience", experience, true);
});
