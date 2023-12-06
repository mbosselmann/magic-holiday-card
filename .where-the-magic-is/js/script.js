import { calculateAmountOfStars, getRgbFromColorName } from "./helper.js";
import { animateStars } from "./starLogic/animateStars.js";
import { createStars } from "./starLogic/createStars.js";

const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.toggle("flipcard");
});

let timeoutId = null;

function setupCanvas(amount, color) {
  const amountOfStars = calculateAmountOfStars(amount);
  const canvas = document.querySelector("canvas");
  const sparkleContainer = document.querySelector(".front");
  const ctx = canvas.getContext("2d");
  canvas.width = sparkleContainer.offsetWidth * 2;
  canvas.height = sparkleContainer.offsetHeight * 2;
  const rgbColor = getRgbFromColorName(color);
  let stars = createStars(ctx, amountOfStars, 40);
  animateStars(ctx, stars, rgbColor, 40);

  function resizeCanvas() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    stars.length = 0;

    canvas.width = sparkleContainer.offsetWidth * 2;
    canvas.height = sparkleContainer.offsetHeight * 2;

    timeoutId = setTimeout(() => {
      stars = createStars(ctx, amountOfStars, 40);
      animateStars(ctx, stars, rgbColor, 40);
    }, 1000);
  }
  window.addEventListener("resize", resizeCanvas);
}

setupCanvas(200, "white");
