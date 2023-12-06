import { drawStar } from "./drawStar.js";
import { checkCoordinates } from "./createStars.js";

let animationHandle = null;

export function animateStars(ctx, stars, color, minDistance) {
  if (animationHandle) {
    cancelAnimationFrame(animationHandle);
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  stars.forEach((star, index) => {
    updateStar(star);
    drawStar(ctx, star, color);

    // Check if the star's animation has ended
    if (star.animationEnded) {
      const newStar = checkCoordinates(stars, ctx, minDistance);

      stars[index] = newStar;
    }
  });

  animationHandle = requestAnimationFrame(() =>
    animateStars(ctx, stars, color)
  );
}

function updateStar(star) {
  // Calculate new size
  const delta = star.growing ? star.animationSpeed : -star.animationSpeed;
  star.size += delta;

  // Reverse direction at size limits and mark animation end if needed
  if (star.size > star.maxSize) {
    star.size = star.maxSize;
    star.growing = false;
  } else if (star.size < star.minSize) {
    star.size = star.minSize;
    star.growing = true;
    star.animationEnded = true; // Mark the end of animation
  }

  // Update opacity
  const targetAlpha = star.growing ? star.maxAlpha : star.minAlpha;
  star.alpha += (targetAlpha - star.alpha) * 0.1;

  // Ensure opacity stays within bounds
  star.alpha = Math.max(star.minAlpha, Math.min(star.alpha, star.maxAlpha));

  // Update rotation for certain star types
  if (star.type === "cross" || star.type === "twinkle") {
    star.rotation += star.rotationSpeed;
    if (star.rotation >= 360) {
      star.rotation -= 360;
    }
  }
}
