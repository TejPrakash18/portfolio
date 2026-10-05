document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     CURRENT YEAR
  ========================================================= */

  const yearEl = document.getElementById("currentYear");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* =========================================================
     TYPED.JS
  ========================================================= */

  const typedElement = document.getElementById("typed-text");

  if (typedElement && typeof Typed !== "undefined") {
    new Typed("#typed-text", {
      strings: [
        "Backend Developer",
        "Software Engineer",
        "Problem Solver",
        "DSA Enthusiast",
        "System Designer",
        "Support Engineer",
      ],

      typeSpeed: 70,
      backSpeed: 45,
      backDelay: 1800,
      startDelay: 300,

      loop: true,

      smartBackspace: true,

      showCursor: true,
      cursorChar: "|",
    });
  }


  /* =========================================================
     HEADER
  ========================================================= */

  const header = document.querySelector(".header");

  const handleHeader = () => {
    if (!header) return;

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );
  };

  window.addEventListener(
    "scroll",
    handleHeader,
    { passive: true }
  );

  handleHeader();


  /* =========================================================
     MOBILE SIDEBAR
  ========================================================= */

  const mobileToggle =
    document.getElementById("mobileToggle");

  const mobileSidebar =
    document.getElementById("mobileSidebar");

  const closeSidebar =
    document.getElementById("closeSidebar");

  mobileToggle?.addEventListener("click", () => {
    mobileSidebar?.classList.add("show");
  });

  closeSidebar?.addEventListener("click", () => {
    mobileSidebar?.classList.remove("show");
  });


  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target =
          document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        mobileSidebar?.classList.remove("show");
      });
    });


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    document.querySelectorAll("section[id]");

  const navLinks =
    document.querySelectorAll(
      ".header__nav .header__link"
    );

  const sectionObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          const activeLink =
            document.querySelector(
              `.header__nav a[href="#${entry.target.id}"]`
            );

          activeLink?.classList.add("active");
        });

      },
      {
        threshold: 0.35,
      }
    );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });


  /* =========================================================
     PROJECTS
  ========================================================= */

  const projects = [

    {
      title: "Mentee",

      description: [
        "A mentorship-focused Learning Management System designed for structured learning and collaboration.",
        "Includes course management, authentication, user roles and scalable backend architecture.",
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

      githubLink:
        "https://github.com/TejPrakash18/Mentee-LMS",
    },

    {
      title: "Shift Management",

      description: [
        "A workforce scheduling platform designed to simplify employee shift management.",
        "Supports authentication, role-based access, scheduling and real-time system updates.",
      ],

      techStack: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "Hibernate",
        "JWT",
        "Postman",
      ],

      image:
        "./assets/shift_management.png",

      githubLink:
        "https://github.com/TejPrakash18/Shift-Management",
    },

    {
      title: "E-Commerce",

      description: [
        "A scalable e-commerce backend supporting products, categories, carts, orders and user profiles.",
        "Designed with clean APIs and an architecture that can evolve with growing business requirements.",
      ],

      techStack: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "Hibernate",
        "JWT",
        "REST APIs",
      ],

      image:
        "./assets/ecommerce1.jpg",

      githubLink:
        "https://github.com/TejPrakash18/Shift-Management",
    },

  ];


  const projectContainer =
    document.getElementById(
      "projectCardsWrapper"
    );


  if (projectContainer) {

    projectContainer.innerHTML =
      projects
        .map((project, index) => {

          const imageFirst =
            index % 2 === 0;

          const descriptionHTML =
            project.description
              .map(
                (description) =>
                  `<div>${description}</div>`
              )
              .join("");

          const techHTML =
            project.techStack
              .map(
                (tech) =>
                  `<span class="tech-tag">${tech}</span>`
              )
              .join("");

          const imageHTML = `
            <div class="project-card__image-wrapper">
              <img
                src="${project.image}"
                alt="${project.title}"
                class="project-card__image"
                loading="lazy"
              />
            </div>
          `;

          const infoHTML = `
            <div class="project-card__info">

              <span class="section-label">
                PROJECT ${String(index + 1).padStart(2, "0")}
              </span>

              <h3 class="project-card__title">
                ${project.title}
              </h3>

              <div class="project-card__description">
                ${descriptionHTML}
              </div>

              <div class="tech-stack">
                ${techHTML}
              </div>

              <a
                href="${project.githubLink}"
                class="btn btn--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
                View Project
              </a>

            </div>
          `;

          return `
            <article class="project-card">

              <div class="project-card__content">

                ${
                  imageFirst
                    ? imageHTML + infoHTML
                    : infoHTML + imageHTML
                }

              </div>

            </article>
          `;
        })
        .join("");
  }


  /* =========================================================
     EDUCATION
  ========================================================= */

  const education = [

    {
      year: "2025 - Present",

      title:
        "Master of Computer Applications",

      subtitle:
        "Galgotias University • Greater Noida, UP",
    },

    {
      year: "June 2022 - July 2025",

      title:
        "Bachelor of Computer Applications",

      subtitle:
        "Raja Mahendra Pratap University • Aligarh, UP",
    },

    {
      year: "Aug 2018 - March 2021",

      title:
        "Diploma in Computer Science",

      subtitle:
        "MG Polytechnic • Hathras, UP",
    },

  ];


  /* =========================================================
     EXPERIENCE
  ========================================================= */

  const experience = [

    {
      year: "Aug 2026 - Present",

      title:
        "Support Engineer",

      subtitle:
        "Inverted Energy Private Limited",

      description: [
        "Troubleshoot technical and system-related issues.",
        "Analyze problems and identify root causes.",
        "Collaborate with technical teams to improve reliability and performance.",
        "Apply backend development and problem-solving skills to real-world systems.",
      ],
    },

    {
      year: "2017 - Present",

      title:
        "Agri-Tech Engineer & Farming Analyst",

      subtitle:
        "Self-employed • Aligarh & Iglas, Uttar Pradesh",

      description: [
        "Balanced academic learning with hands-on agricultural operations.",
        "Built digital tools using Excel, Google Sheets and Spring Boot.",
        "Worked on data reporting, crop strategy and agri-marketing.",
        "Developed practical problem-solving skills through real-world operations.",
      ],
    },

  ];


  /* =========================================================
     CERTIFICATES
  ========================================================= */

  const certificates = [

    {
      year: "Jan 2024",

      title:
        "Spring Boot & Microservices Specialization",

      subtitle:
        "Coursera • University of San Diego",
    },

    {
      year: "Dec 2023",

      title:
        "Full Stack Developer — Node.js",

      subtitle:
        "Coding Shuttle",
    },

    {
      year: "Jul 2022",

      title:
        "Certified Android Developer",

      subtitle:
        "Google Developer Community",
    },

  ];


  /* =========================================================
     TIMELINE RENDERER
  ========================================================= */

  const content =
    document.getElementById("content");


  function renderTimelineSection(
    title,
    data,
    includeDescription = false
  ) {

    if (!content) return;

    const section =
      document.createElement("section");

    section.className =
      "timeline-section";


    const itemsHTML =
      data
        .map((item) => {

          const descriptionHTML =
            includeDescription &&
            item.description

              ? item.description
                  .map(
                    (description) =>
                      `<div>• ${description}</div>`
                  )
                  .join("")

              : "";


          return `
            <div class="timeline-item">

              <span class="timeline-date">
                ${item.year}
              </span>

              <div class="timeline-card">

                <h3>
                  ${item.title}
                </h3>

                <p>
                  ${item.subtitle}
                </p>

                ${descriptionHTML}

              </div>

            </div>
          `;
        })
        .join("");


    section.innerHTML = `
      <h2 class="section-title">
        ${title}
      </h2>

      <div class="timeline">
        ${itemsHTML}
      </div>
    `;


    content.appendChild(section);
  }


  /* =========================================================
     RENDER TIMELINE
  ========================================================= */

  renderTimelineSection(
    "Experience",
    experience,
    true
  );

  renderTimelineSection(
    "Education",
    education
  );

  renderTimelineSection(
    "Certificates",
    certificates
  );


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  const revealElements =
    document.querySelectorAll(
      ".project-card, .about__info, .about__skills, .timeline-section, .contact__intro, .contact__form"
    );


  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "fade-in"
          );

          observer.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,
      }
    );


  revealElements.forEach((element) => {

    element.style.opacity = "0";

    revealObserver.observe(element);

  });


  /* =========================================================
     GOOGLE SHEETS CONTACT FORM
  ========================================================= */

  const contactForm =
    document.getElementById("contactForm");

  // Set this to the deployed Apps Script Web App URL ending in /exec.
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwsgLjXhuDVS0-zplNiznVSLIps62lLsoiTpHZdHZD-8Wztq3LHM6Kk4SWA30ntRp3u/exec";


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      async function (event) {

        event.preventDefault();


        /* -----------------------------------------------------
           FORM ELEMENTS
        ----------------------------------------------------- */

        const submitBtn =
          contactForm.querySelector(
            'button[type="submit"]'
          );

        const formStatus =
          document.getElementById(
            "formStatus"
          );


        if (!submitBtn) return;

        if (
          !GOOGLE_SCRIPT_URL.startsWith(
            "https://script.google.com/macros/s/"
          )
        ) {
          if (formStatus) {
            formStatus.textContent =
              "The contact form has not been connected yet. Add the deployed Apps Script URL in index.js.";
            formStatus.className = "form-status error";
          }
          return;
        }


        /* -----------------------------------------------------
           SAVE ORIGINAL BUTTON
        ----------------------------------------------------- */

        const originalText =
          submitBtn.innerHTML;


        /* -----------------------------------------------------
           GET FORM VALUES
        ----------------------------------------------------- */

        const name =
          document
            .getElementById("name")
            ?.value
            .trim();

        const email =
          document
            .getElementById("email")
            ?.value
            .trim();

        const message =
          document
            .getElementById("message")
            ?.value
            .trim();


        /* -----------------------------------------------------
           BASIC VALIDATION
        ----------------------------------------------------- */

        if (!name || !email || !message) {

          if (formStatus) {

            formStatus.textContent =
              "Please fill in all fields.";

            formStatus.className =
              "form-status error";
          }

          return;
        }


        /* -----------------------------------------------------
           EMAIL VALIDATION
        ----------------------------------------------------- */

        const emailRegex =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(email)) {

          if (formStatus) {

            formStatus.textContent =
              "Please enter a valid email address.";

            formStatus.className =
              "form-status error";
          }

          return;
        }


        /* -----------------------------------------------------
           LOADING STATE
        ----------------------------------------------------- */

        submitBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Sending...';

        submitBtn.disabled = true;


        if (formStatus) {

          formStatus.textContent = "";

          formStatus.className =
            "form-status";
        }


        /* -----------------------------------------------------
           FORM DATA
        ----------------------------------------------------- */

        const formData = {

          name: name,

          email: email,

          message: message,

        };

        console.log("Contact form payload:", formData);


        /* -----------------------------------------------------
           SEND TO GOOGLE SHEETS
        ----------------------------------------------------- */

        try {

          // no-cors avoids a browser preflight. Apps Script responses are
          // opaque in this mode, so the browser cannot verify the sheet write.
          await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(formData),
          });

          if (formStatus) {
            formStatus.textContent =
              "Your message was submitted. Thank you!";
            formStatus.className = "form-status success";
          }

          contactForm.reset();


        } catch (error) {

          console.error(
            "Google Sheets submission error:",
            error
          );


          if (formStatus) {

            formStatus.textContent =
              "Unable to send your message. Please try again.";

            formStatus.className =
              "form-status error";
          }


        } finally {

          /* ---------------------------------------------------
             RESTORE BUTTON
          --------------------------------------------------- */

          submitBtn.innerHTML =
            originalText;

          submitBtn.disabled = false;

        }

      }
    );
  }

});
