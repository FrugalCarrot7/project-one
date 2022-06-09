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
const solSeqEl = document.getElementById('solution-sequence')

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
    solution.forEach(function(num){
        if(num === 1) {
            solSeqEl.innerHTML +=  '<div class="solution" id="red">1</div>'
            console.log(solSeqEl.innerHTML)
        }if(num === 2){
            solSeqEl.innerHTML +=  '<div class="solution" id="green">2</div>'
            console.log(solSeqEl.innerHTML)
        }if(num === 3){
            solSeqEl.innerHTML +=  '<div class="solution" id="blue">3</div>'
            console.log(solSeqEl.innerHTML)
        }if(num === 4){
            solSeqEl.innerHTML +=  '<div class="solution" id="yellow">4</div>'
            console.log(solSeqEl.innerHTML)
        }else {
            console.log('what happened')
        }
    })
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
    memorySeqEl.innerText = "Remember this pattern"
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
        winMsgEl.innerText = `Correct`
    }
    else {
        winMsgEl.innerText = `Wrong`
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
    memorySeqEl.innerText = `Can you remember the code?`
    solSeqEl.innerText = "Press the buttons below"
}



console.log(solution)