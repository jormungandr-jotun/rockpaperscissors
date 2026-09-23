let humanScore = 0;
let computerScore = 0;

// getting HTML elements via DOM
const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");

const userChoiceSpan = document.getElementById("userChoice");
const computerChoiceSpan = document.getElementById("computerChoice");
const roundWinnerP = document.getElementById("roundWinner");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");

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

// function getHumanChoice(humanChoice) {
//     let choice = humanChoice.toLowerCase();
//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//         return choice;
//     } else {
//         return null;
//     }
// }


function playRound(humanChoice){
    const computerChoice = getComputerChoice()

    userChoiceSpan.textContent = humanChoice.toUpperCase()
    computerChoiceSpan.textContent = computerChoice.toUpperCase()

    if (humanChoice === computerChoice) {
            roundWinnerP.textContent = "Its a Tie for this Round!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundWinnerP.textContent = `CONGRATULATIONS YOU WIN THIS ROUND! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundWinnerP.textContent = `Better Luck Next Time ${computerChoice} beats ${humanChoice}`;
    }
    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore; 

    } 

    rockbtn.addEventListener("click", () => playRound("rock"))
    paperbtn.addEventListener("click", () => playRound("paper"))
    scissorsbtn.addEventListener("click", () => playRound("scissors"))

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log("Round " + (i + 1));
//         let humanChoice = prompt("Enter your choice: rock, paper, or scissors");
//         let humanSelection = getHumanChoice(humanChoice);
//         let computerSelection = getComputerChoice();
//         let roundResult = playRound(humanSelection, computerSelection);
//         console.log(roundResult);
//         console.log("Human Score: " + humanScore);
//         console.log("Computer Score: " + computerScore);
//     }

//     console.log("=== FINAL SCORE ===");
//     console.log("Human: " + humanScore + " | Computer: " + computerScore);

//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (computerScore > humanScore) {
//         console.log("Computer wins the game!");
//     } else {
//         console.log("The game is a tie!");
//     }
// }
// playGame()
