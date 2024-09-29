"use strict";
/*
PSEUDOCODE
1 When the user click the increase button, the number should increment by 1 and the color should change to green i++
2 On the other hand when the user click the decrease button, the number should decrement by one and once it reach to 0,
the color should change to original and the -numbers should turn into red color
3 When click reset, the number should reset back to 0
*/
let counter = 0;
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const number = document.querySelector(".number");
const colorChange = function () {
  if (counter === 0) {
    number.style.color = "black";
  }
  if (counter < 0) {
    number.style.color = "red";
  }
};
const showNumber = function () {
  number.innerHTML = counter;
};
increaseButton.addEventListener("click", function () {
  counter++;
  number.style.color = "green";
  showNumber();
  colorChange();
});
decreaseButton.addEventListener("click", function () {
  counter--;
  showNumber();
  colorChange();
});
resetButton.addEventListener("click", function () {
  counter = 0;
  showNumber();
  number.style.color = "black";
});
