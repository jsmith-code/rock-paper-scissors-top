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
    choice = prompt("Enter choice (rock, paper, scissors):");
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