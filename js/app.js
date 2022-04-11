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

const button = document.querySelector(".playClick");

button.addEventListener("click", function () {
  document.getElementById("click").play();
});
export default goToQuiz;
