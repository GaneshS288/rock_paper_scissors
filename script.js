//This gets reference to RPC choice buttons and assigns them event handler to play a round when clicked

const btnRock = document.querySelector('#ROCK');
const btnPaper = document.querySelector('#PAPER');
const btnScissors = document.querySelector('#SCISSORS');

btnRock.addEventListener('click', () => {
    playGame("ROCK")
})
btnPaper.addEventListener('click', () => {
    playGame("PAPER")
})
btnScissors.addEventListener('click', () => {
    playGame("SCISSORS")
})

//alerts the results of a round

const result = document.createElement('p');
document.querySelector('.stats').after(result)

let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice () {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoice = choices[Math.floor(Math.random()* 3)];
    
    return computerChoice;
}

function playGame (playerSelection) {
    let computerSelection = getComputerChoice();

     if (playerSelection === computerSelection) {
        ++draws
        document.querySelector('.stats span:nth-child(3)').textContent = `Draws = ${draws}`
        result.textContent = `It is a draw between ${playerSelection} and ${computerSelection} !`
    }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || playerSelection === "PAPER" && computerSelection === "ROCK" || playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        ++wins
        document.querySelector('.stats span:nth-child(1)').textContent = `Wins = ${wins}`
        result.textContent = `You win! ${playerSelection} beats ${computerSelection} !`
        setTimeout(() => endGame(), 100)
    }

    else {
        ++losses
        document.querySelector('.stats span:nth-child(2)').textContent = `Losses = ${losses}`
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection} !`
        setTimeout(() => endGame(), 100)
    }
}

function endGame () {

    if (wins === 5 || losses === 5) {
        if (wins > losses) {
            alert('Congrats! You win this game.')
        }
        
        else {
            alert('Sorry, better luck next time.')
        }

        wins = 0
        losses = 0
        draws = 0

        document.querySelector('.stats span:nth-child(1)').textContent = `Wins = ${wins}`
        document.querySelector('.stats span:nth-child(2)').textContent = `Losses = ${losses}`
        document.querySelector('.stats span:nth-child(3)').textContent = `Draws = ${draws}`
        
    }
}