var userClickedPattern = [];
var gamePattern = [];
var level = 0;

//determines the next random color block to be pressed in the sequence
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColor = buttonColors[randomNumber];
    level = level + 1;
    $("h1").text("Level " + level);
    return randomChosenColor;
}

//audio handling for each color block
function playSound(name) {
    switch (name) {
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        default:
            break;

    }
}

function listEquality(uP, gP) {
    for (var i = 0; i < level; i++) {
        if (uP[i] != gP[i]) {
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            return false;

        }
    }
    return true;
}

//checks the user sequence against the actual sequence to ensure correctness
function checkAnswer(currentLevel) {
    if (userClickedPattern.length === gamePattern.length) {
        console.log("user from checkAnswer: " + userClickedPattern);
        console.log("game from checkAnswer: " + gamePattern);
        if (listEquality(userClickedPattern, gamePattern)) {
            setTimeout(function () {
                var nextSeq = nextSequence();
                gamePattern.push(nextSeq);
                $("#" + nextSeq).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            }, 1000);
            userClickedPattern = [];
            console.log(userClickedPattern);
        }
        else {
            $("h1").text("You Lost! Press 'a' to restart.");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            level = 0;
            gamePattern = [];
            userClickedPattern = [];
        }
    }


}

$(".btn").click(function () {
    var clicked = $(this);

    playSound(clicked[0].id);

    clicked.addClass("pressed");
    setTimeout(function () {
        clicked.removeClass("pressed");
    }, 100);

    var userChosenColor = clicked[0].id;
    userClickedPattern.push(userChosenColor);

    checkAnswer(level);
});

//upon pressing the letter 'a' key, the game begins
$(document).keypress(function (key) {
    if (String.fromCharCode(key.which) === 'a') {
        $("h1").text("Level 0");
        var nextSeq = nextSequence();
        gamePattern.push(nextSeq);
        $("#" + nextSeq).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
});




