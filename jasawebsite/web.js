document.addEventListener("DOMContentLoaded", () => {

const hero = document.querySelector(".hero-content");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

setTimeout(() => {

hero.style.transition = "all 1s ease";

hero.style.opacity = "1";

hero.style.transform = "translateY(0)";

}, 200);

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry, index) => {

if(entry.isIntersecting){

setTimeout(() => {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}, index * 200);

}

});

}, {

threshold: 0.2

});



cards.forEach((card) => {

card.style.opacity = "0";

card.style.transform = "translateY(40px)";

card.style.transition = "all 0.8s ease";

observer.observe(card);

});

const contact = document.querySelector(".contact");

const observer2 = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

contact.style.opacity="0";

contact.style.transform="translateY(40px)";

contact.style.transition="1s";

observer2.observe(contact);

const buttons = document.querySelectorAll(".btn, .btn-wa");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

btn.style.transition="0.3s";

});


btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

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