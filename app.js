// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var play = document.getElementById("play-button");

play.addEventListener("click", redirection);

function redirection(){
    window.location.href = "./game.html";
}