
//HTML Element References
var timeRemainingEl = document.querySelector("#timeRemaining")
timeRemainingEl.textContent= countdown;
var startBtn = document.querySelector("#startBtn")
//var questionTitle = document.querySelector("#questionTitle")

//Global variables
var currentQ = 0; // keeps track of the question in the question bank
var countdown = 60; // for the timer
var highScore = [];// array of people that played before

var saveScore = function () { // saves the highScore array to local storage
    localStorage.setItem("highScore", JSON.stringyfy(highScore));
}
//Question bank
var QnA = [
    {
        question: "What do you use to comment JS code?",
        A: "<-- -->",
        B: "//",
        C: "/* */",
        D: "All of the Above",
        answer: "//"
    },
    {
        question: "How are you?",
        A: "good",
        B: "great",
        C: "awful",
        D: "hangry",
        answer: "hangry"
    },
    {
        question: "where are you from",
        A: "Louisiana",
        B: "Texas",
        C: "West Virginia",
        D: "New York",
        answer: "Louisiana"
    }
]

// Code Quiz functions

//highScoreHandler() prompts the user for his/her name and pushes the name and end time
//to the highScore array.

function highScoreHandler () {
    var userStats = [
        {userName: "",
        score: 0}
    ];

    userStats.userName = window.prompt("enter your name to display your score for perpituity");
    userStats.score = countdown;
    highScore.push(userStats);
    localStorage.setItem("highScore", JSON.stringify(highscore));
}

function LoadScoreHistory () {
    var pastScores = localStorage.getItem("highScore");
    pastScores = JSON.parse(highScore);

}

function clearQuestionContainer () {

}

//timerStart takes away the welcome message and the start button
//so that it the questions can be displayed.
function timerStart() {
    var quizInProgress = false;
    var button = document.getElementById("startBtn");
    var message = document.querySelector("p#startPrompt");
    message.remove();
    button.remove();

   // debugger

    var countdownTimer = setInterval(function () {
        var quizInProgress = true;
        countdown--;
        timeRemainingEl.textContent = countdown;
    
        if(countdown <= 0 || currentQ == QnA.length){
            debugger
            var quizInProgress = false;
            alert("quiz is over punk!"); 
            return;
            highScoreHandler();
            clearInterval(countdownTimer);
        }
       
    }, 1000)

   
}

function iterateQuestionHandler () {

    //what if i need to create a table with two columns and buttons?
    var questionContainerEl = document.querySelector("div");
    var questionTitleEl = document.createElement("h2");
    questionTitleEl.className = "questionTitle";
    var btnA = document.createElement("button");
    var btnB = document.createElement("button");
    var btnC = document.createElement("button");
    var btnD = document.createElement("button");

    if(currentQ < QnA.length){

        
        questionTitleEl.textContent = QnA[currentQ].question;
        btnA.id = "a";
        btnA.textContent = QnA[currentQ].A;
        
        btnB.id = "b";
        btnB.textContent = QnA[currentQ].B;
        
        btnC.id = "c";
        btnC.textContent = QnA[currentQ].C;
       
        btnD.id = "d";
        btnD.textContent = QnA[currentQ].D;

        questionContainerEl.appendChild(questionTitleEl);
        questionContainerEl.appendChild(btnA);
        questionContainerEl.appendChild(btnB);
        questionContainerEl.appendChild(btnC);
        questionContainerEl.appendChild(btnD);

        btnA.addEventListener("click", checkAndIterate);
        btnB.addEventListener("click", checkAndIterate);
        btnC.addEventListener("click", checkAndIterate);
        btnD.addEventListener("click", checkAndIterate);
    }
    
}

//checkAndIterate() checks the user's answer against the QnA array[currentQ].answer to see
//if its correct.  If it is then the user gets 5 points.  If it isn't, the clock is decreased 
//by 5 seconds.  The currentQ variable increases by 1 no matter what the answer is and then 
//calls the iterateQuestionHandler() to display the next question.
function checkAndIterate() {
    //debugger
    var userAnswer = this.textContent;
    if( userAnswer == QnA[currentQ].answer){
        console.log("correct");

    } else {
        console.log("incorrect")
        countdown -= 5;
    }
    currentQ ++;
    iterateQuestionHandler();
}

function startQuiz() {
    timerStart();
    iterateQuestionHandler();
}

startBtn.addEventListener("click", startQuiz);

