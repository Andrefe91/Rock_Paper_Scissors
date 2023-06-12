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

function playRound(playerSelection, computerChoice) {
    
    console.log(`Computer Choice is: ${computerChoice}`);

    /* This transform the player selection text to lowercase*/
    playerSelection = playerSelection.toLowerCase();

    console.log(`Player Choice is: ${playerSelection}`);

    if (playerSelection == computerChoice) {
        console.log('It\'s a tie this Round !');
        return [0,'It\'s a tie this Round !'];
    } else if (playerSelection == 'rock') {
        if(computerChoice == 'scissors'){
            console.log('You Win this Round !!');
            return [1,'You Win this Round !!'];
        } else{
            console.log('You Lose this Round !! T.T');
            return [0,'You Lose this Round !! T.T'];
        }
    } else if (playerSelection == 'scissors'){
        if(computerChoice == 'paper'){
            console.log('You Win this Round !!');
            return [1,'You Win this Round !!'];
        } else{
            console.log('You Lose this Round !! T.T');
            return [0,'You Lose this Round !! T.T'];
        }       
    } else if (playerSelection == 'paper'){
        if(computerChoice == 'rock'){
            console.log('You Win this Round !!');
            return [1,'You Win this Round !!'];
        } else{
            console.log('You Lose this Round !! T.T');
            return [0,'You Lose this Round !! T.T'];
        }           
    } else {
        alert('Error !!');
        return 0;
    }

}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click',playSelection));

function playSelection(event) {

    let playerSelection = event.target.getAttribute("data-action");
    let computerChoice = getComputerChoice();

    /*Little animation to the back ground color via CSS*/
    event.target.classList.add('pressed');
    setTimeout(() => {
        event.target.classList.remove('pressed');
    },100)

    const computerChoiceField = document.querySelector('#computerSelection');
    computerChoiceField.textContent = computerChoice;

    /*We toggle the class so the text change color depending of the result*/
    toggleClase(computerChoiceField, computerChoice);

    console.log(computerChoice);
    result = playRound(playerSelection, computerChoice);
    console.log(result);
    resultsOfGame(result);
    gameNumber();
}

function toggleClase (object, classGiven) {

    /*We must delete the current class for the value*/
    if(object.classList.value == ""){
    
    } else{
        object.classList.toggle(object.classList.value);
    }

    /*So we can now add another*/
    object.classList.add(classGiven);
}

function resultsOfGame (result){
    const resultField = document.querySelector('#result');
    resultField.textContent = result[1];

    let classGiven = 'win';
    console.log(result[0]);

    if (result[0] == 0){
        classGiven = 'loose'
    }

    toggleClase(resultField,classGiven);
    keepScore(result[0]);
}

function keepScore(score){
    const scoreField = document.querySelector('#score');
    let oldScore = Number(scoreField.textContent);
    oldScore += score;
    
    scoreField.textContent = oldScore;
}

function gameNumber(){
    const gameField = document.querySelector('#gameNumber');
    let gameNumber = Number(gameField.textContent);

    gameNumber += 1;

    gameField.textContent = gameNumber;

    if (gameNumber == 5){
        printWinner(gameField);
    }

}

function printWinner(){
    
    const scoreField = document.querySelector('#score');
    let score = Number(scoreField.textContent);

    const resultText = document.querySelector('#result');

    if (score >= 3){
        console.log('You Won the Game !!');
        resultText.textContent = 'You Won the Game !!'
        toggleClase(resultText,'win');
    } else {
        console.log("Sorry, you lost the game T.T x 2")
        resultText.textContent = 'Sorry, you lost the game T.T'
        toggleClase(resultText,'loose');
    }

    buttons.forEach(button => button.removeEventListener('click',playSelection));
    restart();
}

function restart (){
    let container = document.querySelector('div.buttonRestart');
    
    const resetButton = document.createElement('button');
    resetButton.classList.add('gameAction','reset');
    resetButton.textContent = 'Reload'
    container.appendChild(resetButton);

    resetButton.addEventListener('click',reset);
}

function reset(){

    /*So te person can only reset once per game*/
    let resetButton = document.querySelector('.gameAction.reset');
    resetButton.removeEventListener('click',reset);
    resetButton.remove();

    /* It's neccesary to clean the board!*/
    let textField = []
    textField[0] = document.querySelector('#score');
    textField[1] = document.querySelector('#gameNumber');
    textField[2] = document.querySelector('#result');
    textField[3] = document.querySelector('#computerSelection');

    textField[0].textContent = '0';
    textField[1].textContent = '0';
    textField[2].textContent = '';
    textField[3].textContent = '';

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener('click',playSelection));

    
}