


//Crystal Variables
var crystal = {
    blue:{
        name: "blue",
        value:  0
    },
    
    red:{
        name: "red",
        value:  0
    },

    purple:{
        name: "purple",
        value:  0
    },

    yellow: {
        name: "yellow",
        value:  0
    },
};

//Scores (current and target)
var currentScore = 0;
var targetScore  = 0;

//Wins and Losses
var winCount     = 0;
var lossCount    = 0;



//Functions

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
var startGame = function(){
//reset the current score
     currentScore = 0;
//set a new target score (between 19 and 120)
    targetScore = getRandom(19, 120);

//set different values for each of the crystals (between 1 and 12)
crystal.blue.value  = getRandom(1,12);
crystal.red.value   = getRandom(1,12);
crystal.purple.value= getRandom(1,12);
crystal.yellow.value= getRandom(1,12);

//change the html to reflect all of these changes.
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);




console.log("--------------------")
console.log("Target score: " + targetScore);
console.log("blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | purple: " + crystal.purple.value + " | yellow: " + crystal.yellow.value);
}

//Clicks on the crystal
var addValues = function(crystal){

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    userWin();

    console.log("Your Score: " + currentScore);

}

//user won or lost and reset the game
var userWin = function() {
    //current score is larger than target score
    if(currentScore > targetScore) {
        alert("you lose");
        console.log("you lose");
        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();
    }
    else if(currentScore === targetScore){
        alert("congrats");
        winCount++;
        $("#winCount").html(winCount);

        startGame();



    }

}




//start game
startGame();

//Main Process
$("#blue").click(function() {
    addValues(crystal.blue);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#purple").click(function() {
    addValues(crystal.purple);
});

$("#yellow").click(function() {
    addValues(crystal.yellow);
});


