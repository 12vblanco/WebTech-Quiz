const scoreText = document.querySelector(".score-text");
const maxScoreText = document.querySelector(".MAX_score-text");
const scoreText2 = document.querySelector(".score-text2");

let MAX_PATTERNS = 6;

scoreText.innerText =
  "congratulations! \n your score is: " +
  localStorage.lastScore +
  "/" +
  MAX_PATTERNS;

maxScoreText.innerText =
  "your maximum \nscore is: " + localStorage.MAX_score + "/" + MAX_PATTERNS;
