
//print to screen
//question-answer bank === DONE
//timer    === DONE
//if question is not correct subtract time === DONE
//if time = 0 || questions = 0 then game over === DONE
//when game over then save score

//HTML Element References
var timeRemainingEl = document.querySelector("#timeRemaining")
var startBtn = document.querySelector("#startBtn")
//var questionTitle = document.querySelector("#questionTitle")

var highScore = [];// array of people that scored the most

// Question Bank

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

var currentQ = 0; // keeps track of the question in the question bank
var countdown = 60; // for the timer
timeRemainingEl.textContent= countdown;

// startQuiz() starts the timer and iterates through the questions.

function timerStart() {
    var button = document.getElementById("startBtn");
    var message = document.querySelector("p#startPrompt");
    message.remove();
    button.remove();

   // debugger

    var countdownTimer = setInterval(function () {
        countdown--;
        timeRemainingEl.textContent = countdown;
    
        if(countdown <= 0 || currentQ == QnA.length){
            alert("quiz is over punk!");
            clearInterval(countdownTimer);
        }
       
    }, 1000)
}

function startQuiz() {
    timerStart();
    iterateQuestionHandler();
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

function checkAndIterate(highScore) {
    var currentScore = highScore;
    var previousAnswer = this.textContent;
    if( previousAnswer == QnA[currentQ-1].answer){
        console.log("correct");
        currentScore = 5;
    } else {
        console.log("incorrect")
        countdown -= 5;
    }
    
    iterateQuestionHandler();
}

startBtn.addEventListener("click", startQuiz);

