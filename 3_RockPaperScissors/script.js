// ********* DOM *********
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissors');
const result = document.querySelector('.result-text');

// ********* Functions *********
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

// Score Tracker
let playerScore = 0;
let computerScore = 0;

// Winning Conditions
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.innerHTML = "It's a Draw";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result.innerHTML = 'Computer chose: Paper.   You lose!';
    return computerScore++;
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    result.innerHTML = 'Computer chose: Scissors.   You win!';
    return playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result.innerHTML = 'Computer chose: Rock.   You win!';
    return playerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    result.innerHTML = 'Computer chose: Scissors.   You lose!';
    return computerScore++;
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    result.innerHTML = 'Computer chose: Rock.   You lose!';
    return computerScore++;
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    result.innerHTML = 'Computer chose: Paper.   You win';
    return playerScore++;
  } else {
    console.log('Invalid');
  }
}

// When buttons Clicked, Send corresponding parameters to playRound function
rock.addEventListener('click', function () {
  // Evey Click, generate a new number
  playRound('rock', computerPlay());
});

paper.addEventListener('click', function () {
  playRound('paper', computerPlay());
});

scissor.addEventListener('click', function () {
  playRound('scissor', computerPlay());
});

//game();

// while (playerScore < 5 && computerScore < 5) {
//   game();
// }
