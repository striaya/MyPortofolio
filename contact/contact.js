const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const dropdowns = document.querySelectorAll(".dropdown > a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  dropdowns.forEach(drop => {
    drop.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        drop.parentElement.classList.toggle("active");
      }
    });
  });

    window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function() {

  const reveals = document.querySelectorAll(".contact-info, .contact-form");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const socialLinks = document.querySelectorAll(".social-media a");

  socialLinks.forEach(link => {
    link.addEventListener("click", function() {
      this.style.transform = "scale(0.9)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

});
