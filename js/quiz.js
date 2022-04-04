import patternsArray from "./cards.js";
const patternImg = document.querySelector("#pattern img");
const counter = document.getElementById("counter");
const answers = Array.from(document.getElementsByClassName("choice"));
const radio = Array.from(document.getElementsByClassName("radio_input"));
// const next = document.getElementById("next");
const choice1 = (document.querySelectorAll(".radio").checked = false);

let patterns = patternsArray;
let patternCounter;
let availableAnswers;
let score;

const MAX_PATTERNS = 5;

let answersEntered;

function startGame() {
  patternCounter = 0;
  score = 0;
  answersEntered = true;
  availableAnswers = getRandomPatterns(patterns, MAX_PATTERNS);
  getNewPattern();
}

const getRandomPatterns = (arr, num) => {
  let result = new Array();
  while (result.length < num) {
    let i = Math.floor(Math.random() * arr.length);
    let randomPatterns = arr[i];
    if (!result.includes(randomPatterns)) {
      result.push(randomPatterns);
    }
  }
  return result;
};

const getNewPattern = () => {
  if (availableAnswers.length === 0 || patternCounter >= MAX_PATTERNS) {
    localStorage.setItem("lastScore", score);
    return (window.location.href = "/score.html");
  }

  patternCounter++;
  counter.innerHTML = ` ${patternCounter} / ${MAX_PATTERNS}`;
  let currentPattern = availableAnswers.shift();
  patternImg.src = currentPattern.pattern;
  answers.forEach((answer) => {
    answer.innerHTML = currentPattern.choices.shift();
  });

  answers &&
    radio.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        if (!answersEntered) {
          console.log("not entered");
          return;
        }
        answersEntered = false;
        const clickedAnswer = e.target;
        const choice = clickedAnswer.id;
        if (choice === currentPattern.answer) {
          score++;
          let classApplied = "correct";
          clickedAnswer.parentElement.classList.add(classApplied);
          setTimeout(() => {
            clickedAnswer.parentElement.classList.remove(classApplied);
            document.querySelector(
              'input[name="answers"]:checked'
            ).checked = false;
            getNewPattern();
            answersEntered = true;
          }, 1000);
        } else {
          let classApplied = "incorrect";
          clickedAnswer.parentElement.classList.add(classApplied);
        }
      });
    });
};

startGame();
