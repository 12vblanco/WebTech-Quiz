const scoreText = document.querySelector(".score-text");

scoreText.innerText =
  "Congratulations! \n Your score is: " + localStorage.lastScore;
