import fullHeart from "./full-heart.svg";
import emptyHeart from "./heart.svg";
export type Heart = typeof fullHeart;

export const createHearts = () => {
  const hearts = [];
  for (let i = 0; i < 3; i++) {
    hearts.push(fullHeart);
  }
  return hearts;
};

export const updateHearts = (hearts: Heart[], index: number) => {
  hearts[index] = hearts[index] === fullHeart ? emptyHeart : fullHeart;
  const hContainer = document.querySelector(".hearts-container")!;
  hContainer.innerHTML = "";
  hearts.forEach((heartSrc: Heart) => {
    const heart = new Image(); // Create a new image element
    heart.src = heartSrc; // Set the source to the imported SVG
    hContainer.appendChild(heart);
  });
};

export const injectHearts = (hearts: Heart[]) => {
  const hContainer = document.createElement("div");
  hContainer.classList.add("hearts-container");
  document.body.appendChild(hContainer);
  hearts.forEach((heartSrc: Heart) => {
    const heart = new Image(); // Create a new image element
    heart.src = heartSrc; // Set the source to the imported SVG
    hContainer.appendChild(heart);
  });
};
