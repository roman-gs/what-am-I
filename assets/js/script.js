//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit-btn") {
                alert("You clicked Submit!");
            } else {
                let buttonType = this.getAttribute("data-type");
                alert(`You clicked ${buttonType}`);
            }
        })
    } displayRiddle();
})

//Functions
function getRandom(...arr) {
    return arr[Math.floor(Math.random() * arr.length)];
} //Credit https://www.sololearn.com/compiler-playground/Wp0hZIF2Cw84/?ref=app

let teapot = {answer : "a teapot", question : "What begins with T ends with T and has T in it?",};
let sponge = {answer :"a sponge", question : "What is full of holes but still holds water?",};
let candle = {answer:"a candle", question : "I'm tall when I'm young, and I'm short when I'm old, what am I?",};

function displayRiddle() {
    let riddle = getRandom(teapot, sponge, candle);

    document.getElementById("riddle").textContent = riddle.question

}

function checkAnswer() {

}

function incrementScore() {

}

function displayImage() {

}