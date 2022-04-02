import patternsArray from "./cards.js";

const patternImg = document.querySelector("#pattern img");
const counter = document.getElementById("counter");
const answers = Array.from(document.getElementsByClassName("choice"));
const next = document.getElementById("next");
const choice1 = (document.querySelectorAll(".radio").checked = true);

//ALERT FOR RADIO BUTTONS
// const alert = document.querySelector(".output");

// const radioButtons = document.querySelectorAll('input[name="answers"]');
// next.addEventListener("click", () => {
//   let selectedSize;
//   for (const radioButton of radioButtons) {
//     if (radioButton.checked) {
//       selectedSize = radioButton.value;
//       break;
//     }
//   }
//   alert.innerText = selectedSize ? `` : `Select an emotion!!`;
//   setTimeout(function () {
//     document.querySelector(".output").innerHTML = "";
//   }, 3000);
// });

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

function getNewPattern() {
  if (availablePatterns.length === 0 || patternsCounter >= MAX_PATTERNS) {
    localStorage.setItem("lastScore", score);
    return (window.location.href = "/score.html");
  }

  patternsCounter++;
  counter.innerHTML = ` ${patternsCounter} / ${MAX_PATTERNS}`;
  let currentPattern = availablePatterns.shift();
  patternImg.src = currentPattern.pattern;
  answers.forEach((answer) => {
    let randomIndex = Math.floor(Math.random() * answers.length);
    answer.innerHTML = currentPattern.choices.shift();
  });

  console.log(currentPattern);
  console.log(answers);
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

//next onclick
const nextPattern = (document.querySelector("#next").onclick =
  function goToNextPattern() {
    if (patternsCounter === MAX_PATTERNS) {
      localStorage.setItem("lastScore", score);
      return (window.location.href = "/score.html");
      // alert(
      //   "Game Over, your score is " + score + "\r\n" + " The game will restart"
      // );
      // function restart() {
      //   location.href = "./quiz.html";
      // }
      // restart();
      // return;
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
