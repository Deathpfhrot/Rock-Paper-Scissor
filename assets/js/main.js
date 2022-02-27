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



let amountOfTries = undefined;
let roundRemoves = document.getElementById('roundRemoves')
let roundRemoves2 = document.getElementById('roundRemoves2')
let headline = document.getElementById('headline')
let guessCount = 0;


setTries = (amount) => {
    amountOfTries = amount;
    console.log(amountOfTries);
    roundRemoves.classList.add('invisible')
    roundRemoves.classList.remove('container-rounds')
    roundRemoves2.classList.add('invisible')
    roundRemoves2.classList.remove('container-rounds')
    printGuessTries(guessCount);

}

printGuessTries = (number) => {
    headline.innerHTML = `
    ${number} / ${amountOfTries}`

}

let divScissor = document.querySelector('#divScissor')
let divPaper = document.querySelector('#divPaper')
let divRock = document.querySelector('#divRock')
let divScissorCopy = document.querySelector('#divScissor')
let divPaperCopy = document.querySelector('#divPaper')
let divRockCopy = document.querySelector('#divRock')

function getResult() {

    guessCount++



    if (gameOver()) {
        return;
    }


    printGuessTries(guessCount)



    if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
        divScissor.style.removeProperty('border')
        divPaper.style.border = '3px solid green'
        divPaper.style.transform = '1s'
        divPaper.style.transition = '1s ease-in-out'
        divRock.style.removeProperty('border')

    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
        divScissor.style.removeProperty('border')
            // divPaper.style.removeProperty('border')
        divRock.style.removeProperty('border')
        divPaper.style.border = '3px solid red'
        divPaper.style.transform = '1s'
        divPaper.style.transition = '1s ease-in-out'


    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
        divScissor.style.removeProperty('border')
        divPaper.style.removeProperty('border')
            // divRock.style.removeProperty('border')
        divRock.style.border = '3px solid red'
        divRock.style.transform = '1s'
        divRock.style.transition = '1s ease-in-out'


    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
        divScissor.style.removeProperty('border')
        divPaper.style.removeProperty('border')
        divRock.style.border = '3px solid green'
        divRock.style.transform = '1s'
        divRock.style.transition = '1s ease-in-out'

    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = ' You lose!'
        counterPC++
        playerComputer.innerHTML = counterPC
            // divScissor.style.removeProperty('border')
        divPaper.style.removeProperty('border')
        divRock.style.removeProperty('border')
        divScissor.style.border = '3px solid red'
        divScissor.style.transform = '1s'
        divScissor.style.transition = '1s ease-in-out'


    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultDisplay.innerHTML = ' You won!'
        counterPO++
        playerOne.innerHTML = counterPO
        divScissor.style.border = '3px solid green'
        divScissor.style.transform = '1s'
        divScissor.style.transition = '1s ease-in-out'
        divPaper.style.removeProperty('border')
        divRock.style.removeProperty('border')


    } else if (computerChoice === 'paper' && userChoice === 'paper') {
        divPaperCopy.style.border = '3px solid gray'
        divPaperCopy.style.transform = '1s'
        divPaperCopy.style.transition = '1s ease-in-out'
        resultDisplay.innerHTML = " It's a draw!"
        divRockCopy.style.removeProperty('border')
        divScissorCopy.style.removeProperty('border')

    } else if (computerChoice === 'rock' && userChoice === 'rock') {
        divRockCopy.style.border = '3px solid gray'
        divRockCopy.style.transform = '1s'
        divRockCopy.style.transition = '1s ease-in-out'
        resultDisplay.innerHTML = " It's a draw!"

        divPaperCopy.style.removeProperty('border')
        divScissorCopy.style.removeProperty('border')

    } else if (computerChoice === 'scissors' && userChoice === 'scissors') {
        divScissorCopy.style.border = '3px solid gray'
        divScissorCopy.style.transform = '1s'
        divScissorCopy.style.transition = '1s ease-in-out'
        resultDisplay.innerHTML = " It's a draw!"
        divRockCopy.style.removeProperty('border')
        divPaperCopy.style.removeProperty('border')



    } else {
        console.log('hello');
        // resultDisplay.innerHTML = " It's a draw!"
        // counterPO++
        // counterPC++
        // playerOne.innerHTML = counterPO
        // playerComputer.innerHTML = counterPC
        // divScissor.style.removeProperty('border')
        // divPaper.style.removeProperty('border')
        // divRock.style.removeProperty('border')

    }


}
let finisher = document.getElementById('finisher')

gameOver = () => {
    if (guessCount > amountOfTries) {
        finisher.innerHTML = `<h3>Game Over</h3>`
        if (counterPC > counterPO) {
            finisher.innerHTML += `<p>Sorry you lose : /</p>`
        }
        if (counterPC < counterPO) {
            finisher.innerHTML += `<p>Awsome you won!</p>`
        }
        if (counterPC == counterPO) {
            finisher.innerHTML = `Today nobody lose nor wins`
        }
        return true;

    }
    return false;

}