const CHOICES = ["rock", "paper", "scissors"];
const REQUIRED_WINS = 5;

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()))
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()))
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()))

// Get the computer's choice for a round
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return CHOICES[randomNumber];
}

// Returns "human", "computer", or "tie" based on round
function getWinner(humanChoice, computerChoice) {
    // If no win condition met, we can assume a tie
    let winner = "tie"; 

    // Check for win conditions
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                winner = "human";
            } else if (computerChoice === "paper") {
                winner = "computer";
            }
            break;
            
        case "paper":
            if (computerChoice === "rock") {
                winner = "human";
            } else if (computerChoice === "scissors") {
                winner = "computer";
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                winner = "human";
            } else if (computerChoice === "rock") {
                winner = "computer";
            }
            break;
    }

    return winner;
}

function playRound(humanSelection, computerSelection) {
    if (gameOver) {
        return;
    }
    winner = getWinner(humanSelection, computerSelection);
    if (winner === "human") {
        console.log(`Human Wins! Human: ${humanSelection} | Computer: ${computerSelection}`)
        humanScore++;
    } else if (winner === "computer") {
        console.log(`Computer Wins! Human: ${humanSelection} | Computer: ${computerSelection}`)
        computerScore++;
    } else {
        console.log(`Tie! Human: ${humanSelection} | Computer: ${computerSelection}`)
    }

    if (humanScore >= REQUIRED_WINS) {
        console.log("Human Wins the Game!");
        console.log(`Human Total Score: ${humanScore} | Computer Total Score: ${computerScore}`);
        gameOver = true;
    } else if (computerScore >= REQUIRED_WINS) {
        console.log("Computer Wins the Game!");
        console.log(`Human Total Score: ${humanScore} | Computer Total Score: ${computerScore}`);
        gameOver = true;
    }
    return winner;
}