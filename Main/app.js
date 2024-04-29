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
const reset_div = document.querySelector(".reset");

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
  const userChoiceDiv = document.getElementById(user);
  userLabel_div.style.backgroundColor = "green";
  const smallUserword = "user".sub(); //kodel neveikia?
  result_p.innerText =
    converttoword(user) + " beats " + converttoword(computer) + ". You win!";
  userChoiceDiv.classList.add("green-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("green-glow");
  }, 300);
}

function loose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const userChoiceDiv = document.getElementById(user);
  compLabel_div.style.backgroundColor = "green";

  result_p.innerText =
    converttoword(user) +
    " loses to " +
    converttoword(computer) +
    ". You lost...!";
  userChoiceDiv.classList.add("red-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("red-glow");
  }, 300);
}

function draw(user, computer) {
  const userChoiceDiv = document.getElementById(user);
  userLabel_div.style.backgroundColor = "grey";
  compLabel_div.style.backgroundColor = "grey";
  result_p.innerText =
    converttoword(user) +
    " equals to " +
    converttoword(computer) +
    ". It is draw!";
  userChoiceDiv.classList.add("gray-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      loose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function red() {
  userLabel_div.style.backgroundColor = "red";
  compLabel_div.style.backgroundColor = "red";
}

function reset() {
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  computerScore = 0;
  userScore = 0;
  userLabel_div.style.backgroundColor = "#e2584d";
  compLabel_div.style.backgroundColor = "#e2584d";
}

function main() {
  rock_div.addEventListener("click", function () {
    red();
    game("r");
  });

  paper_div.addEventListener("click", function () {
    red();
    game("p");
  });

  sc_div.addEventListener("click", function () {
    red();
    game("s");
  });

  reset_div.addEventListener("click", function () {
    reset();

    paper_div.classList.add("reset-glow");
    rock_div.classList.add("reset-glow");
    sc_div.classList.add("reset-glow");
    setTimeout(function () {
      paper_div.classList.remove("reset-glow");
      rock_div.classList.remove("reset-glow");
      sc_div.classList.remove("reset-glow");
    }, 800);
  });
}
main();
