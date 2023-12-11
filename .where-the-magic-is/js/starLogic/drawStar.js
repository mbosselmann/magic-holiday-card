import { drawCrossStar } from "../starTypes/cross.js";
import { drawDotStar } from "../starTypes/dot.js";
import { drawTwinkleStar } from "../starTypes/twinkle.js";

export function drawStar(ctx, star, color) {
  ctx.save();
  ctx.translate(star.x, star.y);

  ctx.rotate((star.rotation * Math.PI) / 180);
  ctx.globalCompositeOperation = "lighter";
  ctx.shadowBlur = 30;
  ctx.shadowColor = "white";

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
