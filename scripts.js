const CHOICES = ["rock", "paper", "scissors"];
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
        if (choice === "rock" 
            || choice === "paper"
            || choice === "scissors"
        ) {
            return choice;
        }
    }
    
    console.log(`invalid choice - using "rock" instead`);
    return "rock";
}

// Plays rock paper scissors
// If a winner is found, increments winner's score 
// Returns "human", "computer", or "tie" based on round
function playRound(humanChoice, computerChoice) {
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

// Plays 'numRounds' rounds of rock paper scissors, 
// then displays the overall winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Game loop
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);
        
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

playGame();