
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions,correctQuestionIndex;
let quizScore=0;

startButton.addEventListener('click',startGame);

nextButton.addEventListener('click', () =>{
     correctQuestionIndex++;
     setnextQuestion();
});

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() => Math.random() - 0.5);
    correctQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer) =>{
        const button= document.correctElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        } 
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton=e.target;
    const correct= selectedButton.dataset.correct;

    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct);
    })
    if (shuffledQuestions.length > correctQuestionIndex + 1  ) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "restart";
        startButton.classList.remove("hide");
    }
    if (selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answer').innerText=quizScore;

}


function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }
    else{
         element.classList.add("wrong");
    }
}


function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: 'which one is the Javascript framework?',
        answers: [
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'react', correct: true},
            {text: 'eclipse', correct:false}
        ]
    },
    {
        question: 'which one is the blockchain prog lang?',
        answers: [
            {text: 'Java', correct: false},
            {text: 'Django', correct: false},
            {text: 'Javascript', correct: false},
            {text: 'Solidity', correct:true}
        ]
    },

    {
        question: 'for what the HTML is used for?',
        answers: [
            {text: 'web dev', correct: true},
            {text: 'Do', correct: false},
            {text: 'dance', correct: true},
            {text: 'draw', correct:false}
        ]
    }

]


