let humanScore = 0;

// Get the computer's choice for a round
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = "rock"
            break;
        
        case 1:
            computerChoice = "paper"
            break;

        case 2:
            computerChoice = "scissors"
            break;
    }
    return computerChoice;
}

// Get the player's choice for a round
function getHumanChoice() {
    choice = prompt("Enter choice (rock, paper, scissors):");
    choice = choice.toLowerCase();
    
    if (choice === "rock" 
        || choice === "paper"
        || choice === "scissors"
    ) {
        return choice;
    }
    console.log(`invalid choice - using "rock" instead`);
    return "rock";
}