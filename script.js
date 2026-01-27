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

  if (skill === "php") {
    title.innerText = "PHP (Hypertext Preprocessor)";
    desc.innerText =
      "PHP (Hypertext Preprocessor) adalah bahasa pemrograman server-side yang digunakan untuk membangun website dan aplikasi web dinamis. PHP berjalan di sisi server untuk mengelola logika aplikasi, memproses data, dan berinteraksi dengan database seperti MySQL. Bahasa ini banyak digunakan dalam pengembangan backend karena sintaksnya relatif mudah dipelajari, fleksibel, serta didukung oleh banyak framework seperti Laravel. PHP sangat cocok untuk pembuatan fitur CRUD, sistem autentikasi, REST API, dan pengelolaan data pada aplikasi web.";
  }

  if (skill === "golang") {
    title.innerText = "Golang (Go)";
    desc.innerText =
      "Golang adalah bahasa pemrograman buatan Google yang fokus pada performa, concurrency, dan kesederhanaan. Sangat cocok untuk backend, REST API, dan sistem berskala besar.";
  }

  detail.style.display = "flex";
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
