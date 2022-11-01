//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {

    displayRiddle();
})

//Different Riddles
var teapot = {answer : "a teapot", question : "What begins with T ends with T and has T in it?", imgSource : "./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg",};
var sponge = {answer :"a sponge", question : "What is full of holes but still holds water?", imgSource : "./assets/images/pexels-cottonbro-4108680.jpg",};
var candle = {answer:"a candle", question : "I'm tall when I'm young, and I'm short when I'm old, what am I?", imgSource : "./assets/images/pexels-pixabay-278823.jpg",};

//Selecting random riddle (credit https://stackoverflow.com/questions/65129389/how-can-i-set-a-variable-to-one-of-two-random-options)
var riddles = [teapot, sponge, candle];
var index = Math.floor(Math.random() * riddles.length);
var riddle = riddles[index];

function displayRiddle() {
    document.getElementById("riddle").textContent = riddle.question;
}

function checkAnswer() {

    let userAnswer = document.getElementById("answer-box").value;
    let isCorrect = userAnswer === riddle.answer;

    if (isCorrect) {
        alert("Congratulation, that's correct!");
        incrementScore();
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddle.answer}`);
        resetScore();
    }
}

function incrementScore() {

    let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;
}

function resetScore() {
    document.getElementById("score").innerText = "0"
    nextQuestion();
}

// Credit: https://stackoverflow.com/questions/6764961/change-an-image-with-onclick
function changeImage() {
        document.getElementById("image").src = riddle.imgSource;
        resetScore();
}

function nextQuestion() {
    document.getElementById("riddle").textContent = "";
    document.getElementById("answer-box").value = "";
    document.getElementById("riddle").textContent = riddle.question++;
}
  

    
        


