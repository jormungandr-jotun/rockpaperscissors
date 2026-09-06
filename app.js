function getComputerChoice() {
    let num = Math.random();
    if (num < 1/3) {
        return "rock";
    } else if (num < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}       


function getHumanChoice(humanChoice) {
    let choice = humanChoice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return null;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
        if (humanChoice === null) {
    return "Invalid input! Computer gets no points, but you wasted a turn.";
    }

    if (humanChoice === computerChoice) {
        return "It's a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
    } 

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        let humanChoice = prompt("Enter your choice: rock, paper, or scissors");
        let humanSelection = getHumanChoice(humanChoice);
        let computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    console.log("=== FINAL SCORE ===");
    console.log("Human: " + humanScore + " | Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}
playGame()
