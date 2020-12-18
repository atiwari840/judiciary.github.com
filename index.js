var player1= prompt("Enter name as player 1.");

document.querySelector("p.p1").innerHTML= player1;

var player2=prompt("Enter name as player 2.");

document.querySelector("p.p2").innerHTML= player2;

var ranNumber1= Math.floor(Math.random()*6)+1;

var ranDiceImage= "dice" + ranNumber1+".png";  //all dice img selected.

var ranImageSource= "img/" + ranDiceImage; //img/dice1.png-img/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", ranImageSource);

var ranNumber2= Math.floor(Math.random()*6)+1;

var ranImageSource2= "img/dice" + ranNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", ranImageSource2);



// If any one wins.
if(ranNumber1 > ranNumber2){
    document.querySelector("h1").innerHTML= player1+" win's"
}
else if(ranNumber2 > ranNumber1){
    document.querySelector("h1").innerHTML= player2+" win's."
} else{
    document.querySelector("h1").innerHTML= "Draw!"
}