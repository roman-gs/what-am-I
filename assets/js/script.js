//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
})

const riddles = [];
riddles[0]=  {answer:"teapot", img:"./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg"};
riddles[1]= {answer:"sponge", img:"./assets/images/pexels-cottonbro-4108680.jpg"};
riddles[2]= {answer:"candle", img:"./assets/images/pexels-pixabay-278823.jpg"};
riddles[3]= {answer:"bank", img:"./assets/images/pexels-erik-mclean-7260887.jpg"};
riddles[4]= {answer:"egg", img:"./assets/images/pexels-pixabay-162712.jpg"};
riddles[5]= {answer:"towel", img:"./assets/images/pexels-karolina-grabowska-4210372.jpg"};
riddles[6]= {answer:"piano", img:"./assets/images/pexels-juan-pablo-serrano-arenas-1246437.jpg"};
riddles[7]= {answer:"towel", img:"./assets/images/pexels-karolina-grabowska-4210372.jpg"};
riddles[8]= {answer:"towel", img:"./assets/images/pexels-karolina-grabowska-4210372.jpg"};

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
    btnDeactivation();
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

function btnDeactivation() { 
        document.getElementById("show-btn").disabled = true;            
    }

//Sponge riddle
function checkAnswerSponge() {
    let userAnswer = document.getElementById("answer-box-sponge").value;
    
    if (userAnswer === riddles[1].answer) {
        alert("Congratulation, that's correct!");
        changeImageSponge();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[1].answer}`);
        changeImageSponge();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageSponge() {
    document.getElementById("image").src = riddles[1].img;
    btnDeactivation()
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

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}
 
//Candle riddle
function checkAnswerCandle() {
    let userAnswer = document.getElementById("answer-box-candle").value;
    
    if (userAnswer === riddles[2].answer) {
        alert("Congratulation, that's correct!");
        changeImageCandle();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[2].answer}`);
        changeImageCandle();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageCandle() {
    document.getElementById("image").src = riddles[2].img;
    btnDeactivation();
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

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}

//Bank riddle
function checkAnswerBank() {
    let userAnswer = document.getElementById("answer-box-bank").value;
    
    if (userAnswer === riddles[3].answer) {
        alert("Congratulation, that's correct!");
        changeImageBank();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[3].answer}`);
        changeImageBank();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageBank() {
    document.getElementById("image").src = riddles[3].img;
    btnDeactivation();
}

function showMeBank() {
    changeImageBank();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationBank() { 
    if(!document.getElementById("answer-box-bank").value.length){
        document.getElementById("submit-btn-bank").disabled = true;            
    }else{
        document.getElementById("submit-btn-bank").disabled = false;

    }           
} 

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}

//Egg riddle
function checkAnswerEgg() {
    let userAnswer = document.getElementById("answer-box-egg").value;
    
    if (userAnswer === riddles[4].answer) {
        alert("Congratulation, that's correct!");
        changeImageEgg();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[4].answer}`);
        changeImageEgg();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageEgg() {
    document.getElementById("image").src = riddles[4].img;
    btnDeactivation();
}

function showMeEgg() {
    changeImageEgg();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationEgg() { 
    if(!document.getElementById("answer-box-egg").value.length){
        document.getElementById("submit-btn-egg").disabled = true;            
    }else{
        document.getElementById("submit-btn-egg").disabled = false;

    }           
} 

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}

//Towel riddle
function checkAnswerTowel() {
    let userAnswer = document.getElementById("answer-box-towel").value;
    
    if (userAnswer === riddles[5].answer) {
        alert("Congratulation, that's correct!");
        changeImageTowel();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[5].answer}`);
        changeImageTowel();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImageTowel() {
    document.getElementById("image").src = riddles[5].img;
    btnDeactivation();
}

function showMeTowel() {
    changeImageTowel();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationTowel() { 
    if(!document.getElementById("answer-box-towel").value.length){
        document.getElementById("submit-btn-towel").disabled = true;            
    }else{
        document.getElementById("submit-btn-towel").disabled = false;

    }           
} 

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}

//Piano riddle
function checkAnswerPiano() {
    let userAnswer = document.getElementById("answer-box-piano").value;
    
    if (userAnswer === riddles[6].answer) {
        alert("Congratulation, that's correct!");
        changeImagePiano();
        document.getElementById("image").style.border = "6px solid green";
        document.getElementById("next").style.color = "green";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was ${riddles[6].answer}`);
        changeImagePiano();
        document.getElementById("image").style.border = "6px solid red";
        document.getElementById("next").style.color = "red";
        document.getElementById("next").style.fontWeight = "bold";
        document.getElementById("next").style.fontSize = "150%";
    }
}

function changeImagePiano() {
    document.getElementById("image").src = riddles[6].img;
    btnDeactivation();
}

function showMePiano() {
    changeImagePiano();
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnActivationPiano() { 
    if(!document.getElementById("answer-box-piano").value.length){
        document.getElementById("submit-btn-piano").disabled = true;            
    }else{
        document.getElementById("submit-btn-piano").disabled = false;

    }           
} 

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}
/* Deactivate button  credit: https://stackoverflow.com/questions/7067005/disable-button-whenever-a-text-field-is-empty-dynamically */






  

    
        


