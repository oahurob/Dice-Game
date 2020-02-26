var p1 = 1, p2 = 1, p3 = 1,p4 = 1,p5 = 1,p6 = 1;
var p1Score = 0, p2Score = 0, p3Score = 0, p4Score = 0, p5Score = 0, p6Score = 0;

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
    var diceTotal = d1 + d2 + d3 + d4 + d5 + d6;
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
    if(p1 !== 0){
        document.getElementById("p1").innerHTML = "P1";
    }
    if(p2 !== 0){
        document.getElementById("p2").innerHTML = "P2";
    }
    if(p3 !== 0){
        document.getElementById("p3").innerHTML = "P3";
    }
    if(p4 !== 0){
        document.getElementById("p4").innerHTML = "P4";
    }
    if(p5 !== 0){
        document.getElementById("p5").innerHTML = "P5";
    }
    if(p6 !== 0){
        document.getElementById("p6").innerHTML = "P6";
    }
}

function ShowPlayerScore(){
    if(p1 !== 0){
        document.getElementById("p1Score").innerHTML = p1Score;
    }
    if(p2 !== 0){
        document.getElementById("p2Score").innerHTML = p2Score;
    }if(p3 !== 0){
        document.getElementById("p3Score").innerHTML = p3Score;
    }
    if(p4 !== 0){
        document.getElementById("p4Score").innerHTML = p4Score;
    }
    if(p5 !== 0){
        document.getElementById("p5Score").innerHTML = p5Score;
    }
    if(p6 !== 0){
        document.getElementById("p6Score").innerHTML = p6Score;
    }
}