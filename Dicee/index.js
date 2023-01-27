

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgName1 = "images/dice" + randomNumber1 + ".png";
var imgName2 = "images/dice" + randomNumber2 + ".png";

console.log(imgName1);
console.log(typeof(imgName1));
console.log(document.getElementsByClassName("img1")[0].src);

document.getElementsByClassName("img1")[0].src = imgName1;
document.getElementsByClassName("img2")[0].src = imgName2;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

