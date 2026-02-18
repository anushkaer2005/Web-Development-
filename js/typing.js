// Day 22

/* =================================
   LIVE TYPING DISPLAY
================================= */

const typingInput = document.getElementById("typingInput");
const outputText = document.getElementById("output");
const startBtn = document.getElementById("startBtn");
const timeText = document.getElementById("time");
const lengthText = document.getElementById("len");
const bestScoreText = document.getElementById("bestScore");

let time = 60;
let timerInterval;
let bestScore = localStorage.getItem("bestScore") || 0;

if (bestScoreText) {
  bestScoreText.textContent = bestScore;
}

if (typingInput && outputText) {
  typingInput.addEventListener("input", function () {
    outputText.textContent = typingInput.value;
  });
}

/* =================================
   START TIMER
================================= */

if (startBtn && typingInput) {

  typingInput.disabled = true;

  startBtn.addEventListener("click", function () {

    // Reset values
    time = 60;
    typingInput.value = "";
    outputText.textContent = "";
    timeText.textContent = time;
    typingInput.disabled = false;
    typingInput.focus();

    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

      time--;
      timeText.textContent = time;

      if (time <= 0) {
        clearInterval(timerInterval);
        typingInput.disabled = true;

        let typedLength = typingInput.value.length;
        lengthText.textContent = "Typed Length: " + typedLength;

        // Save best score
        if (typedLength > bestScore) {
          bestScore = typedLength;
          localStorage.setItem("bestScore", bestScore);
          bestScoreText.textContent = bestScore;
        }
      }

    }, 1000);

  });
}
