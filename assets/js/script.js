//Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
})

//Teapot riddle
function checkAnswer1() {
    let userAnswer = document.getElementById("answer-box1").value;
    
    if (userAnswer === "teapot") {
        alert("Congratulation, that's correct!");
        changeImage1();
        document.getElementById("image").style.border = "6px solid green";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was teapot`);
        changeImage1();
        document.getElementById("image").style.border = "6px solid red";
    }
}

function changeImage1() {
    document.getElementById("image").src = "./assets/images/pexels-ekaterina-bolovtsova-5849991.jpg";
}

//Sponge riddle
function checkAnswer2() {
    let userAnswer = document.getElementById("answer-box2").value;
    
    if (userAnswer === "sponge") {
        alert("Congratulation, that's correct!");
        changeImage2();
        document.getElementById("image2").style.border = "6px solid green";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was sponge`);
        changeImage2();
        document.getElementById("image2").style.border = "6px solid red";
    }
}

function changeImage2() {
    document.getElementById("image2").src = "./assets/images/pexels-cottonbro-4108680.jpg";
}

//Candle riddle
function checkAnswer3() {
    let userAnswer = document.getElementById("answer-box3").value;
    
    if (userAnswer === "candle") {
        alert("Congratulation, that's correct!");
        changeImage3();
        document.getElementById("image3").style.border = "6px solid green";
    } else {
        alert(`You've answered ${userAnswer}, the correct answer was candle`);
        changeImage3();
        document.getElementById("image3").style.border = "6px solid red";
    }
}

function changeImage3() {
    document.getElementById("image3").src = "./assets/images/pexels-pixabay-278823.jpg";
}



  

    
        


