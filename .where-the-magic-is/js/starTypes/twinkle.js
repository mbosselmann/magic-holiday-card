export function drawTwinkleStar(ctx, star, color) {
  // let gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, star.size);
  // gradient.addColorStop(0, "white"); // Innenfarbe
  // gradient.addColorStop(1, "gold"); // Außenfarbe

  // ctx.fillStyle = gradient;
  ctx.fillStyle = `${color.slice(0, -1)}, ${star.alpha})`;

  // Zeichne einen vierzackigen Stern
  const points = 4;
  const step = Math.PI / points;
  const outerRadius = star.size;
  const innerRadius = star.size / 2;

  ctx.beginPath();
  for (let i = 0; i < 2 * points; i++) {
    // Wechsel zwischen Außen- und Innenradius für die Sternspitzen
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
