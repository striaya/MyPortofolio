  const reveal = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveal.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) {
        el.classList.add("active");
      }
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