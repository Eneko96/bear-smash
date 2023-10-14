import "./style.css";
import { createBox, appear, SPEED, SET_SPEED } from "./box";
import {
  SCORE,
  increaseScore,
  getHighScore,
  setHighScore,
  initialHighScore,
  highScore,
  score,
} from "./counter";
let isStarted = false;

const boxes = createBox(3, 3);
let interval: ReturnType<typeof setInterval>;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("appear")) {
      box.classList.remove("appear");
      box.classList.add("nice");
      increaseScore();
      score.innerText = SCORE.toString();
      if (SCORE > getHighScore()) {
        setHighScore(SCORE);
        highScore.innerText = SCORE.toString();
      }
      clearInterval(interval);
      SET_SPEED(SPEED - 100);
      console.log(SPEED);
      setTimeout(() => {
        console.log("nice");
        box.classList.remove("nice");
        start();
      }, 1000);
    } else {
      const wrapper = document.querySelector(".boxer") as HTMLDivElement;
      wrapper.classList.add("shake");
      box.classList.add("bad");
      clearInterval(interval);
      console.log("clear interval");
      setTimeout(() => {
        console.log("shake");
        wrapper.classList.remove("shake");
        box.classList.remove("bad");
        start();
      }, 1000);
    }
  });
});

const start = () => {
  interval = setInterval(() => {
    console.log("appear");
    appear(boxes);
  }, SPEED);
};

document.addEventListener("DOMContentLoaded", () => {
  const starter = document.querySelector(".start") as HTMLButtonElement;
  highScore.innerText = String(initialHighScore());

  starter.addEventListener("click", () => {
    if (!isStarted) {
      isStarted = true;
      start();
      starter.style.display = "none";
    }
  });
});
