//General vaiables
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//Dom Elements
const roundBtn = document.getElementById("one-round");
const gameBtn = document.getElementById("game");

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
  } else {
    alert("Please select one of Paper, Rock, Scissors");
    return "You didn't choose one of the options!";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter your play, please!").toLowerCase();
    computerSelection = computerPlay();
    console.log(
      `Computer chose: ${computerSelection}...`,
      playRound(playerSelection, computerSelection)
    );
  }
  if (playerScore > computerScore) {
    console.log(`You won the game!, Score: ${playerScore}-${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(
      `Computer won the game!, Score: ${computerScore}-${playerScore}`
    );
  } else {
    console.log(`It's a tie!, Score: ${playerScore}-${computerScore}`);
  }
};

//Handlers
const handleRoundBtn = () => {
  playerSelection = prompt("Enter your play, please!").toLowerCase();
  computerSelection = computerPlay();
  console.log(
    `Computer chose: ${computerSelection}...`,
    playRound(playerSelection, computerSelection)
  );
  console.log(
    `Your Score: ${playerScore}`,
    `Computer's Score: ${computerScore}`
  );
};

const handleGameBtn = () => {
  computerScore = 0;
  playerScore = 0;
  game();
};

//Events
roundBtn.addEventListener("click", handleRoundBtn);
gameBtn.addEventListener("click", handleGameBtn);
