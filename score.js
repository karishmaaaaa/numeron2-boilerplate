// Iteration 8: Making scoreboard functional

var score = localStorage.getItem("totalscore")
var score_board = document.getElementById("score-board");
score_board.innerHTML = score;
var playAgainButton = document.getElementById("play-again-button");
playAgainButton.onclick = () => {
    console.log("check")
  location.href = "./game.html";
};