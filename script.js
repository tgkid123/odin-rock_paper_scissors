function getComputerChoice () {
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    let losu = getRandomInt(3);
    if (losu === 0) {
        return "rock";
    }
    else if (losu === 1) {
        return "paper";
    }
    else if (losu === 2) {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function playRound (playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = window.prompt("Rock Paper Scissors?");
    if (playerSelection.toLowerCase() === "rock" & computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    }
    else if (playerSelection.toLowerCase() === "rock" & computerSelection === "scissors") {
        playerScore ++;
        return "You win! Rock beats scissors";
    }
    else if (playerSelection.toLowerCase() === "paper" & computerSelection === "rock") {
        playerScore ++;
        return "You win! Paper beats rock";
    }
    else if (playerSelection.toLowerCase() === "paper" & computerSelection === "scissors") {
        computerScore ++;
        return "You lose! Scissors beat paper";
    }
    else if (playerSelection.toLowerCase() === "scissors" & computerSelection === "paper") {
        playerScore ++;
        return "You win! Scissors beat paper";
    }
    else if (playerSelection.toLowerCase() === "scissors" & computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    }
    else {
        return "Tie!";
    }
}

function game() {
    console.log(playRound (playerSelection));
    console.log (playerScore,computerScore);
    console.log(playRound (playerSelection));
    console.log (playerScore,computerScore);
    console.log(playRound (playerSelection));
    console.log (playerScore,computerScore);
    console.log(playRound (playerSelection));
    console.log (playerScore,computerScore);
    console.log(playRound (playerSelection));
    console.log (playerScore,computerScore);
    if (playerScore > computerScore) {
        return "You win the game!";
    }
    else if (playerScore < computerScore) {
        return "You lose the game!";
    }
    else {
        return "The game is tied!";
    }
}

console.log (game ());