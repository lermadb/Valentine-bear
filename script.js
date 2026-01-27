const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const letterText = document.getElementById("letterText");
const restartBtn = document.getElementById("restartBtn");

const messages = [
  "You make my world brighter 💖",
  "I choose you every day 🌷",
  "You’re my favorite person 🧸",
  "You + Me = Perfect ❤️",
  "Forever starts now 💌"
];

letterText.textContent =
  messages[Math.floor(Math.random() * messages.length)];

function moveNoButton() {
  const padding = 6;

  noBtn.style.position = "absolute";
  noBtn.style.zIndex = "10";

  const maxX = buttons.clientWidth - noBtn.offsetWidth - padding;
  const maxY = buttons.clientHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.classList.add("valentine");


  //stop No fromdodging after Yes
    noBtn.removeEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.removeEventListener("click", moveNoButton);
});

//restart button
restartBtn.addEventListener("click", () => {
    //simplest + safest reset
    window.location.reload();
});
