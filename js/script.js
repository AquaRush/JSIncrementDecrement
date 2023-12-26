// Variables to target HTML elements
const btnCounter = document.getElementById("counter");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");
let counter = 0;
let interval;

// Decrease counter button
function numDecrease() {
    counter--;
    btnCounter.innerHTML = counter;
}

// Increase counter button
function numIncrease() {
    counter++;
    btnCounter.innerHTML = counter;
}

// Reset counter button
function resetCounter() {
    counter = 0;
    btnCounter.innerHTML = counter;
}

numDecrease();
numIncrease();
resetCounter();


// Decrement on click, Decrement faster on mouse hold, stop Decrementing on mouse release
btnDecrement.addEventListener("click", numDecrease);
btnDecrement.addEventListener("mousedown", function() {
    interval = setInterval(numDecrease, 150);
})
btnDecrement.addEventListener("mouseup", function () {
    clearInterval(interval);
})

// Increment on click, increment faster on mouse hold, stop incrementing on mouse release
btnIncrement.addEventListener("click", numIncrease);
btnIncrement.addEventListener("mousedown", function() {
    interval = setInterval(numIncrease, 150);
})
btnIncrement.addEventListener("mouseup", function () {
    clearInterval(interval);
})

// Reset counter on click
btnReset.addEventListener("click", resetCounter);

