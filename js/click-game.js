// Day- 25 & 26

const square = document.getElementById("square");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let time = 30;
let gameTimer;

// Move square to random position
function moveSquare() {

  let areaWidth = gameArea.clientWidth - 50;
  let areaHeight = gameArea.clientHeight - 50;

  let randomX = Math.random() * areaWidth;
  let randomY = Math.random() * areaHeight;

  square.style.left = randomX + "px";
  square.style.top = randomY + "px";
}

// Start game
function startGame() {

  score = 0;
  time = 30;

  scoreText.textContent = "Score: " + score;
  timerText.textContent = "Time left: " + time + " seconds";

  moveSquare();

  gameTimer = setInterval(function () {

    time--;
    timerText.textContent = "Time left: " + time + " seconds";

    if (time <= 0) {
      clearInterval(gameTimer);
      alert("Game Over! Your score: " + score);
    }

  }, 1000);
}

// Increase score
if (square) {
  square.addEventListener("click", function () {
    score++;
    scoreText.textContent = "Score: " + score;
    moveSquare();
  });
}

if (startBtn) {
  startBtn.addEventListener("click", startGame);
}

if (restartBtn) {
  restartBtn.addEventListener("click", startGame);
}
