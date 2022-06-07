/*----- constants -----*/

const FAILEDGUESSES = 3
const CHOICES = 4

/*----- app's state (variables) -----*/

let solution, currentGuess, turns;

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
    getSolution()
}

function getSolution() {
    for (let i=0; i<4; i++){
        let randomInt = Math.floor(Math.random()*4 + 1)
        solution[i] = randomInt
    }
}


function renderSolution() {
    console.log('renderSolutionFunc')

}

function logCurrentGuess(evt) {
    currentGuess.push(evt.target.id) 
    console.log(currentGuess)
    //add 1 to guess index
}




gameInit()

console.log(solution)