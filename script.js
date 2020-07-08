// Dependencies DOM Elements ==============================
// Start Data
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

// create variable
var secondsLeft = 10;
var score = 0;

  // var questions
  var quiz [

  // Var responses
//   Question 1
    {
        q1 : "Who was Einstein?",
        a1: "The author of the Theory of Relativity and Special Relativity",
        b1: "He discovered the Law of Gravity",
        c1: "A Heavy Metal Guitarist",
    },
    // Question 2
    {
        q2: "Who was Max Planck?",
        a2: "Answer option",
        b2: "Answer option",
        c2: "Answer option",
    },
    // Question 3
    {
        q3: "Who was Marie Curie?",
        a3: "Answer option",
        b3: "Answer option",
        c3: "Answer option",
    },
    // Question 4
    {
        q4: "Who was Nikola Tesle?",
        a4: "Answer option",
        b4: "Answer option",
        c4: "Answer option",
    },
];

var asnwers = [
    // answer: PUT THE ANSWERS IN HERE IN AN ARRAY
]
var startEl = document.querySelector("")


// User Interaction =======================================
// First Window with a Greeting called Coding Quiz Challenge that is timed

// Helper function ========================================
// Start Button - create the start button
// Timer Starts or code for the timer to begin
startEl.addEventListener ("click", function() {
    startEl.getElementsByClassName.display = "none";
    var myInterval = setINterval(function(){
        console.log("it's working");
        timerEl.textContent = secondsLeft;
        secondsLeft--;
        if (secondsLeft === -1) {
        // NOT WORKING HERE DISPLAY IS OFF
            startEl.getElementsByClassName.display = secondsLeft;
            clearInterval(myInterval);
            alert("Time is up");
        }
    }, 1000);
    }
});
// Question 1 appears]
// Each question has multiple choice answers

// Handler Funciton =========================================
// Loop through the array of questions, each of which is an object - If Else
// Check Answer use answer array and .include function

// If the answer is correct 
    // alert correct
    // move to next question

// Else answer is incorrect 
    // alert incorrect
    // subract 10 seconds from the timer
    // move to next question


// When all questions are answeres or timer reaches 0
// Then the game is over


// Display Input ===================================================

// WHEN game is over
    // CLear screen
    // Reset Timer
    // Subimt button Appears

// Save initials option shows up
// Upon clicking the submit button
// return to beginning of quiz