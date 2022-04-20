import patternsArray from "./cards.js";

const patternImg = document.querySelector("#pattern img");
const counter = document.getElementById("counter");
const answers = Array.from(document.getElementsByClassName("choice"));
const radio = Array.from(document.getElementsByClassName("radio_input"));

let patterns = patternsArray;
let patternCounter;
let availableAnswers;
let score;
let answersEntered;
const MAX_PATTERNS = 6;
let currentPattern;

// Main function that runs the game
function startGame() {
  patternCounter = 0;
  score = 0;
  answersEntered = true;
  availableAnswers = getRandomPatterns(patterns, MAX_PATTERNS);
  getNewPattern();
}

// selects patterns from the Patterns Array imported from cards.js equal to MAX_PATTERNS
const getRandomPatterns = (arr, num) => {
  let result = new Array();
  while (result.length < num) {
    let i = Math.floor(Math.random() * arr.length);
    let randomPatterns = arr[i];
    if (!result.includes(randomPatterns)) {
      result.push(randomPatterns);
      console.log(randomPatterns);
    }
  }
  return result;
};

// checks if the game is over and sets score in local memory;
// if not it gets a new pattern from the chosen ones
const getNewPattern = () => {
  if (availableAnswers.length === 0) {
    localStorage.setItem("lastScore", score);

    let MAX_score = localStorage.getItem("MAX_score");
    if (score > MAX_score) {
      localStorage.setItem("MAX_score", score);
    }
    if ((MAX_score = null)) {
      MAX_score = score;
    }

    return (window.location.href = "/score.html");
  }
  answersEntered = true;

  patternCounter++;
  counter.innerHTML = ` ${patternCounter} / ${MAX_PATTERNS}`;

  currentPattern = availableAnswers.shift();
  patternImg.src = currentPattern.pattern;
  answers.forEach((answer) => {
    answer.innerText = currentPattern.choices.shift();
  });
};

// Adds functionality to quiz and changes colour of answers, sets timer between patterns, sets score...
answers &&
  radio.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      const clickedAnswer = e.target;
      const choice = clickedAnswer.id;
      console.log(`chosen ${choice}`);
      console.log(`correct ${currentPattern.answer}`);
      let classApplied = "incorrect";

      if (choice === currentPattern.answer) {
        answersEntered = false;

        score++;
        classApplied = "correct";
        clickedAnswer.parentElement.classList.add(classApplied);
        setTimeout(() => {
          clickedAnswer.parentElement.classList.remove(classApplied),
            (document.querySelector(
              'input[name="answers"]:checked'
            ).checked = false);
        }, 700);
        console.log(`score ${score}`);
      } else {
        answersEntered = false;

        console.log(`score ${score}`);
        classApplied = "incorrect";
        clickedAnswer.parentElement.classList.add(classApplied);
        setTimeout(() => {
          clickedAnswer.parentElement.classList.remove(classApplied),
            (document.querySelector(
              'input[name="answers"]:checked'
            ).checked = false);
        }, 500);
      }
      setTimeout(() => {
        getNewPattern();
      }, 700);
    });
  });
startGame();

// I left some logs to show how the quiz works
// in the console. These would be normally removed otherwise.
