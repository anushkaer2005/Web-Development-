// Day 22
const typingInput = document.getElementById("typingInput");
const output = document.getElementById("output");

if (typingInput && output) {
  typingInput.addEventListener("input", function () {
    output.textContent = typingInput.value;
  });
}
