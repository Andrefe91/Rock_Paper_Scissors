console.log('Hello World!');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100);

    if (randomNumber <= 33) {
        return 'rock';
    } else if (randomNumber <= 66) {
        return'scissors';
    } else {
        return 'paper';
    }
}

function playGame(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        console.log('It\'s a tie!');
    } else if (playerSelection === 'rock') {
        if (computerChoice ==='scissors') {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
    } else if (playerSelection ==='scissors') {
        if (computerChoice === 'paper') {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
    } else {
        if (computerChoice === 'rock') {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }
    }
}

playGame('rock', getComputerChoice);
