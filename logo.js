// Pulling all the required elements from the HTML
const beginButton = document.getElementById('begin-btn')
const questionElement = document.getElementById ('problem1')
const secondProblem = document.getElementById('problem2')
const mainScreen = document.getElementById('mainscreen')
const answer1 = document.getElementById('letter')
const falseanswer1 = document.getElementById('character')
const gameOver = document.getElementById('gameover')
const answer2 = document.getElementById('answer2')
const falseanswer2 = document.getElementById('falseanswer2')
const thirdProblem = document.getElementById('problem3')
const answer3 = document.getElementById('answer3')
const falseanswer3 = document.getElementById('falseanswer3')
const fourthProblem = document.getElementById('problem4')
const answer4 = document.getElementById('answer4')
const falseanswer4 = document.getElementById('falseanswer4')
const fifthProblem = document.getElementById('problem5')
const answer5 = document.getElementById('answer5')
const falseanswer5 = document.getElementById('falseanswer5')
const sixthProblem = document.getElementById('problem6')
const answer6 = document.getElementById('answer6')
const falseanswer6 = document.getElementById('falseanswer6')
const seventhProblem = document.getElementById('problem7')
const answer7 = document.getElementById('answer7')
const falseanswer7 = document.getElementById('falseanswer7')
const eighthProblem = document.getElementById('problem8')
const answer8 = document.getElementById('answer8')
const falseanswer8 = document.getElementById('falseanswer8')
const ninthProblem = document.getElementById('problem9')
const answer9 = document.getElementById('answer9')
const falseanswer9 = document.getElementById('falseanswer9')
const gameWon = document.getElementById('congrats')
const playAgain = document.getElementById('restart-btn')
const retry = document.getElementById('restart-bttn')

// functionality of answer buttons to either transition
// to the next question if correct or end the game if incorrect.
beginButton.addEventListener('click', beginGame)
answer1.addEventListener('click', question2)
falseanswer1.addEventListener('click', gameover)
answer2.addEventListener('click', question3)
falseanswer2.addEventListener('click', gameover)
answer3.addEventListener('click', question4)
falseanswer3.addEventListener('click', gameover)
answer4.addEventListener('click', question5)
falseanswer4.addEventListener('click', gameover)
answer5.addEventListener('click', question6)
falseanswer5.addEventListener('click', gameover)
answer6.addEventListener('click', question7)
falseanswer6.addEventListener('click', gameover)
answer7.addEventListener('click', question8)
falseanswer7.addEventListener('click', gameover)
answer8.addEventListener('click', question9)
falseanswer8.addEventListener('click', gameover)
answer9.addEventListener('click', winner)
falseanswer9.addEventListener('click', gameover)
playAgain.addEventListener('click', beginGame)
retry.addEventListener('click', beginGame)

// Each screen/question is given it's own function so that it
// hides the previous question as well as console logs a small 
// message. The gameover function hides all the questions so 
// that no matter which one you are on it will disappear if
// you lose. 
function gameover() {
    console.log('Game Over')
    gameOver.classList.remove('hide')
    questionElement.classList.add('hide')
    secondProblem.classList.add('hide')
    thirdProblem.classList.add('hide')
    fourthProblem.classList.add('hide')
    fifthProblem.classList.add('hide')
    sixthProblem.classList.add('hide')
    seventhProblem.classList.add('hide')
    eighthProblem.classList.add('hide')
    ninthProblem.classList.add('hide')
    retry.classList.remove('hide')
    
}

function beginGame() {
    console.log('started')
    beginButton.classList.add('hide')
    mainScreen.classList.add('hide')
    questionElement.classList.remove('hide')
    gameWon.classList.add('hide')
    retry.classList.add('hide')
    gameOver.classList.add('hide')
}

function question2() {
    console.log('good job')
    secondProblem.classList.remove('hide')
    questionElement.classList.add('hide')

}

function question3() {
    console.log('Keep Going') 
    secondProblem.classList.add('hide')
    thirdProblem.classList.remove('hide')
    
}

function question4() {
    console.log('You are on fire!')
    thirdProblem.classList.add('hide')
    fourthProblem.classList.remove('hide')

}

function question5() {
    console.log('You are a pro!')
    fourthProblem.classList.add('hide')
    fifthProblem.classList.remove('hide')
}

function question6() {
    console.log('I cannot believe you are still going!')
    fifthProblem.classList.add('hide')
    sixthProblem.classList.remove('hide')
}

function question7() {
    console.log('Amazing!')
    sixthProblem.classList.add('hide')
    seventhProblem.classList.remove('hide')
}

function question8() {
    console.log('You are elite!')
    seventhProblem.classList.add('hide')
    eighthProblem.classList.remove('hide')
}

function question9() {
    console.log('Almost there!')
    eighthProblem.classList.add('hide')
    ninthProblem.classList.remove('hide')
}

function winner() {
    console.log('You did it!')
    ninthProblem.classList.add('hide')
    gameWon.classList.remove('hide')
}
