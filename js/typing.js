// Day 22
const typingInput = document.getElementById("typingInput");
const output = document.getElementById("output");

if (typingInput && output) {
  typingInput.addEventListener("input", function () {
    output.textContent = typingInput.value;
  });
}


// Day 23
const startBtn = document.getElementById("startBtn");
const timeDisplay = document.getElementById("time");

let time = 60;
typingInput.disabled = true;

if (startBtn && typingInput && timeDisplay) {
  startBtn.addEventListener("click", function () {

    time = 60;
    timeDisplay.textContent = time;
    typingInput.disabled = false;

    const timer = setInterval(function () {
      time--;
      
      if (time < 0) {
        time = 0;
      }
      
      timeDisplay.textContent = time;

      if (time === 0) {
        clearInterval(timer);
        typingInput.disabled = true;
        
        const typedLength = typingInput.value.length;
        len.textContent = "Typed Length: " + typedLength;

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


// Day 24

const bestScoreText = document.getElementById("bestScore");

// Load best score when page loads
let bestScore = localStorage.getItem("bestScore");

if (bestScore === null) {
  bestScore = 0;
  localStorage.setItem("bestScore", bestScore);
}

bestScoreText.textContent = bestScore;
