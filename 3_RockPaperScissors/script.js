function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoose;

  if (randomNumber === 1) {
    computerChoose = 'rock';
  } else if (randomNumber === 2) {
    computerChoose = 'paper';
  } else {
    computerChoose = 'scissor';
  }

  return computerChoose;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a Draw");
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose');
    return computerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    console.log('You win');
    return playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win');
    return playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    console.log('You lose');
    return computerScore++;
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    console.log('You lose');
    return computerScore++;
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    console.log('You win');
    return playerScore + 1;
  } else {
    console.log('Invalid');
  }
}

function game() {
  const playerSelects = prompt(
    'Type your choice: rock, paper, scissor: '
  ).toLowerCase();

  const computerSelects = computerPlay();

  playRound(playerSelects, computerSelects);

  console.log('Your Score: ' + playerScore);
  console.log('Computer Score: ' + computerScore);
}

while (playerScore < 5 && computerScore < 5) {
  game();
}
