/*----- constants -----*/

const FAILEDGUESSES = 3
const CHOICES = 4

/*----- app's state (variables) -----*/

let solution, currentGuess, color, answer;

/*----- cached element references -----*/

const gameBoardEl = document.getElementsByClassName('colors')
const submitBtnEl = document.getElementById('submit')
const resetBtnEl = document.getElementById('reset')
const startBtnEl = document.getElementById('start')
const memorySeqEl = document.getElementById('memory-sequence')
const winMsgEl = document.getElementById('win-message')

/*----- event listeners -----*/


Array.from(gameBoardEl).forEach((color) => {
    color.addEventListener('click', logCurrentGuess)
})
startBtnEl.addEventListener('click', gameStart)
submitBtnEl.addEventListener('click', checkGuess)
resetBtnEl.addEventListener('click', deleteCurrentGuess)

/*----- functions -----*/

function gameInit() {
    
    
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
        winMsgEl.innerText = `this is your current guess ${currentGuess} you cant do that!`
    }
    else {
        currentGuess.push(evt.target.innerText)
        renderCurrentGuess()
    }
    
    
}

function gameStart() {
    solution = ["","","",""]
    currentGuess = []
    getSolution()
    console.log(solution)
    renderSolution()
    setTimeout( vanish, 5000)

}

function renderCurrentGuess() {
    winMsgEl.innerText = `this is your current guess ${currentGuess}`
}

function checkGuess() {
    convertCurrentGuess()
    if(answer[0] == solution[0] && answer[1] == solution[1] && answer[2] == solution[2] && answer[3] == solution[3]) {
        winMsgEl.innerText = `Smarty Pants`
    }
    else {
        winMsgEl.innerText = `Goldfish`
    }
}

function convertCurrentGuess() {
    answer = []
    currentGuess.forEach((num) => {
    answer.push(parseInt(num))    
    } )
}

function deleteCurrentGuess() {
    currentGuess = []
    renderCurrentGuess()
}

function vanish() {
    memorySeqEl.innerText = `Times Up`
}



console.log(solution)