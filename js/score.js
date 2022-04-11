const scoreText = document.querySelector(".score-text");
const maxScoreText = document.querySelector(".MAX_score-text");

scoreText.innerText =
  "Congratulations! \n Your score is: " + localStorage.lastScore;

maxScoreText.innerText = "Your Maximum \nscore is: " + localStorage.MAX_score;
