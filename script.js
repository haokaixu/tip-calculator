const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("numberOfPeople");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function showError(message) {
    result.classList.add("error");
    result.textContent = message;
}

function formatMoney(amount) {
    return amount.toFixed(2);
}

function calculateTip() {
    const billValue = billInput.value.trim();
    const peopleValue = peopleInput.value.trim();
    const bill = Number(billValue);
    const people = Number(peopleValue);
    const tipPercent = Number(tipSelect.value);

    if (billValue === "") {
        showError("Please enter a bill amount.");
        return;
    }

    if (!Number.isFinite(bill)) {
        showError("Please enter a valid bill amount.");
        return;
    }

    if (bill < 0) {
        showError("Bill amount can't be negative.");
        return;
    }

    if (peopleValue === "") {
        showError("Please enter the number of people.");
        return;
    }

    if (!Number.isFinite(people)) {
        showError("Please enter a valid number of people.");
        return;
    }

    if (people <= 0) {
        showError("Number of people must be greater than zero.");
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    result.classList.remove("error");
    result.innerHTML =
        `Tip: $${formatMoney(tipAmount)}<br>` +
        `Total: $${formatMoney(total)}<br>` +
        `Per person: $${formatMoney(perPerson)}`;
}

calculateButton.addEventListener("click", calculateTip);
