function getPlayerChoice () {
    let playerChoice = prompt("Please enter either rock, paper or scissors").toUpperCase();
    return playerChoice;
}

function getComputerChoice () {
    let generateSeed = Math.floor(Math.random()* 3);
    let computerChoice;
    switch (generateSeed) {
        case 0:
            computerChoice = "ROCK"
            break;
        case 1:
            computerChoice = "PAPER"
            break;
        case 2:
            computerChoice = "SCISSORS"
            break;        
    }
    return computerChoice;
}

function playGame () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "ROCK" || playerSelection === "PAPER" && computerSelection === "PAPER" || playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log(`It is a draw between ${playerSelection} and ${computerSelection} !`)
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log(`You win! ${playerSelection} beats ${computerSelection} !`)
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection} !`)
    }
}
