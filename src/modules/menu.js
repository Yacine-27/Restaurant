import "./menu.css";
import Dish1 from "../assets/images/dishes/dish1.jpg";
import Dish2 from "../assets/images/dishes/dish2.jpg";
import Dish3 from "../assets/images/dishes/dish3.jpg";

class Dish {
  constructor(title, imageSource, isMain = false) {
    this.title = title;
    this.imageSource = imageSource;
    this.isMain = isMain;
  }
  createDish() {
    return `
    <div class="menu-item ${this.isMain ? "main-item" : ""} ">
      <div class="menu-img-container">
        <img src=${this.imageSource} alt="${this.title}" />
        <span>${this.title}</span>
      </div>
    </div>
    `;
  }
}

const dishes = [
  new Dish("Fish", Dish1, true),
  new Dish("Potatoes", Dish2),
  new Dish("Meat", Dish3),
];

export default function () {
  return `
            <h2>What are we cooking ?</h2>
            <div class="menu-items">
                ${dishes.map((dish) => dish.createDish()).join("")}
              </div>
          `;
}
