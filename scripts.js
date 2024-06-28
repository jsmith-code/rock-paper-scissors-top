let humanScore = 0;
let computerScore = 0;

// Get the computer's choice for a round
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    let choice;
    switch (randomNumber) {
        case 0:
            choice = "rock"
            break;
        
        case 1:
            choice = "paper"
            break;

        case 2:
            choice = "scissors"
            break;
    }
    return choice;
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
// Increments scores and returns "human", 
// "computer", or "tie" based on round
function playRound(humanChoice, computerChoice) {
    // If no win condition met, we can assume a tie
    let winner = "tie"; 

    // Check for win conditions
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                winner = "human";
            } else if (computerChoice === "paper") {
                computerScore++;
                winner = "computer";
            }
            break;
            
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                winner = "human";
            } else if (computerChoice === "scissors") {
                computerScore++;
                winner = "computer";
            }
            break;

        case "scissors":
            if (computerChoice === "paper") {
                winner = "human";
                humanScore++;
            } else if (computerChoice === "rock") {
                computerScore++;
                winner = "computer";
            }
            break;
    }

    return winner;
}