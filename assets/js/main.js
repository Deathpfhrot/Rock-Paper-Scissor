//JS Deep Projekt lev3_9: Rock, Paper, Scissors

// Definieren wieviele Runden wir gegen den Comput spielen
// Die Farbe sollte sich ändern, wenn es sic um einen Gewinn, ein Unentschieden oder eine Niederlage handelt.
//Das Design im Anhang ist nur ein Vorschlag, ihr könnt hier gerne kreativ werden.


const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('img')
console.log(possibleChoices);

let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = ' You choose ' + userChoice
    console.log(userChoice);
    generateComputerChoice()
    getResult()
}))
console.log('test');

let computerChoice


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    console.log(randomNumber);
    if (randomNumber == 0) {
        computerChoice = `rock`
    } else if (randomNumber == 1) {
        computerChoice = `scissors`
    } else {
        computerChoice = `paper`
    }
    computerChoiceDisplay.innerHTML = 'The Computer picked ' + computerChoice;
    console.log(computerChoice);
}

let result
let counterPO = 0;
let counterPC = 0;
let playerOne = document.getElementById('playerOne')
let playerComputer = document.getElementById('player-computer')

function getResult() {
    if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
    } else {
        resultDisplay.innerHTML = " It's a draw!"
        counterPO++
        counterPC++
        playerOne.innerHTML = counterPO
        playerComputer.innerHTML = counterPC
    }
}