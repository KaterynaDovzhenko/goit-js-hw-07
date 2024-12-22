function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClickBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorName = document.querySelector(".color");

onClickBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
  console.log(colorName);
});
