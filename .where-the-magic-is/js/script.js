import { getRgbFromColorName } from "./helper.js";
import { animateStars } from "./starLogic/animateStars.js";
import { createStars } from "./starLogic/createStars.js";

const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.toggle("flipcard");
});

let timeoutId = null;

function setupCanvas(amount, color) {
  const canvas = document.querySelector("canvas");
  const sparkleContainer = document.querySelector(".front");
  const ctx = canvas.getContext("2d");
  canvas.width = sparkleContainer.offsetWidth * 2;
  canvas.height = sparkleContainer.offsetHeight * 2;
  const rgbColor = getRgbFromColorName(color);
  let stars = createStars(ctx, amount, 40);
  animateStars(ctx, stars, rgbColor);

  function resizeCanvas() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    stars.length = 0;

    canvas.width = sparkleContainer.offsetWidth * 2;
    canvas.height = sparkleContainer.offsetHeight * 2;

    timeoutId = setTimeout(() => {
      stars = createStars(ctx, amount, 40);
      animateStars(ctx, stars, rgbColor);
    }, 1000);
  }

  // Set initial canvas size
  // resizeCanvas();

  // Add resize event listener
  window.addEventListener("resize", resizeCanvas);
}

setupCanvas(100, "white");
