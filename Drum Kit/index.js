


function checkChar(x) {
    switch (x) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        default:
            break;
    
    }
}


//button press
/* all objects that have "drum" in the class name :~) */
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrumButtons; i ++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var keyPressed = this.innerHTML;
        checkChar(keyPressed);
        buttonAnimation(keyPressed);
    });
}


//keyboard press
document.addEventListener("keydown", function(event) {
    checkChar(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    
}


/*
EQUIVALENT CODE USING ANONYMOUS/NAMED FUNCTIONS:

document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!");
});

document.querySelector("button").addEventListener("click", handleClick);

    function handleClick(){
        alert("I got clicked!");
    }

*/








