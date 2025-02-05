import "./nav.css";

class Button {
  constructor(buttonName, buttonClass = "") {
    this.buttonName = buttonName;
    this.buttonClass = buttonClass;
  }
  createButton() {
    return `<button data-element='${this.buttonName.toLowerCase()}-content' class="${
      this.buttonClass
    } button">${this.buttonName}</button>`;
  }
}

const buttons = [
  new Button("Main", "home-button"),
  new Button("Menu", "menu-button"),
  new Button("About", "about-button"),
];
const Logo = () => `
  <div class="logo">
    <svg height="80px" width="80px" viewBox="0 0 504 504" xmlns="http://www.w3.org/2000/svg">
      <circle fill="#324a5e" cx="252" cy="252" r="252"/>
      <circle fill="#ffffff" cx="252" cy="252" r="104.9"/>
      <circle fill="#e6e9ee" cx="252" cy="252" r="59.9"/>
      <path fill="#ffffff" d="M132.8,211.2l-0.1-49.7c0-2.9-2.3-5.2-5.2-5.2s-5.2,2.3-5.2,5.2v37.6h-10.8v-37.6
        c0-2.9-2.3-5.2-5.2-5.2c-2.9,0-5.2,2.3-5.2,5.2v37.6H90.4v-37.6c0-2.9-2.3-5.2-5.2-5.2c-2.9,0-5.2,2.3-5.2,5.2l0,49.7l16,23.9
        l-2.5,36.6h26.2l-2.5-36.6L132.8,211.2z"/>
      <path fill="#ff7058" d="M89.5,329.3c-0.8,9.9,7,18.4,17,18.4s17.8-8.5,17-18.4l-3.9-57.7H93.4L89.5,329.3z"/>
      <path fill="#ffffff" d="M407.1,232.4c10-6,16.9-20.1,16.9-36.4c0-21.9-12.5-39.6-27.8-39.6s-27.8,17.7-27.8,39.6
        c0,16.5,7.1,30.6,17.2,36.6l-2.5,39.1h26.7L407.1,232.4z"/>
      <path fill="#ff7058" d="M383,271.6l-3.6,56.2c-0.8,9.9,7,18.4,17,18.4s17.8-8.5,17-18.4l-3.6-56.2H383z"/>
    </svg>
  </div>
`;

const navBar = () => `
  <nav>
    ${Logo()}
    <div class="nav-buttons">
      ${buttons.map((button) => button.createButton()).join("")}
    </div>
  </nav>
`;

export default navBar;
