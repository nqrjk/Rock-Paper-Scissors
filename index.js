let values = ["rock", "paper", "scissors"]

function computerPlay() {
    return values[Math.floor(Math.random() * values.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let userScore = 0;
    let computerScore = 0;

    computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "rock"
    || playerSelection === "paper" && computerSelection === "paper"
        || playerSelection === "scissors" && computerSelection === "scissors") {
            return "Omg, that's a tie! Try again please please please";
    } else if((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
            return "Damn, you won!";
            userScore++;
    } else {
            return "Hahahaha, I have some bad news for you. You lost! Computer is smarter, that's for sure";
            computerScore++;
    }
}



function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose one: rock, paper, or scissors ^^");
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();