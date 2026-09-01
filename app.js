console.log("Hello World");

let num = Math.random();

let choice;

function getComputerChoice(choice) {
    if (num < 1/3) {
        choice = "rock";
        return "rock";
    } else if (num < 2/3) {
        choice = "paper";
        return "paper";
    } else {
        choice = "scissors";
        return "scissors";
    }
}       

answer = getComputerChoice(choice);
console.log(answer);