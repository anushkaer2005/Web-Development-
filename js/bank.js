// Get elements
const balanceElement = document.getElementById("balance");
const depositInput = document.getElementById("depositAmount");
const withdrawInput = document.getElementById("withdrawAmount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Store balance as number
let balance = Number(balanceElement.textContent);

// Deposit Logic
depositBtn.addEventListener("click", function () {
    let amount = Number(depositInput.value);

    if (amount > 0) {
        balance = balance + amount;
        balanceElement.textContent = balance;
        depositInput.value = "";
    } else {
        alert("Enter a valid deposit amount");
    }
});

// Withdraw Logic
withdrawBtn.addEventListener("click", function () {
    let amount = Number(withdrawInput.value);

    if (amount <= 0) {
        alert("Enter a valid withdraw amount");
    } 
    else if (amount > balance) {
        alert("Insufficient balance");
    } 
    else {
        balance = balance - amount;
        balanceElement.textContent = balance;
        withdrawInput.value = "";
    }
});
