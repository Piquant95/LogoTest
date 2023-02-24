const beginButton = document.getElementById('begin-btn')
const questionElement = document.getElementById 
('content')
const mainScreen = document.getElementById('mainscreen')

beginButton.addEventListener('click', beginGame)

function beginGame() {
    console.log('started')
    beginButton.classList.add('hide')
    mainScreen.classList.add('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()
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