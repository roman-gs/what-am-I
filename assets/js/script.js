//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit-btn") {
                checkAnswer();
            }
        })
    } displayRiddle();
})

//Variable
var teapot = {answer : "a teapot", question : "What begins with T ends with T and has T in it?",};
var sponge = {answer :"a sponge", question : "What is full of holes but still holds water?",};
var candle = {answer:"a candle", question : "I'm tall when I'm young, and I'm short when I'm old, what am I?",};

var riddle = getRandom(teapot, sponge, candle);

//Functions
function getRandom(...arr) {
    return arr[Math.floor(Math.random() * arr.length)];
} //Credit https://www.sololearn.com/compiler-playground/Wp0hZIF2Cw84/?ref=app

function displayRiddle() {
    document.getElementById("riddle").textContent = riddle.question;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer-box").value;
    let isCorrect = userAnswer === riddle.answer;

    if (isCorrect) {
        alert("Congratulation, that's correct!");
    } else {
        alert(`The correct answer was ${riddle.answer}`)
    }

    getRandom ();
    displayRiddle();
}

function incrementScore() {

}

function displayImage() {

}

