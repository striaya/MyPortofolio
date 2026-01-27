const about = document.querySelector(".about");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      about.classList.add("show");
    }
  },
  { threshold: 0.3 }
);

observer.observe(about);

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