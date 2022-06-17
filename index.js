var randomNum = Math.floor(Math.random()*6)+1;

var imageSource = "images/dice" + randomNum + ".png";

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src",imageSource);

var randomNum2 = Math.floor(Math.random()*6)+1;

var imageSource01 = "images/dice" + randomNum2 + ".png";

dice02 = document.querySelectorAll("img")[1];

dice02.setAttribute("src",imageSource01);

if(randomNum>randomNum2)
{
    document.querySelector("h1").innerHTML="Player01 has won!";
}
else if(randomNum<randomNum2)
{
    document.querySelector("h1").innerHTML="Player02 has won!";
}
else{
    document.querySelector("h1").innerHTML="Its a draw!";
}