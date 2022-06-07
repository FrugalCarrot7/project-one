/*----- constants -----*/

const FAILEDGUESSES = 3
const CHOICES = 4

/*----- app's state (variables) -----*/

let solution, currentGuess;

/*----- cached element references -----*/

const gameBoardEl = document.getElementById('game-board')
const submitBtnEl = document.getElementById('Submit')
const resetBtnEl = document.getElementById('reset')
const startBtnEl = document.getElementById('start')

/*----- event listeners -----*/

gameBoardEl.addEventListener('click', logCurrentGuess)
startBtnEl.addEventListener('click', gameInit)

/*----- functions -----*/

function gameInit() {
    solution = ["","","",""]
    currentGuess = []
    console.log(solution)
    getSolution()
}

function getSolution() {
    for (let i=0; i<4; i++){
        let randomInt = Math.floor(Math.random()*4 + 1)
        solution[i] = randomInt
    }
}

function logCurrentGuess() {
    console.log('lcgfunc')
}

gameInit()

console.log(solution)