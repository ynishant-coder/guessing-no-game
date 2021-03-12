/*document.querySelector(".message ").textContent = "Correct Number!";
//document.querySelector(".number").textContent = 13;

document.querySelector(".check").addEventListener("click", function () {
  document.querySelector(".guess").value = 10;
});
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//document.querySelector(".number").textContent = number;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    //document.querySelector(".message").textContent = "NO Numer!";
    displayMessage("No Number");
  } else if (guess == number) {
    //document.querySelector(".message").textContent = "Correct Number!";
    displayMessage('"Correct Number!"');
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score == 1) {
      //document.querySelector(".message").textContent = "You lost the game!";
      displayMessage('"You lost the game!"');
      score--;
      document.querySelector(".score").textContent = score;
    }
    /* 
  else if ((guess2 > number) & (score > 1)) {
    document.querySelector(".message").textContent = "Too High";
    score--;
    document.querySelector(".score").textContent = score;
  } else if ((guess2 < number) & (score > 1)) {
    document.querySelector(".message").textContent = "Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (score == 1) {
    document.querySelector(".message").textContent = "You lost the game!";
    score--;
    document.querySelector(".score").textContent = score;
  }*/
  }
});
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
});
//console.log(guess2);
