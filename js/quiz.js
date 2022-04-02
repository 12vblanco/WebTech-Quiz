import patternsArray from "./cards.js";

const patternImg = document.querySelector("#pattern img");
const counter = document.getElementById("counter");
const answers = Array.from(document.getElementsByClassName("choice"));
const next = document.getElementById("next");
const choice1 = (document.querySelectorAll(".radio").checked = true);
const output = document.querySelector(".output");

const radioButtons = document.querySelectorAll('input[name="answers"]');
next.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
  // show the output:
  output.innerText = selectedSize ? `` : `Select an emotion!!`;
});

console.log(choice1);

let patterns = patternsArray;
let patternsCounter;
let availablePatterns;
let score;

//maxPatterns
const MAX_PATTERNS = 5;

function startGame() {
  patternsCounter = 0;
  score = 0;
  availablePatterns = getRandomPatterns(patterns, MAX_PATTERNS);
  getNewPattern();

  console.log(patterns);
  console.log(availablePatterns);
}

//getRandomPatterns & randomPatterns
function getRandomPatterns(arr, num) {
  let result = new Array();
  while (result.length < num) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomPatterns = arr[randomIndex];
    if (!result.includes(randomPatterns)) {
      result.push(randomPatterns);
    }
  }
  return result;
}

//get new pattern
function getNewPattern() {
  if (availablePatterns.length === 0 || patternsCounter >= MAX_PATTERNS) {
    alert("Game Over, your score is " + score);
    return;
  }
  patternsCounter++;
  counter.innerHTML = ` ${patternsCounter} / ${MAX_PATTERNS}`;
  let currentPattern = availablePatterns.shift();

  patternImg.src = currentPattern.pattern;

  //set the answer
  answers.forEach((answer) => {
    //one unique choice for each
    answer.innerHTML = currentPattern.choices.shift();
  });

  // .innerText = currentPattern.choices;

  console.log(currentPattern);
}

//next onclick
const nextPattern = (document.querySelector("#next").onclick =
  function goToNextPattern() {
    if (patternsCounter === MAX_PATTERNS) {
      alert(
        "Game Over, your score is " + score + "\r\n" + " The game will restart"
      );
      function restart() {
        location.href = "./quiz.html";
      }
      restart();
      return;
    } else {
      if (choice1) {
        score++;
        document.querySelector('input[name="answers"]:checked').checked = false;
        getNewPattern();
      } else {
        score++;
        getNewPattern();
      }
    }
  });
console.log(choice1);

//startQuiz
startGame();
