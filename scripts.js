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

// Get the player's choice for a round
function getHumanChoice() {
    let choice = prompt("Enter choice (rock, paper, scissors):");
    if (choice) {
        choice = choice.toLowerCase();
        if (CHOICES.includes(choice)) {
            return choice;
        }
    }
    
    console.log(`invalid choice - using "rock" instead`);
    return "rock";
}

// Plays rock paper scissors
// If a winner is found, increments winner's score 
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

// Plays 'numRounds' rounds of rock paper scissors, 
// then displays the overall winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Game loop
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = getWinner(humanSelection, computerSelection);
        
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(`Round ${i + 1} Winner: ${winner}`);
        console.log("");
    }

    // Display game's result
    console.log("GAME RESULT:");
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("WINNER: Human");
    } else if (computerScore > humanScore) {
        console.log("WINNER: Computer");
    } else {
        console.log("WINNER: Tie");
    }
}