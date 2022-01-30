import * as Cards from "./cards.js";

function oneOfTen() {
  const answer1 = document.querySelector(".ans1");
  answer1.innerHTML = Cards.beautyCard.choice1;
  const answer2 = document.querySelector(".ans2");
  answer2.innerHTML = Cards.beautyCard.choice2;
  const answer3 = document.querySelector(".ans3");
  answer3.innerHTML = Cards.beautyCard.choice3;
  const answer4 = document.querySelector(".ans4");
  answer4.innerHTML = Cards.beautyCard.choice4;
}
