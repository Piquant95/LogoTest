const beginButton = document.getElementById('begin-btn')
const questionElement = document.getElementById 
('problem1')
const secondProblem = document.getElementById('problem2')
const mainScreen = document.getElementById('mainscreen')
const answer1 = document.getElementById('letter')

beginButton.addEventListener('click', beginGame)
answer1.addEventListener('click', question2)

function beginGame() {
    console.log('started')
    beginButton.classList.add('hide')
    mainScreen.classList.add('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()
}

function question2() {
    console.log('good job')
    secondProblem.classList.remove('hide')
    questionElement.classList.add('hide')

}

function setNextQuestion() {

}

function selectAnswer() {

}

// const questions = [
//    {
//     question: 
//    } 
// ]