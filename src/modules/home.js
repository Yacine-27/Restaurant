import "./home.css";
import HealthyFood from "../assets/images/healthy-food.jpg";

import FastDelivery from "../assets/images/delivery.jpg";

import MoneyMachine from "../assets/images/money-machine.jpg";

class Card {
  constructor(imageSource, title, subTitle) {
    this.imageSource = imageSource;
    this.title = title;
    this.subTitle = subTitle;
  }
  createCard() {
    return `<div class="card">
          <div class="img-container">
            <img
              src="${this.imageSource}"
              alt="${this.title}"
              class="main-img"
            />
          </div>
          <h2 class="main-title">${this.title}</h2>
          <p class="main-subtitle">
            ${this.subTitle}
          </p>
        </div>`;
  }
}

const cards = [
  new Card(
    HealthyFood,
    "A healthy dish",
    "We provide the most healthy food in the country"
  ),
  new Card(
    FastDelivery,
    "Fast Delivery",
    "Just order and we'll get to you anywhere"
  ),
  new Card(
    MoneyMachine,
    "Earn money with us",
    "Check our loyalty program to earn money with us"
  ),
];

export default function () {
  return `
  ${cards.map((card) => card.createCard()).join("")}
  `;
}
