let colorSpan = document.querySelector(".color");
let btn = document.querySelector("#colorBtn");

let switchColor = () => {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
};

let getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn.addEventListener("click", switchColor);
