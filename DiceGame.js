var players = ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10"];
var playerScore = [1,1,1,1,1,1,1,1,1,1]
var diceTotal = 0;
function StartGame(){
    ShowPlayers()
    ShowPlayerScore()
}

function DiceRoll(){
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice3 = document.getElementById("dice3");
    var dice4 = document.getElementById("dice4");
    var dice5 = document.getElementById("dice5");
    var dice6 = document.getElementById("dice6");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 4) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 8) + 1;
    var d4 = Math.floor(Math.random() * 10) + 1;
    var d5 = Math.floor(Math.random() * 12) + 1;
    var d6 = Math.floor(Math.random() * 20) + 1;
    diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;
    dice3.innerHTML = d3;
    dice4.innerHTML = d4;
    dice5.innerHTML = d5;
    dice6.innerHTML = d6;
    status.innerHTML = "You rolled: " + diceTotal + "!";
    if(d1 === d2 && d1 === d3 && d1 === d4 && d1 === d5 && d1 === d6){
        status.innerHTML += " AWESOME!";
    }
}

function ShowPlayers(){
    if(playerScore[0] !== 0){
        document.getElementById("p1").innerHTML = players[0];
    }
    if(playerScore[1] !== 0){
        document.getElementById("p2").innerHTML = players[1];
    }
    if(playerScore[2] !== 0){
        document.getElementById("p3").innerHTML = players[2];
    }
    if(playerScore[3] !== 0){
        document.getElementById("p4").innerHTML = players[3];
    }
    if(playerScore[4] !== 0){
        document.getElementById("p5").innerHTML = players[4];
    }
    if(playerScore[5] !== 0){
        document.getElementById("p6").innerHTML = players[5];
    }
    if(playerScore[6] !== 0){
        document.getElementById("p7").innerHTML = players[6];
    }
    if(playerScore[7] !== 0){
        document.getElementById("p8").innerHTML = players[7];
    }
    if(playerScore[8] !== 0){
        document.getElementById("p9").innerHTML = players[8];
    }
    if(playerScore[9] !== 0){
        document.getElementById("p10").innerHTML = players[9];
    }
}

function ShowPlayerScore(){
    if(playerScore[0] !== 0){
        document.getElementById("p1Score").innerHTML = " ";
    }
    if(playerScore[1] !== 0){
        document.getElementById("p2Score").innerHTML = " ";
    }
    if(playerScore[2] !== 0){
        document.getElementById("p3Score").innerHTML = " ";
    }
    if(playerScore[3] !== 0){
        document.getElementById("p4Score").innerHTML = " ";
    }
    if(playerScore[4] !== 0){
        document.getElementById("p5Score").innerHTML = " ";
    }
    if(playerScore[5] !== 0){
        document.getElementById("p6Score").innerHTML = " ";
    }
    if(playerScore[6] !== 0){
        document.getElementById("p7Score").innerHTML = " ";
    }
    if(playerScore[7] !== 0){
        document.getElementById("p8Score").innerHTML = " ";
    }
    if(playerScore[8] !== 0){
        document.getElementById("p9Score").innerHTML = " ";
    }
    if(playerScore[9] !== 0){
        document.getElementById("p10Score").innerHTML = " ";
    }
}

function SetPlayersScoreOnRoll(){
    for(let i = 0; i < players.length; i++){
        DiceRoll()
        playerScore[i] = diceTotal;
        document.getElementById("p1Score").innerHTML = playerScore[0];
        document.getElementById("p2Score").innerHTML = playerScore[1];
        document.getElementById("p3Score").innerHTML = playerScore[2];
        document.getElementById("p4Score").innerHTML = playerScore[3];
        document.getElementById("p5Score").innerHTML = playerScore[4];
        document.getElementById("p6Score").innerHTML = playerScore[5];
        document.getElementById("p7Score").innerHTML = playerScore[6];
        document.getElementById("p8Score").innerHTML = playerScore[7];
        document.getElementById("p9Score").innerHTML = playerScore[8];
        document.getElementById("p10Score").innerHTML = playerScore[9];
    }
}