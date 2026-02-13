// Day-25

const square = document.getElementById("square");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;

function moveSquare() {
  const X = gameArea.clientWidth - 50;
  const Y = gameArea.clientHeight - 50;

  const randomX = Math.floor(Math.random() * X);
  const randomY = Math.floor(Math.random() * Y);

  square.style.left = randomX + "px";
  square.style.top = randomY + "px";
}

square.addEventListener("click", function () {
  score++;
  scoreText.textContent = "Score: " + score;
  moveSquare();
});

moveSquare();
