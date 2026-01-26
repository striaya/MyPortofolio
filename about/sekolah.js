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
