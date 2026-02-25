document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const cards = document.querySelectorAll(".experience-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const result = document.getElementById("result");

  if (input == "") {
    result.textContent = "Masukkan angka dulu!";
    result.style.color = "orange";
    return;
  }

  if (parseInt(input) === randomNumber) {
    result.textContent = " Tebakan kamu benar!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Salah, coba lagi!";
    result.style.color = "red";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "";
}

const container = document.querySelector(".testimonial-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  container.scrollBy({ left: 370, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -370, behavior: "smooth" });
});

const progressBars = document.querySelectorAll(".progress");

function animateProgress() {
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");
    const barTop = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (barTop < screenHeight - 50) {
      bar.style.width = value;
    }
  });
}

window.addEventListener("scroll", animateProgress);
window.addEventListener("load", animateProgress);

function showSkill(skill) {

  const detail = document.getElementById("skillDetail");
  const title = document.getElementById("detailTitle");
  const desc = document.getElementById("detailDesc");


  if (skill === "js") {

    title.innerText = "JavaScript";

    desc.innerText =
      "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif. Dengan JavaScript, developer dapat memanipulasi DOM, mengambil data dari server menggunakan Fetch API atau AJAX, membuat animasi, validasi form, dan membangun aplikasi web modern.";

  }


  if (skill === "php") {

    title.innerText = "PHP (Hypertext Preprocessor)";

    desc.innerText =
      "PHP adalah bahasa pemrograman server-side yang digunakan untuk membangun backend website. PHP dapat mengelola database, membuat sistem login, CRUD, REST API, dan berbagai logika aplikasi web.";

  }


  if (skill === "golang") {

    title.innerText = "Golang (Go)";

    desc.innerText =
      "Golang adalah bahasa pemrograman yang dibuat oleh Google dan digunakan untuk backend, REST API, dan sistem dengan performa tinggi. Golang terkenal cepat, ringan, dan mendukung concurrency.";

  }


  if (skill === "problem") {

    title.innerText = "Problem Solving";

    desc.innerText =
      "Problem solving adalah kemampuan untuk menyelesaikan masalah menggunakan logika pemrograman. Ini termasuk analisis masalah, membuat algoritma, debugging, dan membangun solusi yang efisien.";

  }


  if (skill === "self") {

    title.innerText = "Self Learning";

    desc.innerText =
      "Self learning adalah proses belajar mandiri melalui dokumentasi, tutorial, video, dan praktek langsung. Skill ini penting bagi developer untuk terus berkembang mengikuti teknologi terbaru.";

  }


  detail.style.display = "flex";

}



function closeSkill() {

  document.getElementById("skillDetail").style.display = "none";

}

function closeDetail() {
  document.getElementById("skillDetail").style.display = "none";
}

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

const testimonials = [
  {
    text: "Tetaplah bernafas",
    name: "Fadlan Samir",
    img: "https://img.freepik.com/foto-gratis/matahari-terbit-di-atas-kabut-pagi-di-phu-lang-ka-phayao-di-thailand_335224-803.jpg"
  },
  {
    text: "Keren bangettt wuw",
    name: "Tenka Izumo",
    img: "https://i.pinimg.com/736x/5d/81/f0/5d81f071a8b36548fccc06f5868463b5.jpg"
  },
  {
    text: "Semangat lagi belajarnya",
    name: "Jinyo Cristian",
    img: "https://www.shutterstock.com/image-vector/cool-orange-cat-pose-pixel-600nw-2629802583.jpg"
  },

];

testimonials.forEach(testi => {
  container.innerHTML += `
    <div class="testimonial-card">
      <p>"${testi.text}"</p>
      <div class="testimonial-user">
        <img src="${testi.img}" />
        <span>${testi.name}</span>
      </div>
    </div>
  `;
});