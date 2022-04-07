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
// let answersEntered;
const MAX_PATTERNS = 5;

function startGame() {
  patternCounter = 0;
  score = 0;
  // answersEntered = true;
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
      console.log(randomPatterns);
    }
  }
  return result;
};

const getNewPattern = () => {
  if (availableAnswers.length === 0) {
    localStorage.setItem("lastScore", score);
    return (window.location.href = "/score.html");
  }
  // answersEntered = true;

  patternCounter++;
  counter.innerHTML = ` ${patternCounter} / ${MAX_PATTERNS}`;

  let currentPattern = availableAnswers.shift();
  patternImg.src = currentPattern.pattern;
  answers.forEach((answer) => {
    answer.innerText = currentPattern.choices.shift();
  });

  //I believe the problem starts here

  answers &&
    radio.forEach((answer) => {
      answer.addEventListener("click", (e) => {
        const clickedAnswer = e.target;
        const choice = clickedAnswer.id;
        console.log(choice);
        console.log(currentPattern.answer);
        let classApplied = "incorrect";

        //if choice is = to correct answer
        if (choice === currentPattern.answer) {
          score++;
          classApplied = "correct";
          clickedAnswer.parentElement.classList.add(classApplied);
          setTimeout(() => {
            clickedAnswer.parentElement.classList.remove(classApplied),
              (document.querySelector(
                'input[name="answers"]:checked'
              ).checked = false);
          }, 1000);
          console.log(score);
          //if not correct
        } else {
          console.log(score);
          classApplied = "incorrect";
          clickedAnswer.parentElement.classList.add(classApplied);
          setTimeout(() => {
            clickedAnswer.parentElement.classList.remove(classApplied),
              (document.querySelector(
                'input[name="answers"]:checked'
              ).checked = false);
          }, 1000);
        }
        setTimeout(() => {
          getNewPattern();
        }, 1000);
      });
    });
};

startGame();

// this is how I had it until this morning
//   answers &&
//     radio.forEach((answer) => {
//       answer.addEventListener("click", (e) => {
//         // if (!answersEntered) {
//         //   console.log("not entered");
//         //   return;
//         // }

//         // answersEntered = false;
//         const clickedAnswer = e.target;
//         const choice = clickedAnswer.id;
//         console.log(choice);
//         console.log(currentPattern.answer);

//         let classApplied = "incorrect";

//         if (choice === currentPattern.answer) {
//           score++;
//           classApplied = "correct";
//         }

//         clickedAnswer.parentElement.classList.add(classApplied);

//         setTimeout(() => {
//           clickedAnswer.parentElement.classList.remove(classApplied);

//           getNewPattern();
//           answersEntered = true;
//           document.querySelector(
//             'input[name="answers"]:checked'
//           ).checked = false;
//         }, 1000);
//       });
//     });
// };
