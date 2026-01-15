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
