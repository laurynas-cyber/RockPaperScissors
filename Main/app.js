let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const ScoreBoard_div = document.querySelector(".Score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sc_div = document.getElementById("s");
const userLabel_div = document.getElementById("user-label");
const compLabel_div = document.getElementById("computer-label");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converttoword(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  converttoword(user) + " beats " + converttoword(computer) + ". You win!";
}

function loose(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  converttoword(user) + " beats " + converttoword(computer) + ". You win!";
}

function draw(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  converttoword(user) +
    " loses to " +
    converttoword(computer) +
    ". You lost...";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      userLabel_div.style.backgroundColor = "green";
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      userLabel_div.style.backgroundColor = "#e2584d";
      loose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      userLabel_div.style.backgroundColor = "grey";
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "#e2584d";
    game("r");
  });

  paper_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "#e2584d";
    game("p");
  });

  sc_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "#e2584d";
    game("s");
  });
}
main();
