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

if (startBtn && typingInput && timeDisplay) {
  startBtn.addEventListener("click", function () {

    time = 60;
    timeDisplay.textContent = time;
    typingInput.disabled = false;

    const timer = setInterval(function () {
      time--;
      timeDisplay.textContent = time;

      if (time === 0) {
        clearInterval(timer);
        typingInput.disabled = true;
        result.textContent ="Final Typed Length: " + typingInput.value.length;
      }
    }, 1000);
  });
}
