const front = document.querySelector('[data-js="front"]');

const card = document.querySelector(".card");
card.addEventListener("click", () => {
  card.classList.toggle("flipcard");
});

let animationHandle = null;
let timeoutId = null;

function createStar(x, y, size) {
  const types = ["dot", "cross"];
  const type = types[Math.floor(Math.random() * types.length)];
  return {
    x: x,
    y: y,
    type: type,
    size: size,
    maxSize: size * 1.5,
    minSize: size * 0.5,
    alpha: 0,
    maxAlpha: 1,
    minAlpha: 0.4,
    growing: true,
    animationSpeed: 0.01,
    rotation: 0, // Rotation in degrees
    rotationSpeed: 3 // Random rotation speed
  };
}

function updateStar(star) {
  // Calculate new size and alpha in a single step
  const delta = star.growing ? star.animationSpeed : -star.animationSpeed;
  star.size += delta;
  star.alpha += delta;

  // Clamp values to their min/max and reverse the growing direction if needed
  if (star.size > star.maxSize || star.size < star.minSize) {
    star.size = Math.max(star.minSize, Math.min(star.size, star.maxSize));
    star.growing = !star.growing;
  }

  star.alpha = Math.max(star.minAlpha, Math.min(star.alpha, star.maxAlpha));

  // Update rotation for crosses
  if (star.type === "cross") {
    star.rotation += star.rotationSpeed; // Increment the rotation angle
    if (star.rotation >= 360) {
      star.rotation -= 360; // Reset rotation to avoid overflow
    }
  }
}

function drawStar(ctx, star, color) {
  ctx.save();
  // Translate context to star's position
  ctx.translate(star.x, star.y);

  // Rotate around the star's center
  ctx.rotate((star.rotation * Math.PI) / 180); // Convert degrees to radians
  ctx.globalCompositeOperation = "lighten";
  if (star.type === "dot") {
    // Drawing a dot

    /* ctx.fillStyle = `rgba(240, 198, 46, ${star.alpha})`;*/
    ctx.fillStyle = `${color.slice(0, -1)}, ${star.alpha})`;
    ctx.beginPath();
    ctx.arc(0, 0, star.size, 0, 2 * Math.PI); // Draw at origin
    ctx.fill();
  } else if (star.type === "cross") {
    // Drawing a cross
    ctx.strokeStyle = `${color.slice(0, -1)}, ${star.alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-star.size, 0);
    ctx.lineTo(star.size, 0);
    ctx.moveTo(0, -star.size);
    ctx.lineTo(0, star.size);
    ctx.stroke();
  }

  ctx.restore();
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function createStars(ctx, amount) {
  let stars = [];
  for (let i = 0; i < amount; i++) {
    const x = getRandom(0, ctx.canvas.width);
    const y = getRandom(0, ctx.canvas.height);
    const size = getRandom(2, 4);
    stars.push(createStar(x, y, size));
  }
  return stars;
}

function animateStars(ctx, stars, color) {
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

function setupCanvas(amount, color) {
  const canvas = document.querySelector("canvas");
  const sparkleContainer = document.querySelector(".front");
  const ctx = canvas.getContext("2d");
  canvas.width = sparkleContainer.offsetWidth;
  canvas.height = sparkleContainer.offsetHeight;
  const rgbColor = getRgbFromColorName(color);
  console.log(`${rgbColor.slice(0, -1)}, value)`);
  let stars = createStars(ctx, amount);
  animateStars(ctx, stars, rgbColor);

  function resizeCanvas() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    stars.length = 0;
    canvas.width = sparkleContainer.offsetWidth;
    // canvas.height = 0; // work around for correct resizing of canvas height
    canvas.height = sparkleContainer.offsetHeight;

    timeoutId = setTimeout(() => {
      stars = createStars(ctx, amount);
      animateStars(ctx, stars, rgbColor);
    }, 1000);
  }

  // Set initial canvas size
  // resizeCanvas();

  // Add resize event listener
  window.addEventListener("resize", resizeCanvas);
}

setupCanvas(40, "red");

function getRgbFromColorName(colorName) {
  // Create a temporary DOM element
  let tempDiv = document.createElement("div");

  // Set the color of the element to the specified color name
  tempDiv.style.color = colorName;

  // Append the element to the body to ensure the style is applied
  document.body.appendChild(tempDiv);

  // Use getComputedStyle to get the color in RGB format
  let rgbColor = getComputedStyle(tempDiv).color;

  // Remove the temporary element from the document
  document.body.removeChild(tempDiv);

  return rgbColor;
}
