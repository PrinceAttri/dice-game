//this is for dice 1:
//Math.random() has range 0-0.999
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "dice" + randomNumber1 + ".png";

var randomImgSource1 = "./images/" + randomDiceImg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource1);

//this is for dice 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "./images/" + randomDiceImg2;

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//winning scenarios:
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}