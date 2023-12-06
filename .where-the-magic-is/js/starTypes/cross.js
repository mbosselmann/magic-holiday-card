export function drawCrossStar(ctx, star, color) {
  ctx.strokeStyle = `${color.slice(0, -1)}, ${star.alpha})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-star.size, 0);
  ctx.lineTo(star.size, 0);
  ctx.moveTo(0, -star.size);
  ctx.lineTo(0, star.size);
  ctx.stroke();
}
