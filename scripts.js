//General vaiables
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//Dom Elements
const playBtn = document.getElementById("play");
const gameTypeSection = document.querySelector(".game-type");
const playSection = document.querySelector(".plays");
const resultSection = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const currentScore = document.querySelector(".current-score");
const summary = document.querySelector(".summary");
const winner = document.querySelector(".winner");
const finalScore = document.querySelector(".final-score");
const playAgainBtn = document.querySelector("#play-again");

//Functions
const computerPlay = () => {
  const playChoices = ["Rock", "Paper", "Scissors"];
  const play = Math.floor(Math.random() * playChoices.length);
  return playChoices[play];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "Rock":
        return "Even Round!";
      case "Scissors":
        playerScore++;
        return "You Win! Rock beats Scissors";
      case "Paper":
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "Paper":
        return "Even Round!";
      case "Scissors":
        computerScore++;
        return "You Lose! Scissors beat Paper";
      case "Rock":
        playerScore++;
        return "You Win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "Scissors":
        return "Even Round!";
      case "Rock":
        computerScore++;
        return "You Lose! Rock beat Scissors";
      case "Paper":
        playerScore++;
        return "You Win! Scissors beat Paper";
    }
  }
};

//Handlers
const handleplayBtn = () => {
  gameTypeSection.classList.add("invis");
  playSection.classList.remove("invis");
};

const handlePlaySection = (e) => {
  playerSelection = e.target.id ? e.target.id : null;
  computerSelection = playerSelection ? computerPlay() : null;

  computerSelection
    ? (resultText.textContent = `Computer chose: ${computerSelection}...${playRound(
        playerSelection,
        computerSelection
      )}`) &&
      (currentScore.textContent = `Your Score: ${playerScore}, Computer's Score: ${computerScore}`) &&
      resultSection.classList.remove("invis")
    : null;

  if (computerScore === 5 || playerScore === 5) {
    playSection.classList.add("invis");
    gameTypeSection.classList.add("invis");
    setTimeout(() => {
      summary.classList.remove("invis");
      resultSection.classList.add("invis");
    }, 1000);
  }

  if (computerScore === 5) {
    winner.textContent = "Computer Won!";
    finalScore.textContent = `${computerScore} - ${playerScore}`;
  }
  if (playerScore === 5) {
    winner.textContent = "You Won!";
    finalScore.textContent = `${playerScore} - ${computerScore}`;
  }
};

const handlePlayAgain = () => {
  computerScore = 0;
  playerScore = 0;
  gameTypeSection.classList.remove("invis");
  summary.classList.add("invis");
};

//Events
playBtn.addEventListener("click", handleplayBtn);
playSection.addEventListener("click", handlePlaySection);
playAgainBtn.addEventListener("click", handlePlayAgain);
