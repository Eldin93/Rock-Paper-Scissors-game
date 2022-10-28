// Variables
const title = document.getElementById("title");
let playerIcon = document.getElementById("player-icon");
let computerIcon = document.getElementById("computer-icon");
const playerScoreMessage = document.getElementById("player-score");
const computerScoreMessage = document.getElementById("computer-score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const modal = document.getElementById("myModal");
const newGameBtn = document.getElementById("new-game");

// Game variables
const rock = "http://127.0.0.1:5500/rock.png";
const paper = "http://127.0.0.1:5500/paper.png";
const scissors = "http://127.0.0.1:5500/scissors.png";
items = [rock, paper, scissors];
let playerScore = 0;
let computerScore = 0;

// Functions and game logic

function randomSelection() {
  let random = items[Math.floor(Math.random() * items.length)];
  computerIcon.src = random;
  console.log(computerIcon.src);
  return computerIcon.src;
}

function isWinner() {
  if (playerScore === 5) {
    title.textContent = "Player is the winner!";
    modal.style.display = "block";
  } else if (computerScore === 5) {
    title.textContent = "Computer is the winner!";
    modal.style.display = "block";
  }
}

rockBtn.addEventListener("click", function () {
  playerIcon.src = rock;
  computerChoice = randomSelection();
  if (computerChoice === paper) {
    title.textContent = "You lose!";
    computerScore++;
    computerScoreMessage.textContent = `Computer: ${computerScore}`;
  } else if (computerChoice === scissors) {
    title.textContent = "You win!";
    playerScore++;
    playerScoreMessage.textContent = `Player: ${playerScore}`;
  } else {
    title.textContent = "It's a Tie";
  }
  isWinner();
});

paperBtn.addEventListener("click", function () {
  playerIcon.src = paper;
  computerChoice = randomSelection();
  if (computerChoice === scissors) {
    title.textContent = "You lose!";
    computerScore++;
    computerScoreMessage.textContent = `Computer: ${computerScore}`;
  } else if (computerChoice === rock) {
    title.textContent = "You win!";
    playerScore++;
    playerScoreMessage.textContent = `Player: ${playerScore}`;
  } else {
    title.textContent = "It's a Tie";
  }
  isWinner();
});

scissorsBtn.addEventListener("click", function () {
  playerIcon.src = scissors;
  computerChoice = randomSelection();
  if (computerChoice === rock) {
    title.textContent = "You lose!";
    computerScore++;
    computerScoreMessage.textContent = `Computer: ${computerScore}`;
  } else if (computerChoice === paper) {
    title.textContent = "You win!";
    playerScore++;
    playerScoreMessage.textContent = `Player: ${playerScore}`;
  } else {
    title.textContent = "It's a Tie";
  }
  isWinner();
});

newGameBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerScoreMessage.textContent = `Player: ${playerScore}`;
  computerScoreMessage.textContent = `Computer: ${computerScore}`;
  modal.style.display = "none";
  title.innerHTML = `Let the game beggin <br/>
First to score 5 points wins!`;
});
