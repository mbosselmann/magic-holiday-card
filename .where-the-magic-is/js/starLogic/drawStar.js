import { drawCrossStar } from "../starTypes/cross.js";
import { drawDotStar } from "../starTypes/dot.js";
import { drawTwinkleStar } from "../starTypes/twinkle.js";

export function drawStar(ctx, star, color) {
  ctx.save();
  // Translate context to star's position
  ctx.translate(star.x, star.y);

  // Rotate around the star's center
  ctx.rotate((star.rotation * Math.PI) / 180); // Convert degrees to radians
  ctx.globalCompositeOperation = "lighter";
  ctx.shadowBlur = 30; // Adjust for desired glow size
  ctx.shadowColor = "white"; // Use star's color for the glow

  switch (star.type) {
    case "dot":
      drawDotStar(ctx, star, color);
      break;
    case "cross":
      drawCrossStar(ctx, star, color);
      break;
    case "twinkle":
      drawTwinkleStar(ctx, star, color);
      break;
  }
  ctx.globalCompositeOperation = "source-over";
  ctx.restore();
}
