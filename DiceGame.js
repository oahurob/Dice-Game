var player = {
    name: "P",
    score: 0
}

var players = [];
var diceTotal = 0;
var round = 1;
var count = 0;
var x = 9;
var y = 8;

for(let i = 1; i < 11; i++){
    var playerMade = Object.create(player);
    playerMade.name += i;
    playerMade.score = 0;
    players.push(playerMade);
}

function StartGame(){
    ShowPlayers()
    ShowPlayerScore()
}

function ShowPlayers(){
    for(let i = 0; i < players.length; i++){
        document.getElementById("P" + i).innerHTML = players[i].name;
    }
}

function ShowPlayerScore(){
    for(let i = 0; i < players.length; i++){
        document.getElementById("P" + i + "Score").innerHTML = players[i].score;
    }
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
    if(d1 === d2 && d1 === d3 && d1 === d4 && d1 === d5 && d1 === d6){
        status.innerHTML += " AWESOME!";
    }
}

function SetPlayerScore(){
    for(let i = 0; i < players.length; i++){
        DiceRoll();
        players[i].score = diceTotal;
        document.getElementById("P" + i + "Score").innerHTML = players[i].score;
    }
}

function NextRound(){
    if(players.length == 2 && round == 5){
        LastRound();
        players.pop();
        document.getElementById("P2").innerHTML = "W";
        document.getElementById("P3").innerHTML = "i";
        document.getElementById("P4").innerHTML = "n";
        document.getElementById("P5").innerHTML = "n";
        document.getElementById("P6").innerHTML = "e";
        document.getElementById("P7").innerHTML = "r";
        document.getElementById("P4Score").innerHTML = players[0].name;
    }else{
        RemoveLowestTwo();
    }
    HideNamesAndScores();
    for(let i = 0; i < players.length; i++){
        players[i].score = 0;
        ShowPlayers();
        ShowPlayerScore();
        if(players.length > 2){
            document.getElementById("dice1").innerHTML = " ";
            document.getElementById("dice2").innerHTML = " ";
            document.getElementById("dice3").innerHTML = " ";
            document.getElementById("dice4").innerHTML = " ";
            document.getElementById("dice5").innerHTML = " ";
            document.getElementById("dice6").innerHTML = " ";
        }
    }
    round++;
    document.getElementById("status").innerHTML = "Round " + round;
}

function RemoveLowestTwo(){
    players.sort(function(a, b){return b.score - a.score});
    var one = players.length - 1;
    var two = players.length - 2;
    var oneName = players[one].name;
    var twoName = players[two].name;
        
    alert("These Players were removed!:" + oneName + " " + twoName);

    players.pop();
    players.pop();
    if(players.length < 2){
        ResetGame();
    }
}

function HideNamesAndScores(){
    switch(round){
        case 1:
            document.getElementById("P9").innerHTML = " ";
            document.getElementById("P9Score").innerHTML = " ";
            document.getElementById("P8").innerHTML = " ";
            document.getElementById("P8Score").innerHTML = " ";
        break;
        case 2:
            document.getElementById("P7").innerHTML = " ";
            document.getElementById("P7Score").innerHTML = " ";
            document.getElementById("P6").innerHTML = " ";
            document.getElementById("P6Score").innerHTML = " ";
        break;
        case 3:
            document.getElementById("P5").innerHTML = " ";
            document.getElementById("P5Score").innerHTML = " ";
            document.getElementById("P4").innerHTML = " ";
            document.getElementById("P4Score").innerHTML = " ";
        break;
        case 4:
            document.getElementById("P3").innerHTML = " ";
            document.getElementById("P3Score").innerHTML = " ";
            document.getElementById("P2").innerHTML = " ";
            document.getElementById("P2Score").innerHTML = " ";
        break;
        case 5:
            document.getElementById("P1").innerHTML = " ";
            document.getElementById("P1Score").innerHTML = " ";
        break;
        case 6:
            ResetGame();
        break;
    }
}

function LastRound(){
        if(players[0].score > players[1].score){
            alert(players[0].name + " Wins!");
            alert("Please Refresh The Page!");
        }else if(players[1].score > players[0].score){
            alert(players[1].name + " Wins!");
            alert("Please Refresh The Page!");
        }else if(players[0].score == players[1].score){
            alert("Tie! Roll Again!");
        }
}

function ResetGame(){
    players = [];
    for(let i = 1; i < 11; i++){
        var playerMade = Object.create(player);
        playerMade.name += i;
        playerMade.score = 0;
        players.push(playerMade);
    }
    for(let i = 0; i < players.length; i++){
        document.getElementById("P" + i).innerHTML = players[i].name;
        document.getElementById("P" + i + "Score").innerHTML = players.score;
    }
    diceTotal = 0;
    round = 0;
    count = 0;
}



