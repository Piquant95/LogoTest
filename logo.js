const beginButton = document.getElementById('begin-btn')
const questionElement = document.getElementById ('problem1')
const secondProblem = document.getElementById('problem2')
const mainScreen = document.getElementById('mainscreen')
const answer1 = document.getElementById('letter')
const falseanswer1 = document.getElementById('character')
const gameOver = document.getElementById('gameover')
const allQuestions = document.getElementsByTagName('all')[0];
const answer2 = document.getElementById('answer2')
const thirdProblem = document.getElementById('problem3')

beginButton.addEventListener('click', beginGame)
answer1.addEventListener('click', question2)
falseanswer1.addEventListener('click', gameover)
answer2.addEventListener('click', question3)

function gameover() {
    console.log('Game Over')
    allQuestions.classList.add('hide')
    gameOver.classList.remove('hide')
    
}

function beginGame() {
    console.log('started')
    beginButton.classList.add('hide')
    mainScreen.classList.add('hide')
    questionElement.classList.remove('hide')
    answer1.classList.remove('hide')
    setNextQuestion()
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
    console.log(thirdProblem)
    
   
    
}

function setNextQuestion() {

}

function selectAnswer() {

}