import "./style.css";
import { createBox, appear, SPEED, SET_SPEED } from "./box";

const boxes = createBox(3, 3);
let interval: any;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("appear")) {
      box.classList.remove("appear");
      box.classList.add("nice");
      clearInterval(interval);
      SET_SPEED(SPEED - 100);
      console.log(SPEED);
      setTimeout(() => {
        box.classList.remove("nice");
        start();
      }, 1000);
    } else {
      const wrapper = document.querySelector(".boxer") as HTMLDivElement;
      wrapper.classList.add("shake");
      box.classList.add("bad");
      clearInterval(interval);
      setTimeout(() => {
        wrapper.classList.remove("shake");
        box.classList.remove("bad");
        start();
      }, 1000);
    }
  });
});

const start = () => {
  interval = setInterval(() => {
    appear(boxes);
  }, SPEED);
};

start();
