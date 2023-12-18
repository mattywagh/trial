var player1Wins = 0;
var player2Wins = 0;

function rollDice() {
    var randomnumber1 = Math.floor(Math.random()*6)+ 1;
    var randomDice1 = "./images/dice"+randomnumber1+".png";

    var randomnumber2 = Math.floor(Math.random()*6)+ 1;
    var randomDice2 = "./images/dice"+randomnumber2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
    document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

    if (randomnumber1 > randomnumber2){
        document.querySelectorAll("h2")[0].innerHTML = "Player 1 won";
        player1Wins++;
    }

    else if (randomnumber2 > randomnumber1){
        document.querySelectorAll("h2")[0].innerHTML = "Player 2 won";
        player2Wins++
    }

    else {document.querySelectorAll("h2")[0].innerHTML = "Game is tied";}

    document.getElementById("player1Wins").innerText = "Player 1 Wins: " + player1Wins;
    document.getElementById("player2Wins").innerText = "Player 2 Wins: " + player2Wins;
}

document.querySelector(".roll").addEventListener("click", rollDice);


