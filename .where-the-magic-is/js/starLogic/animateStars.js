import { drawStar } from "./drawStar.js";

let animationHandle = null;

export function animateStars(ctx, stars, color) {
  if (animationHandle) {
    cancelAnimationFrame(animationHandle);
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  stars.forEach((star) => {
    updateStar(star);
    drawStar(ctx, star, color);
  });
  animationHandle = requestAnimationFrame(() =>
    animateStars(ctx, stars, color)
  );
}

function updateStar(star) {
  // Calculate new size and alpha in a single step
  const delta = star.growing ? star.animationSpeed : -star.animationSpeed;
  star.size += delta;

  const targetAlpha = star.growing ? star.maxAlpha : star.minAlpha;
  star.alpha += (targetAlpha - star.alpha) * 0.1; // Langsamer Übergang zur Ziel-Opazität

  // Clamp values to their min/max and reverse the growing direction if needed
  if (star.size > star.maxSize || star.size < star.minSize) {
    star.size = Math.max(star.minSize, Math.min(star.size, star.maxSize));
    star.growing = !star.growing;
  }

  star.alpha = Math.max(star.minAlpha, Math.min(star.alpha, star.maxAlpha));

  // Update rotation for crosses
  if (
    star.type === "cross" ||
    star.type === "twinkle" ||
    star.type === "burst"
  ) {
    star.rotation += star.rotationSpeed; // Increment the rotation angle
    if (star.rotation >= 360) {
      star.rotation -= 360; // Reset rotation to avoid overflow
    }
  }
}
