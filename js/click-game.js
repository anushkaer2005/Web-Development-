// Day- 25 & 26

const square = document.getElementById("square");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let time = 30;
let timer;

// Move the square
function moveSquare() {
  const maxX = gameArea.clientWidth - 50;
  const maxY = gameArea.clientHeight - 50;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  square.style.left = x + "px";
  square.style.top = y + "px";
}

// Start timer
function startGame() {
  timer = setInterval(function () {
    time--;
    timerText.textContent = "Time left: " + time + " seconds";


    if (time === 0) {
      clearInterval(timer);
      square.style.display = "none";
    }
  }, 1000);
}

// Square click
square.addEventListener("click", function () {
  score++;
  scoreText.textContent = "Score: " + score;
  moveSquare();
});

// Start button
startBtn.addEventListener("click", function () {
  square.style.display = "block";
  startGame();
  moveSquare();
});

// Restart button
restartBtn.addEventListener("click", function () {
  clearInterval(timer);

  score = 0;
  time = 30;

  scoreText.textContent = "Score: 0";
  timerText.textContent = "Time left: 30 seconds";


  square.style.display = "block";
});

