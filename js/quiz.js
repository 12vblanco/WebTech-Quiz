import * as cards from "./cards.js";

const img = document.querySelector("#pattern img");
const counter = document.querySelector("#counter");
let questions = [cards.love, cards.hate, cards.beauty, cards.heat, cards.power];

// const choice1 = document.querySelector("#choice1");

img.src = "img/patterns/love.svg";
choice1.innerText = cards.love.choice1;
choice2.innerText = cards.love.choice2;
choice3.innerText = cards.love.choice3;
choice4.innerText = cards.love.choice4;
counter.innerText = "1 / 6";

console.log(questions);

// let questionCounter;
// let score;
// const MAX_QUESTIONS = 3;

// function startQuiz() {
//   questionCounter = 0;
//   score = 0;
//   //   acceptingAnswers = true;
//   //   scoreText.innerText = score;
//   availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
//   getNewQuestion();
// }

// const getRandomQuestions = (arr, n) => {
//   let len = arr.length;
//   if (n > len) {
//     throw new RangeError(
//       "getRandomQuestions: more elements taken than available"
//     );
//   }

//   const shuffled = [...arr].sort(() => 0.5 - Math.random());

//   return (selected = shuffled.slice(0, n));
// };

// startQuiz();
