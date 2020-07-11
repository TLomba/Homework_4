// Dependencies DOM Elements ==============================
// Start Data

// create variable
var score = 0;
var time = 120;
// define the buttons
// put the questions and choicesinto the buttons
// call it using key and array and the object of the array

// var questions
var quiz = [
  //   Question 1
  {
    Question: "Who was Einstein?",
    choices: [
      "The author of the Theory of Relativity and Special Relativity",
      "He discovered the Law of Gravity",
      "In his spare time he was a Guitarist that authored the hit song Heavy Metals",
    ],
    answer: "The author of the Theory of Relativity and Special Relativity",
  },
  // Question 2
  {
    Question: "What was Max Planck famous for?",
    choices: [
      "He was a scientist and also a pirate who forced his victims to walk the plank",
      "He discoverd the constant 'h'",
      "He discovered how to make carbonated drinks",
    ],
    answer: "He discoverd the constant 'h'",
  },
  // Question 3
  {
    Question: "What was Marie Curie famous for?",
    choices: [
      "She invented a new method for preserving corpses",
      "A cook famous for spreading Typhoid Fever",
      "She discovered Radium and Polonium, and the development of X-Rays",
    ],
    answer: "She discovered Radium and Polonium, and the development of X-Rays",
  },
  // Question 4
  {
    Question: "Who was Nikola Tesla?",
    choices: [
      "The inventor or the fasted electric car",
      "A tech wizard that is now one of the most powerful people on the planet",
      "Experimented with wireless power transmission by electrifying butterflies and often left residents without power in Colorado",
    ],
    answer:
      "Experimented with wireless power transmission by electrifying butterflies and often left residents without power in Colorado",
  },
];

// Var responses - button that is a larger box and clickable with the answer in the box the answer is in the button

// get the questions into the buttons
// give answer and populate next question and add 25 points to the score
// Create a function that populates the buttons
// create a scoring function
// create function that "secondsLeft" where 5 seconds is subtracted on wrong answers

// User Interaction =======================================
// First Window with a Greeting called Coding Quiz Challenge that is timed

// Call Funcitons =========================================
// create a function that is basedon all the things thta need to happen when click start
// the start button disappears
// clock starts
// frst question and set of answers shows up
onclick = function () {
  var startEl = document.getElementById("StartBtn");
  console.log();
  StartBtn.addEventListener;
  // access the start button screen element
  startEl.style.display = "none";
  console.log();

  function runClock() {
    time--;
    timerEl.textContent = time;
    console.log();
    // if time <= 0 then end quiz
  }

  //   The buttons for the questions have to pop up and be within containers/boxes
  // Click button and a question pops up
  var currentQuestionI = 0;
  var questionTitle = document.getElementById("currQuestion");
  function getQuestion() {
    var currQuestion = quiz[Question[i]];
    questionTitle.textContent = currQuestion.Question;
    getQuestion();
    console.log();
  }
};

function getClick() {}

function checkAnswers() {
  // the function would take the user's selected answer and match it up against each option in answerKey array with .include method which means that if its included its true
  // result - if there is a match then +25 points if no match subtract 5 seconds
}

// Start Button - add event listener for whne the button is clicked

// Question 1 appears]

// Display Input ===================================================

// When game is over
// Clear screen
// Reset Timer
// Subimt button Appears

// Save initials option shows up
// Upon clicking the submit button
// return to beginning of quiz
