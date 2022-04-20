// onclick actions for main buttons

const card = document.getElementById("card2");
const flipButton = (document.querySelector(".side-two").onclick =
  function flip() {
    if (card.className == "card2_back") card.className = "card2_front";
    else card.className = "card2_back";
  });

const goToQuiz = (document.querySelector(".start-quiz").onclick =
  function goToQuiz() {
    location.href = "./quiz.html";
  });

const goToQuiz2 = (document.querySelector(".tutorial-start-quiz").onclick =
  function goToQuiz() {
    location.href = "./quiz.html";
  });

const buttons = document.querySelectorAll(".clickButton");

for (let button of buttons) {
  button.addEventListener("click", function () {
    document.getElementById("click").play("click.mp3");
  });
}

export default goToQuiz;
