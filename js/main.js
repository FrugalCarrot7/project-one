/*----- constants -----*/
const WINNING = 3
const FAILEDGUESSES = 3


/*----- app's state (variables) -----*/

let solution, currentGuess, color, answer, wins, loss;

/*----- cached element references -----*/

const gameBoardEl = document.getElementsByClassName('colors')
const submitBtnEl = document.getElementById('submit')
const resetBtnEl = document.getElementById('reset')
const startBtnEl = document.getElementById('start')
const memorySeqEl = document.getElementById('memory-sequence')
const winMsgEl = document.getElementById('win-message')
const solSeqEl = document.getElementById('solution-sequence')
const curGuesEl = document.getElementById('current-guess')

/*----- event listeners -----*/



startBtnEl.addEventListener('click', gameStart)
submitBtnEl.addEventListener('click', checkGuess)
resetBtnEl.addEventListener('click', reset)

/*----- functions -----*/
function gameInit() {
    wins = 0
    loss = 0
}
function gameStart() {
    Array.from(gameBoardEl).forEach((color) => {
        color.addEventListener('click', logCurrentGuess)})
    memorySeqEl.innerText = "Remember this pattern"
    solution = ["","","",""]
    currentGuess = []
    getSolution()
    renderSolution()
    setTimeout( vanish, 5000)
}


function getSolution() {
    for (let i=0; i<4; i++){
        let randomInt = Math.floor(Math.random()*4 + 1)
        solution[i] = randomInt
    }
}


function renderSolution() {
    solution.forEach(function(num){
        if(num === 1) {
            solSeqEl.innerHTML +=  '<div class="solution" id="red">1</div>'
        }if(num === 2){
            solSeqEl.innerHTML +=  '<div class="solution" id="green">2</div>'
        }if(num === 3){
            solSeqEl.innerHTML +=  '<div class="solution" id="blue">3</div>'
        }if(num === 4){
            solSeqEl.innerHTML +=  '<div class="solution" id="yellow">4</div>'   
        }
    })
}




function logCurrentGuess(evt) {
    if (currentGuess.length === 4) {
        curGuesEl.innerText = `this is your current guess ${currentGuess} you cant do that!`
    }
    else {
        currentGuess.push(evt.target.innerText)
        renderCurrentGuess()
    }
    
    
    
}



function renderCurrentGuess() {
    curGuesEl.innerText = `YOUR GUESS ${currentGuess}`
}

function checkGuess() {
    convertCurrentGuess()
    if(answer[0] == solution[0] && 
        answer[1] == solution[1] && answer[2] == solution[2] && answer[3] == solution[3]) {
        curGuesEl.innerText = `Correct`
        memorySeqEl.innerText = `Press Start for another code`
        wins += 1
    }
    else {
        curGuesEl.innerText = `Wrong. Try again by pressing Start`
        loss += 1
    }

    Array.from(gameBoardEl).forEach((color) => {
        color.removeEventListener('click', logCurrentGuess)

    })
    solSeqEl.innerText = ``
    checkWin()
}

function checkWin() {
    if(wins === WINNING) {
        winMsgEl.innerText = `YOU WIN!`
        startBtnEl.removeEventListener('click', gameStart)
    }
    if(loss === FAILEDGUESSES){
        winMsgEl.innerText = `IM NOT MAD IM JUST DISAPPOINTED`
        curGuesEl.innerText = ``
        startBtnEl.removeEventListener('click', gameStart)
        submitBtnEl.removeEventListener('click', checkGuess)
    }
}

function convertCurrentGuess() {
    answer = []
    currentGuess.forEach((num) => {
    answer.push(parseInt(num))    
    } )
}

function reset() {
    wins = 0
    loss = 0
    memorySeqEl.innerText = `Press Start`
    winMsgEl.innerText = ``
    curGuesEl.innerText = ``
    currentGuess = []
    renderCurrentGuess()
    startBtnEl.addEventListener('click', gameStart)
    submitBtnEl.addEventListener('click', checkGuess)

}

function vanish() {
    memorySeqEl.innerText = `Can you remember the code?`
    solSeqEl.innerText = "Press the buttons below"
}

gameInit()