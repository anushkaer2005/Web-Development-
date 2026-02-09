// Day:15

// console.log("loaded");

// // Variables
// let Name = "Anushka";                                        // string
// let Age = 20;                                                // number
// let present = true;                                          // boolean
// let Topics = ["HTML", "CSS"];                                // array
// let subject = {course: "Web Development",level: "two"};      // object               

// // Output
// console.log("Name:", Name);
// console.log("Age:", Age);
// console.log("Present:", present);
// console.log("Topics:", Topics);
// console.log("Subject:", subject);


// Day:16

// function greet(name) {
//   return "Hello, " + name;
// }

// function add(a, b) {
//   return a + b;
// }

// function toFahrenheit(c) {
//   return (c * 9) / 5 + 32;
// }

// // Calling functions
// console.log(greet("Anushka"));
// console.log("Sum:", add(7, 8));
// console.log("Fahrenheit:", toFahrenheit(20));


// Day:17

// Day:17 — Conditionals & Branching Logic

// let ageEnter = prompt("Enter age:");

// let age = Number(ageEnter);

// if (ageEnter === "" || isNaN(age)) {
//   alert("Invalid age");
// } 
// else {
//   if (age < 18) {
//     alert("Minor");
//   } else if (age >= 18 && age <= 60) {
//     alert("Adult");
//   } else {
//     alert("Senior");
//   }
// }


// Day:18

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i = 0; i < 15; i++) {
//   if (num[i] % 3 === 0) {
//     console.log(num[i]);
//   }
// }


// Day:19

// let paragraph = document.querySelector("p");                   // by tag

// let section = document.querySelector(".mt-md");                // by class

// let educationSection = document.getElementById("education");    // by id

// let indexBtn = document.getElementById("indexBtn");                  // by id

// indexBtn.addEventListener("click", function () {
//   paragraph.textContent = "JavaScript!";
//   section.style.backgroundColor = "#0cd59c";
//   educationSection.style.backgroundColor = "#fb205b";
// });


// Day:20

let count = 0;

let countText = document.getElementById("count");
let increaseBt = document.getElementById("increase");
let decreaseBt = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

// Increase
increaseBt.addEventListener("click", function () {
  count++;
  countText.textContent = count;
});

// Decrease
decreaseBt.addEventListener("click", function () {
  if(count>0){
    count--;
    countText.textContent = count;
  }
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
});



