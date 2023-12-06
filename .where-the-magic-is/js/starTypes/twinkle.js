export function drawTwinkleStar(ctx, star, color) {
  ctx.fillStyle = `${color.slice(0, -1)}, ${star.alpha})`;

  const points = 4;
  const step = Math.PI / points;
  const outerRadius = star.size;
  const innerRadius = star.size / 2;

  ctx.beginPath();
  for (let i = 0; i < 2 * points; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = radius * Math.cos(i * step);
    const y = radius * Math.sin(i * step);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fill();
}
