//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
})

const riddles = [];
riddles[0]=  {answer:"teapot", img:"./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg"};
riddles[1]= {answer:"teapot", img:"./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg"};
riddles[2]= {answer:"teapot", img:"./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg"};

//Teapot riddle
function checkAnswerTeapot() {
    let userAnswer = document.getElementById("answer-box-teapot").value;
    
    if (userAnswer === riddles[0].answer) {
        alert("Congratulation, that's correct!");
        changeImageTeapot();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[0].answer}`);
        changeImageTeapot();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageTeapot() {
    document.getElementById("image").src = riddles[0].img;
    btnDeactivationTeapot();
}

function showMeTeapot() {
    changeImageTeapot();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationTeapot() { 
    if(!document.getElementById("answer-box-teapot").value.length){
        document.getElementById("submit-btn-teapot").disabled = true;            
    }else{
        document.getElementById("submit-btn-teapot").disabled = false;

    }           
} 

function btnDeactivationTeapot() { 
        document.getElementById("show-btn-teapot").disabled = true;            
    }

//Sponge riddle
function checkAnswerSponge() {
    let userAnswer = document.getElementById("answer-box-sponge").value;
    
    if (userAnswer === "sponge") {
        alert("Congratulation, that's correct!");
        changeImageSponge();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was sponge`);
        changeImageSponge();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageSponge() {
    document.getElementById("image").src = "./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg";
}

function showMeSponge() {
    changeImageSponge();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationSponge() { 
    if(!document.getElementById("answer-box-sponge").value.length){
        document.getElementById("submit-btn-sponge").disabled = true;            
    }else{
        document.getElementById("submit-btn-sponge").disabled = false;

    }           
} 
//Candle riddle
function checkAnswerCandle() {
    let userAnswer = document.getElementById("answer-box-candle").value;
    
    if (userAnswer === "candle") {
        alert("Congratulation, that's correct!");
        changeImageCandle();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was candle`);
        changeImageCandle();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageCandle() {
    document.getElementById("image").src = "./assets/images/pexels-pixabay-278823.jpg";
}

function showMeCandle() {
    changeImageCandle();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationCandle() { 
    if(!document.getElementById("answer-box-candle").value.length){
        document.getElementById("submit-btn-candle").disabled = true;            
    }else{
        document.getElementById("submit-btn-candle").disabled = false;

    }           
} 

/* Deactivate button  credit: https://stackoverflow.com/questions/7067005/disable-button-whenever-a-text-field-is-empty-dynamically */






  

    
        


