// LINKS

const card = document.getElementById("card2");
const flipButton = document.querySelector(".side-two");
const goToQuiz = document.querySelector(".start-quiz");
const goToQuiz2 = document.querySelector(".tutorial-start-quiz");

flipButton.onclick = function flip() {
  if (card.className == "card2_back") card.className = "card2_front";
  else card.className = "card2_back";
};

goToQuiz.onclick = function goToQuiz() {
  location.href = "./quiz.html";
};
goToQuiz2.onclick = function goToQuiz2() {
  location.href = "./quiz.html";
};

// ANIMATIONS

// goToQuiz2.onclick(button());

// function button() {
//   console.log("this");
// }
