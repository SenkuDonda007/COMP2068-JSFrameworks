const prompt = require('prompt');

// Define the choices for the game
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Function to generate a random computer selection
function generateComputerSelection() {
  const randomValue = Math.random();
  if (randomValue <= 0.34) return 'PAPER';
  else if (randomValue <= 0.67) return 'SCISSORS';
  else return 'ROCK';
}

// Function to determine the game outcome
function determineOutcome(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    return "User Wins";
  } else {
    return "Computer Wins";
  }
}

// Get user input
prompt.start();
prompt.get(['userSelection'], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();

  if (choices.includes(userSelection)) {
    const computerSelection = generateComputerSelection();
    console.log(`User Selection: ${userSelection}`);
    console.log(`Computer Selection: ${computerSelection}`);
    
    const outcome = determineOutcome(userSelection, computerSelection);
    console.log(`Outcome: ${outcome}`);
  } else {
    console.log('Invalid choice. Please choose ROCK, PAPER, or SCISSORS.');
  }
});
