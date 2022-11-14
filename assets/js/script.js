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
riddles[7]= {answer:"staircase", img:"./assets/images/pexels-cosmin-paduraru-340981.jpg"};
riddles[8]= {answer:"fence", img:"./assets/images/pexels-merilin-kirsika-tedder-635405.jpg"};

//Teapot riddle
function checkAnswerTeapot() {
    let userAnswer = document.getElementById("answer-box-teapot").value;
    
    if (userAnswer === riddles[0].answer) {
        correct();
        changeImageTeapot();
        borderGreen();
    } else {
        incorrectTeapot();
        changeImageTeapot();
        borderRed();
    }
}

function changeImageTeapot() {
    document.getElementById("image").src = riddles[0].img;
    btnDeactivation();
}

function showMeTeapot() {
    changeImageTeapot();
    borderRed();
}

function btnActivationTeapot() { 
    if(!document.getElementById("answer-box-teapot").value.length){
        document.getElementById("submit-btn-teapot").disabled = true;            
    }else{
        document.getElementById("submit-btn-teapot").disabled = false;

    }           
} 

function incorrectTeapot() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was teapot!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}


//Sponge riddle
function checkAnswerSponge() {
    let userAnswer = document.getElementById("answer-box-sponge").value;
    
    if (userAnswer === riddles[1].answer) {
        correct();
        changeImageSponge();
        borderGreen();
    } else {
        incorrectSponge();
        changeImageSponge();
        borderRed();
    }
}

function changeImageSponge() {
    document.getElementById("image").src = riddles[1].img;
    btnDeactivation()
}

function showMeSponge() {
    changeImageSponge();
    borderRed();
}

function btnActivationSponge() { 
    if(!document.getElementById("answer-box-sponge").value.length){
        document.getElementById("submit-btn-sponge").disabled = true;            
    }else{
        document.getElementById("submit-btn-sponge").disabled = false;
    }  
}

function incorrectSponge() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was sponge!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

 
//Candle riddle
function checkAnswerCandle() {
    let userAnswer = document.getElementById("answer-box-candle").value;
    
    if (userAnswer === riddles[2].answer) {
        correct();
        changeImageCandle();
        borderGreen();
    } else {
        incorrectCandle();
        changeImageCandle();
        borderRed();
    }
}

function changeImageCandle() {
    document.getElementById("image").src = riddles[2].img;
    btnDeactivation();
}

function showMeCandle() {
    changeImageCandle();
    borderRed();
}

function btnActivationCandle() { 
    if(!document.getElementById("answer-box-candle").value.length){
        document.getElementById("submit-btn-candle").disabled = true;            
    }else{
        document.getElementById("submit-btn-candle").disabled = false;
    }           
} 

function incorrectCandle() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was candle!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

//Bank riddle
function checkAnswerBank() {
    let userAnswer = document.getElementById("answer-box-bank").value;
    
    if (userAnswer === riddles[3].answer) {
        correct();
        changeImageBank();
        borderGreen();
    } else {
        incorrectBank();
        changeImageBank();
        borderRed();
    }
}

function changeImageBank() {
    document.getElementById("image").src = riddles[3].img;
    btnDeactivation();
}

function showMeBank() {
    changeImageBank();
    borderRed();
}

function btnActivationBank() { 
    if(!document.getElementById("answer-box-bank").value.length){
        document.getElementById("submit-btn-bank").disabled = true;            
    }else{
        document.getElementById("submit-btn-bank").disabled = false;
    }           
} 

function incorrectBank() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was bank!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

//Egg riddle
function checkAnswerEgg() {
    let userAnswer = document.getElementById("answer-box-egg").value;
    
    if (userAnswer === riddles[4].answer) {
        correct();
        changeImageEgg();
        borderGreen();
    } else {
        incorrectEgg();
        changeImageEgg();
        borderRed();
    }
}

function changeImageEgg() {
    document.getElementById("image").src = riddles[4].img;
    btnDeactivation();
}

function showMeEgg() {
    changeImageEgg();
    borderRed();
}

function btnActivationEgg() { 
    if(!document.getElementById("answer-box-egg").value.length){
        document.getElementById("submit-btn-egg").disabled = true;            
    }else{
        document.getElementById("submit-btn-egg").disabled = false;
    }           
} 

function incorrectEgg() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was egg!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}


//Towel riddle
function checkAnswerTowel() {
    let userAnswer = document.getElementById("answer-box-towel").value;
    
    if (userAnswer === riddles[5].answer) {
        correct();
        changeImageTowel();
        borderGreen ();
    } else {
        incorrectTowel();
        changeImageTowel();
        borderRed ();
    }
}

function changeImageTowel() {
    document.getElementById("image").src = riddles[5].img;
    btnDeactivation();
}

function showMeTowel() {
    changeImageTowel();
    borderRed ();
}

function btnActivationTowel() { 
    if(!document.getElementById("answer-box-towel").value.length){
        document.getElementById("submit-btn-towel").disabled = true;            
    }else{
        document.getElementById("submit-btn-towel").disabled = false;
    }           
} 

function incorrectTowel() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was towel!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

//Piano riddle
function checkAnswerPiano() {
    let userAnswer = document.getElementById("answer-box-piano").value;
    
    if (userAnswer === riddles[6].answer) {
        correct();
        changeImagePiano();
        borderGreen();
    } else {
        incorrectPiano();
        changeImagePiano();
        borderRed();
    }
}

function changeImagePiano() {
    document.getElementById("image").src = riddles[6].img;
    btnDeactivation();
}

function showMePiano() {
    changeImagePiano();
    borderRed();
}

function btnActivationPiano() { 
    if(!document.getElementById("answer-box-piano").value.length){
        document.getElementById("submit-btn-piano").disabled = true;            
    }else{
        document.getElementById("submit-btn-piano").disabled = false;
    }           
} 

function incorrectPiano() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was piano!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

//Staircase riddle
function checkAnswerStaircase() {
    let userAnswer = document.getElementById("answer-box-staircase").value;
    
    if (userAnswer === riddles[7].answer) {
        correct();
        changeImageStaircase();
        borderGreen();
    } else {
        incorrectStaircase();
        changeImageStaircase();
        borderRed();
    }
}

function changeImageStaircase() {
    document.getElementById("image").src = riddles[7].img;
    btnDeactivation();
}

function showMeStaircase() {
    changeImageStaircase();
    borderRed();
}

function btnActivationStaircase() { 
    if(!document.getElementById("answer-box-staircase").value.length){
        document.getElementById("submit-btn-staircase").disabled = true;            
    }else{
        document.getElementById("submit-btn-staircase").disabled = false;
    }           
} 

function incorrectStaircase() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was staircase!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

//Fence riddle
function checkAnswerFence() {
    let userAnswer = document.getElementById("answer-box-fence").value;
    
    if (userAnswer === riddles[8].answer) {
        correct();
        changeImageFence();
        borderGreen();
    } else {
        incorrectFence();
        changeImageFence();
        borderRed();
    }
}

function changeImageFence() {
    document.getElementById("image").src = riddles[8].img;
    btnDeactivation();
}

function showMeFence() {
    changeImageFence();
    borderRed();
}

function btnActivationFence() { 
    if(!document.getElementById("answer-box-fence").value.length){
        document.getElementById("submit-btn-fence").disabled = true;            
    }else{
        document.getElementById("submit-btn-fence").disabled = false;
    }           
} 

function incorrectFence() {
    document.getElementById("answer").innerHTML = "Good idea but the correct answer was fence!"
    document.getElementById("answer").style.color = "red";
    document.getElementById("answer").style.fontWeight = "bold";
}

/* Deactivate button  credit: https://stackoverflow.com/questions/7067005/disable-button-whenever-a-text-field-is-empty-dynamically */

function borderGreen() {
    document.getElementById("image").style.border = "6px solid green";
    document.getElementById("next").style.color = "green";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function borderRed() {
    document.getElementById("image").style.border = "6px solid red";
    document.getElementById("next").style.color = "red";
    document.getElementById("next").style.fontWeight = "bold";
    document.getElementById("next").style.fontSize = "150%";
}

function btnDeactivation() { 
    document.getElementById("show-btn").disabled = true;            
}

function correct() {
    document.getElementById("answer").innerHTML = "Correct!"
    document.getElementById("answer").style.color = "green";
    document.getElementById("answer").style.fontWeight = "bold";
}





  

    
        


