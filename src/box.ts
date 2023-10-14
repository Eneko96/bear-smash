export let SPEED = 1000;

export const SET_SPEED = (speed: number) => {
  SPEED = speed;
};

export const createBox = (rows: number, columns: number) => {
  const wrapper = document.querySelector(".boxer") as HTMLDivElement;
  const boxes = new Map<number, HTMLDivElement>();
  for (let i = 0; i < rows * columns; i++) {
    const element = document.createElement("div");
    element.classList.add("box");
    wrapper.appendChild(element);
    wrapper.id = `box-${i}`;
    boxes.set(i, element);
  }
  return boxes;
};

export const appear = (boxes: Map<number, HTMLDivElement>) => {
  if (window.active) {
    const box = boxes.get(window.active);
    box?.classList.remove("appear");
  }
  const rand = Math.floor(Math.random() * boxes.size);
  const box = boxes.get(rand);
  box?.classList.add("appear");
  window.active = rand;
  setTimeout(() => {
    box?.classList.remove("appear");
  }, SPEED - 100);
};
