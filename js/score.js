const scoreText = document.querySelector(".score-text");
const maxScoreText = document.querySelector(".MAX_score-text");

scoreText.innerText =
  "congratulations! \n your score is: " + localStorage.lastScore;

maxScoreText.innerText = "your maximum \nscore is: " + localStorage.MAX_score;
