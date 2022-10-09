//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit-btn") {
                checkAnswer();
            } else {
                resetScore();
            }
        })
    } displayRiddle();
})

//Different Riddles
var teapot = {answer : "a teapot", question : "What begins with T ends with T and has T in it?",};
var sponge = {answer :"a sponge", question : "What is full of holes but still holds water?",};
var candle = {answer:"a candle", question : "I'm tall when I'm young, and I'm short when I'm old, what am I?",};

//Selecting random riddle (credit https://stackoverflow.com/questions/65129389/how-can-i-set-a-variable-to-one-of-two-random-options)
var riddles = [teapot, sponge, candle];
var index = Math.floor(Math.random() * riddles.length);
var riddle = riddles[index];

function displayRiddle() {
    document.getElementById("riddle").textContent = riddle.question;
}

function resetRiddle() {
    document.getElementById("answer-box").value = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer-box").value;
    let isCorrect = userAnswer === riddle.answer;

    if (isCorrect) {
        alert("Congratulation, that's correct!");
        incrementScore();
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddle.answer}`)
        resetScore();
    }
}

function incrementScore() {

    let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;

    resetRiddle();
    displayRiddle ();

}

function resetScore() {
    document.getElementById("score").innerText = "0"

    resetRiddle();
    displayRiddle ();
}

function displayImage() {

}

