export function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRgbFromColorName(colorName) {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = colorName;
  document.body.appendChild(tempDiv);

  const rgbColor = getComputedStyle(tempDiv).color;

  document.body.removeChild(tempDiv);

  return rgbColor;
}
