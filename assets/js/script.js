
//print to screen
//question-answer bank === DONE
//timer    === DONE
//if question is not correct subtract time === DONE
//if time = 0 || questions = 0 then game over === DONE
//when game over then save score

//HTML Element References
var timeRemainingEl = document.querySelector("#timeRemaining")
var startBtn = document.querySelector("#startBtn")
var questionTitle = document.querySelector("#questionTitle")
var btnA = document.querySelector("#a")
var btnB = document.querySelector("#b")
var btnC = document.querySelector("#c")
var btnD = document.querySelector("#d")

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
    }
]

var currentQ = 0;
var countdown = 60;
timeRemainingEl.textContent= countdown;

function startQuiz(){
    timerStart()
    iterateQuestion()
}

function iterateQuestion (){
    if(currentQ < QnA.length){
        questionTitle.textContent = QnA[currentQ].question
        btnA.textContent = QnA[currentQ].A
        btnB.textContent = QnA[currentQ].B
        btnC.textContent = QnA[currentQ].C
        btnD.textContent = QnA[currentQ].D
    }

    currentQ++;
}

function timerStart(){
    var countdownTimer = setInterval(function () {
        countdown--;
        timeRemainingEl.textContent = countdown;

        if(countdown <= 0 || QnA.length == currentQ){
            // alert("quiz is over punk!")
            clearInterval(countdownTimer)
        }
    }, 1000)
}

function checkAndIterate(){
    var previousAnswer = this.textContent
    if( previousAnswer == QnA[currentQ-1].answer){
        console.log("correct")
    } else {
        console.log("incorrect")
        countdown = countdown - 5;
        // countdown -= 5;
    }
    iterateQuestion()
}

startBtn.addEventListener("click", startQuiz)
btnA.addEventListener("click", checkAndIterate)
btnB.addEventListener("click", checkAndIterate)
btnC.addEventListener("click", checkAndIterate)
btnD.addEventListener("click", checkAndIterate)