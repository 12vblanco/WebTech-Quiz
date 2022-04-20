const scoreText = document.querySelector(".score-text");
const maxScoreText = document.querySelector(".MAX_score-text");
const scoreText2 = document.querySelector(".score-text2");

const MAX_PATTERNS = 6;
const lastScore = localStorage.lastScore;

// Current Score
scoreText.innerText =
  "congratulations! \n your score is: " +
  localStorage.lastScore +
  "/" +
  MAX_PATTERNS;

// Max Score
maxScoreText.innerText =
  "your maximum \nscore is: " + localStorage.MAX_score + "/" + MAX_PATTERNS;

// text message depending on the score
function scoreMsg() {
  if (lastScore <= 2) {
    scoreText2.innerText = "You Are Awesome, next time you will do better ";
  }
  if (lastScore > 2) {
    scoreText2.innerText = "You Are Awesome, getting close to 100% right";
  }
  if (lastScore > 4) {
    scoreText2.innerText = "You Are Awesome, nearly everyone right";
  }
  if (lastScore > 5) {
    scoreText2.innerText = "You Are Awesome, perfect Score!!";
  }
}
scoreMsg();
