
var wins = 0;
var losses = 0;
var targetScore;
var buttonOne;
var buttonTwo ;
var buttonThree ;
var buttonFour; 

var currentScore = 0;


function initalizeGame(){
    targetScore = Math.floor(Math.random() * 120) + 19;
    buttonOne =  Math.floor(Math.random() * 12) + 1;
    buttonTwo = Math.floor(Math.random() * 12) + 1;
    buttonThree = Math.floor(Math.random() * 12) + 1;
    buttonFour = Math.floor(Math.random() * 12) + 1;
    
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#randomNumber").html(targetScore)
    $("#totalScore").html(currentScore);

    

    //Im pretty close, but im failing to find a way to assign the variables to HTML elements, if i can do that im pretty sure the program is good to go.
}

initalizeGame();

function checkScore(currentScore) {

if (targetScore === currentScore){
    window.alert("You win!");
    wins++;
    initalizeGame();
    }
else if (targetScore < currentScore){
    window.alert("You lose");
    losses++;
    initalizeGame();
    }     
}
$(".button").on("click", function() {
    currentScore += $(this).val();
    $("#totalScore").html(currentScore);
    checkScore();
    console.log(currentScore);
});

   