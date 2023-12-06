export function drawDotStar(ctx, star, color) {
  ctx.fillStyle = `${color.slice(0, -1)}, ${star.alpha})`;
  ctx.beginPath();
  ctx.arc(0, 0, star.size, 0, 2 * Math.PI);
  ctx.fill();
}
