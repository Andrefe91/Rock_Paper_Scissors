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

function playRound(playerSelection, getComputerChoice) {
    
    let computerChoice = getComputerChoice();
    console.log(`Computer Choice is: ${computerChoice}`);

    /* This transform the player selection text to lowercase*/
    playerSelection = playerSelection.toLowerCase();

    console.log(`Player Choice is: ${playerSelection}`);

    if (playerSelection == computerChoice) {
        console.log('It\'s a tie!');
        return 0;
    } else if (playerSelection == 'rock') {
        if(computerChoice == 'scissors'){
            console.log('You Win !!');
            return 1;
        } else{
            console.log('You Lose !! T.T');
            return 0;
        }
    } else if (playerSelection == 'scissors'){
        if(computerChoice == 'paper'){
            console.log('You Win !!');
            return 1;
        } else{
            console.log('You Lose !! T.T');
            return 0;
        }       
    } else if (playerSelection == 'paper'){
        if(computerChoice == 'rock'){
            console.log('You Win !!');
            return 1;
        } else{
            console.log('You Lose !! T.T');
            return 0;
        }           
    } else {
        alert('Error !!');
        return 0;
    }

}

function playGame(){
    let result = 0;
    let playerSelection = prompt('Player, your choice ?:')

    if (playerSelection == NaN || playerSelection == null){
        result = 0;
        console.log('No option selected, given score is 0');
    } else {
        result = playRound(playerSelection, getComputerChoice);
    }

    return result;
}


function play(){
    let result = 0;

    for (let i= 1; i <= 5; i++){
        result += playGame();
    }

    if (result >= 3){
        console.log('You Won the Game !!');
    } else {
        console.log("Sorry, you lost the game T.T x 2")
    }
}

play();