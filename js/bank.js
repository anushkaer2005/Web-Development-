// Day-28

const balanceText = document.getElementById("balance");
const depositInput = document.getElementById("depositAmount");
const withdrawInput = document.getElementById("withdrawAmount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

let balance = 1000;

// Deposit
if (depositBtn) {
    depositBtn.addEventListener("click", function () {
        let amount = Number(depositInput.value);
        if (amount > 0) {
            balance += amount;
            balanceText.textContent = balance;
            depositInput.value = "";
        } else {
            alert("Enter valid deposit amount");
        }
    });
}

// Withdraw
if (withdrawBtn) {
    withdrawBtn.addEventListener("click", function () {
        let amount = Number(withdrawInput.value);
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            balanceText.textContent = balance;
            withdrawInput.value = "";
        } else {
            alert("Invalid withdraw amount");
        }
    });
}
