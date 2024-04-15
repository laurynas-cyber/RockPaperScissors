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
  const userChoiceDiv = document.getElementById(user);
  userLabel_div.style.backgroundColor = "green";
  const smallUserword = "user".fontsize(3).sub(); //kodel neveikia?
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
  console.log("comp win");
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

function main() {
  rock_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "red";
    compLabel_div.style.backgroundColor = "red";
    game("r");
  });

  paper_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "red";
    compLabel_div.style.backgroundColor = "red";
    game("p");
  });

  sc_div.addEventListener("click", function () {
    userLabel_div.style.backgroundColor = "red";
    compLabel_div.style.backgroundColor = "red";
    game("s");
  });
}
main();
