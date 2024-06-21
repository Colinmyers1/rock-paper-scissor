// Get computer choice

let getComputerChoice = Math.floor(Math.random() * 3);

switch (getComputerChoice) {
  case 0:
    getComputerChoice = "rock";
    console.log("Computers choice is rock");
    break;

  case 1:
    getComputerChoice = "paper";
    console.log("Computers choice is paper");
    break;

  case 2:
    getComputerChoice = "scissors";
    console.log("Computers choice is scissors");
    break;
}

// Get human choice

let getHumanChoice = prompt("Choose your weapon!");
getHumanChoice = getHumanChoice.toLowerCase();

//Check if human input is valid
function checkInput(humanChoice) {
  if (
    getHumanChoice !== "rock" &&
    getHumanChoice !== "paper" &&
    getHumanChoice !== "scissors"
  ) {
    alert("You must pick rock paper or scissors!");
    return false;
  }
  return true;
}

console.log(`Human's choice is ${getHumanChoice}`);

// Initialize scores

let computerScore = 0;
let humanScore = 0;

// Determine winner

function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice === computerChoice) {
    result = "It's a draw";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    result = "Computer wins";
  } else {
    result = "Human wins";
  }

  console.log(result);

  if (result == "Human wins") {
    humanScore += 1;
  } else if (result == "Computer wins") {
    computerScore += 1;
  }
}

if (checkInput(getHumanChoice)) {
  playRound(getHumanChoice, getComputerChoice);
}

console.log(`Computer's score: ${computerScore}`);
console.log(`Human's score: ${humanScore}`);
