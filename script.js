// Dependencies DOM Elements ==============================
var startButton = document.getElementById("StartBtn");
var nextButton = document.getElementById("NextBtn");
var questionContainerElement = document.getElementById("question-container");
var questonElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-btns");
var gameOverElement = document.querySelector("#gameOver");
var timerElement = document.getElementById("timer");

var score = 0;
var timer;
var gameOver;
var answerChosen = true;
// define the buttons
// put the questions and choicesinto the buttons
// call it using key and array and the object of the array

// var questions array objects
var quiz = [
  //   Question 1
  {
    question: "Who was Einstein?",
    choices: [
      "The author of the Theory of Relativity and Special Relativity",
      "He discovered the Law of Gravity",
      "In his spare time he was a Guitarist that authored the hit song Heavy Metals",
    ],
    answer: "The author of the Theory of Relativity and Special Relativity",
  },
  // Question 2
  {
    question: "What was Max Planck famous for?",
    choices: [
      "He was a scientist and also a pirate who forced his victims to walk the plank",
      "He discoverd the constant 'h'",
      "He discovered how to make carbonated drinks",
    ],
    answer: "He discoverd the constant 'h'",
  },
  // Question 3
  {
    question: "What was Marie Curie famous for?",
    choices: [
      "She invented a new method for preserving corpses",
      "A cook famous for spreading Typhoid Fever",
      "She discovered Radium and Polonium, and the development of X-Rays",
    ],
    answer: "She discovered Radium and Polonium, and the development of X-Rays",
  },
  // Question 4
  {
    question: "Who was Nikola Tesla?",
    choices: [
      "The inventor or the fasted electric car",
      "A tech wizard that is now one of the most powerful people on the planet",
      "Experimented with wireless power transmission by electrifying butterflies and often left residents without power in Colorado",
    ],
    answer:
      "Experimented with wireless power transmission by electrifying butterflies and often left residents without power in Colorado",
  },
];

// Start Button - add event listener for whne the button is clicked
startButton.addEventListener("click", startQuiz);
// Question 1 appears]

// Display Input ===================================================

// When game is over
// Clear screen
// Reset Timer
// Subimt button Appears

// Save initials option shows up
// Upon clicking the submit button
// return to beginning of quiz
