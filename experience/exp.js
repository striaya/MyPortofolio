
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});



const hiddenElements = document.querySelectorAll("section, .card, .process-step, .tool, .project");

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.transform =
      `perspective(500px) rotateX(${-(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg) scale(1.03)`;

  });



  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(500px) rotateX(0) rotateY(0) scale(1)";

  });

});

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  const scroll = window.scrollY;

  header.style.transform = `translateY(${scroll * 0.3}px)`;

});

document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

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