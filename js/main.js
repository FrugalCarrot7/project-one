/*----- constants -----*/

const FAILEDGUESSES = 3
const CHOICES = 4

/*----- app's state (variables) -----*/

let solution, currentGuess, turns, color;

/*----- cached element references -----*/

const gameBoardEl = document.getElementsByClassName('colors')
const submitBtnEl = document.getElementById('Submit')
const resetBtnEl = document.getElementById('reset')
const startBtnEl = document.getElementById('start')
const memorySeqEl = document.getElementById('memory-sequence')
const winMsgEl = document.getElementById('win-message')

/*----- event listeners -----*/


Array.from(gameBoardEl).forEach((color) => {
    color.addEventListener('click', logCurrentGuess)
})



startBtnEl.addEventListener('click', gameStart)

/*----- functions -----*/

function gameInit() {
    solution = ["","","",""]
    currentGuess = []
    turns = 0
    
}

function getSolution() {
    for (let i=0; i<4; i++){
        let randomInt = Math.floor(Math.random()*4 + 1)
        solution[i] = randomInt
    }
}


function renderSolution() {

    memorySeqEl.innerText = 
    `please remember this ${solution[0]} ${solution[1]} ${solution[2]} ${solution[3]}`

}

function logCurrentGuess(evt) {
    if (currentGuess.length === 4) {
        console.log('you cant do that')
    }
    else {
        currentGuess.push(evt.target.innerText)
        renderCurrentGuess()
    }
    
    
}

function gameStart() {
    getSolution()
    console.log(solution)
    renderSolution()
}

function renderCurrentGuess() {
    winMsgEl.innerText = `this is your current guess ${currentGuess}`
}






gameInit()

console.log(solution)