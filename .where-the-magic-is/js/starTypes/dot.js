export function drawDotStar(ctx, star, color) {
  // Drawing a dot

  /* ctx.fillStyle = `rgba(240, 198, 46, ${star.alpha})`;*/
  ctx.fillStyle = `${color.slice(0, -1)}, ${star.alpha})`;
  ctx.beginPath();
  ctx.arc(0, 0, star.size, 0, 2 * Math.PI); // Draw at origin
  ctx.fill();
}
