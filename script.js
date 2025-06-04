AOS.init();

function flipCard(stepId) {
  const card = document.getElementById(stepId);
  card.classList.toggle("flipped");
}

function scrollToStep(stepId, arrowElement) {
  const current = document.getElementById(stepId);
  if (current) {
    current.classList.add("active");
    updateProgressBar(stepId);
    current.scrollIntoView({ behavior: "smooth", block: "start" });

    if (arrowElement) {
      arrowElement.style.display = "none";
    }

    if (stepId === "step5") {
      const therapistWrapper = document.getElementById("therapists-wrapper");
      if (therapistWrapper) {
        setTimeout(() => {
          therapistWrapper.classList.add("visible");
          therapistWrapper.scrollIntoView({ behavior: "smooth" });
        }, 800);
      }

      const aboutWrapper = document.getElementById("about-wrapper");
      if (aboutWrapper) {
        setTimeout(() => {
          aboutWrapper.style.display = "block";

          // Trigger fade-in animation
          const aboutCard = aboutWrapper.querySelector(".about-card");
          if (aboutCard) {
            setTimeout(() => {
              aboutCard.classList.add("visible");
            }, 200); // slight delay after showing
          }
        }, 1500);
      }
    }
  }
}

function scrollBackTo(prevStepId) {
  const prev = document.getElementById(prevStepId);
  if (prev) {
    prev.scrollIntoView({ behavior: "smooth", block: "center" });
    updateProgressBar(prevStepId);
  }
}

function updateProgressBar(stepId) {
  const progressItems = document.querySelectorAll(".progress-step");
  progressItems.forEach((item, index) => {
    const targetStep = "step" + (index + 1);
    if (stepId === targetStep) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

const journeyIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("visible");
        journeyIO.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);
const arrowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("arrow-visible");
        arrowObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".arrow-down").forEach((arrow) => {
  arrowObserver.observe(arrow);
});

const step1 = document.getElementById("step1");
if (step1) {
  step1.classList.add("active");
  journeyIO.observe(step1);
}

document.querySelectorAll(".timeline-step").forEach((step, index) => {
  step.style.transitionDelay = `${index * 0.2}s`;
});

function scrollToStep(stepId, arrowElement) {
  const current = document.getElementById(stepId);
  if (current) {
    current.classList.add("active");
    updateProgressBar(stepId);
    current.scrollIntoView({ behavior: "smooth", block: "start" });

    if (arrowElement) {
      arrowElement.style.display = "none";
    }

    if (stepId === "step5") {
      const therapistWrapper = document.getElementById("therapists-wrapper");
      if (therapistWrapper) {
        setTimeout(() => {
          therapistWrapper.classList.add("visible");
          therapistWrapper.scrollIntoView({ behavior: "smooth" });
        }, 800);
      }

      const aboutWrapper = document.getElementById("about-wrapper");
      if (aboutWrapper) {
        setTimeout(() => {
          aboutWrapper.style.display = "block";
          const aboutCard = aboutWrapper.querySelector(".about-card");
          if (aboutCard) {
            setTimeout(() => {
              aboutCard.classList.add("visible");
            }, 200);
          }
        }, 1500);
      }

      const quoteWrapper = document.getElementById("quote-wrapper");
      if (quoteWrapper) {
        setTimeout(() => {
          quoteWrapper.style.display = "block";
          quoteWrapper.querySelector(".quote-section").classList.add("visible");
          const quoteEl = document.getElementById("quoteText");
          const quote =
            "We built Grace because every healing journey deserves care, data, and dignity.";
          let i = 0;
          function typeQuote() {
            if (i < quote.length) {
              quoteEl.textContent += quote.charAt(i);
              i++;
              setTimeout(typeQuote, 35);
            }
          }
          typeQuote();
        }, 1900);
      }

      const contactWrapper = document.getElementById("contact-wrapper");
      if (contactWrapper) {
        setTimeout(() => {
          contactWrapper.style.display = "block";
        }, 2200);
      }
    }
  }
}

const contactWrapper = document.getElementById("contact-wrapper");
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = contactWrapper.querySelector(".contact-section");
        if (section) {
          section.classList.add("visible");
        }
        contactObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

if (contactWrapper) {
  contactObserver.observe(contactWrapper);
}

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const confirmation = document.getElementById("confirmationMessage");
  confirmation.style.display = "block";
  confirmation.style.opacity = 0;
  setTimeout(() => {
    confirmation.style.opacity = 1;
  }, 100);
  contactForm.reset();
});

// Smooth scroll for navbar and back-to-top
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Navbar behavior
const navbar = document.getElementById("navbar");
const divider = document.getElementById("navbar-divider");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
    divider.classList.add("hidden");
  } else {
    navbar.classList.remove("scrolled");
    divider.classList.remove("hidden");
  }
});

// Modals
function openModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  modal.classList.add("show");
}

function closeModal(type) {
  const modal = document.getElementById(`modal-${type}`);
  modal.classList.remove("show");
}

window.addEventListener("click", (e) => {
  const modals = ["diagnosis", "interview", "doctors"];
  modals.forEach((type) => {
    const modal = document.getElementById(`modal-${type}`);
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Reveal on scroll (e.g., features section)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const featuresSection = document.querySelector(".features-section");
if (featuresSection) observer.observe(featuresSection);

// Journey reveal observer
const journeyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        journeyObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document
  .querySelectorAll(".timeline-step")
  .forEach((el) => journeyObserver.observe(el));

// Popover logic
function togglePopover(id) {
  document
    .querySelectorAll(".popover")
    .forEach((p) => p.classList.remove("visible"));
  const pop = document.getElementById(id);
  if (pop) pop.classList.toggle("visible");
}

window.addEventListener("click", function (e) {
  if (!e.target.classList.contains("info-icon")) {
    document
      .querySelectorAll(".popover")
      .forEach((p) => p.classList.remove("visible"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("moodForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const mood = document.querySelector('input[name="moodText"]').value.trim();
    const response = document.getElementById("moodResponse");

    if (mood) {
      response.textContent = `Thank you for sharing. You said: "${mood}"`;
    } else {
      response.textContent = `Please tell us how you're feeling today.`;
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Don't lock scroll on load
    const journeySection = document.querySelector("#journey");

    if (journeySection) {
      const lockScrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Once Journey section is in view, lock scroll
              document.body.classList.add("lock-scroll");
              lockScrollObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      lockScrollObserver.observe(journeySection);
    }

    const steps = document.querySelectorAll(".timeline-step");
    const arrows = document.querySelectorAll(".arrow-down");
    const therapistWrapper = document.getElementById("therapists-wrapper");

    steps[0].classList.add("active");
    arrows[0]?.classList.add("visible");

    arrows.forEach((arrow, i) => {
      arrow.addEventListener("click", () => {
        if (steps[i + 1]) {
          steps[i + 1].classList.add("active");
          arrows[i + 1]?.classList.add("visible");

          if (i + 1 === 4 && therapistWrapper) {
            therapistWrapper.classList.add("visible");
            setTimeout(() => {
              therapistWrapper.scrollIntoView({ behavior: "smooth" });
            }, 600);
          }
        }
        arrow.classList.remove("visible");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".therapist-slider-track");
    const cards = document.querySelectorAll(".therapist-card");
    const nextBtn = document.querySelector(".therapist-next-btn");
    const prevBtn = document.querySelector(".therapist-prev-btn");
    const dots = document.querySelectorAll(".therapist-dots .dot");
    let currentIndex = 0;
    let autoAdvance;

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === currentIndex)
      );
    }

    function goTo(index) {
      currentIndex = (index + cards.length) % cards.length;
      updateSlider();
    }

    function nextSlide() {
      goTo(currentIndex + 1);
    }

    function prevSlide() {
      goTo(currentIndex - 1);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoAdvance();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoAdvance();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goTo(i);
        resetAutoAdvance();
      });
    });

    // Touch & drag
    let startX = 0;
    let isDragging = false;
    let deltaX = 0;

    track.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].pageX;
    });

    track.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      deltaX = e.touches[0].pageX - startX;
    });

    track.addEventListener("touchend", () => {
      isDragging = false;
      if (deltaX < -50) nextSlide();
      else if (deltaX > 50) prevSlide();
      deltaX = 0;
      resetAutoAdvance();
    });

    // Auto-advance every 7 seconds
    function startAutoAdvance() {
      autoAdvance = setInterval(nextSlide, 7000);
    }

    function resetAutoAdvance() {
      clearInterval(autoAdvance);
      startAutoAdvance();
    }

    // Scroll reveal
    const therapistSection = document.querySelector(".therapists-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            therapistSection.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (therapistSection) observer.observe(therapistSection);

    // Init
    updateSlider();
    startAutoAdvance();
  });

  function typeParagraphText(element, rawText, speed = 20) {
    let i = 0;
    const cleanText = rawText.replace(/\s+/g, " ").trim();
    element.innerHTML = "";
    element.style.opacity = 1;

    function type() {
      if (i < cleanText.length) {
        element.innerHTML += cleanText.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const aboutWrapper = document.getElementById("about-wrapper");
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = aboutWrapper.querySelector(".about-section");
          if (section) {
            section.classList.add("visible");
          }

          const pTags = aboutWrapper.querySelectorAll(".about-para");
          pTags.forEach((p, index) => {
            const text = p.getAttribute("data-raw");
            setTimeout(() => {
              typeParagraphText(p, text, 25);
            }, index * 1500);
          });

          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (aboutWrapper) {
    aboutObserver.observe(aboutWrapper);
  }

  const moodSection = document.querySelector(".mood-check-in");
  const moodObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          moodSection.classList.add("revealed");
          moodObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (moodSection) moodObserver.observe(moodSection);

  const journeySection = document.querySelector(".journey-section");
  const journeyScrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          journeySection.classList.add("revealed");
          journeyScrollObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (journeySection) journeyScrollObserver.observe(journeySection);

  const timelineSteps = document.querySelectorAll(".timeline-step");
  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          stepObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  timelineSteps.forEach((step) => {
    stepObserver.observe(step);
  });

  const moodWrapper = document.querySelector(".mood-checkin-wrapper");

  const circleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          moodWrapper.classList.add("revealed");
          circleObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (moodWrapper) circleObserver.observe(moodWrapper);

  document.querySelectorAll(".section-title").forEach((title) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(title);
  });
});
