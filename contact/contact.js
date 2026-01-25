window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    setTimeout(() => {
      el.classList.add("active");
    }, 200);
  });
});
