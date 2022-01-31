import * as cards from "./cards.js";

console.log(cards);

const options = document.getElementById("options");
const cardBtn = document.getElementById("card_btn");
const counter = document.getElementById("counter");
const btnQuiz = document.getElementById("btn_quiz");
const btnTutorial = document.getElementById("btn_tutorial");
const pattern = document.querySelector("#pattern");
const colour1 = document.querySelector(".colour1");
const colour2 = document.querySelector(".colour2");
const colour3 = document.querySelector(".colour3");
const colour4 = document.querySelector(".colour4");
const answer = document.querySelectorAll("#answer");

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

const max_questions = 5;

startGame = () => {
  questionCounter = 0;
  availableQuestions = [...cards];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > max_questions)
    return window.location.assign("/end.html");
  questionCounter++;
  counter.innerText = `${questionCounter} / ${max_questions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  answer.innerText = cards[0].answer;
};
colour1.setAttribute("style", "background : #646835");
colour2.setAttribute("style", "background : #fff");
colour4.setAttribute("style", "background : #6C8491");
