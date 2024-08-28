/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const number = generateRandomNumber();
  const suit = generateRandomSuit();

  const cardColor = suit === "♦" || suit === "♥" ? "red" : "black";

  let top = document.querySelector(".top");
  top.innerHTML = suit;
  top.style.color = cardColor;

  let setNumber = document.querySelector(".number");
  setNumber.innerHTML = number;
  setNumber.style.color = cardColor;

  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = suit;
  bottom.style.color = cardColor;
};

const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const generateRandomSuit = () => {
  const suits = ["♦", "♥", "♠", "♣"];
  const indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
