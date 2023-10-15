import "./style.css";
import { createBox, appear, SPEED, SET_SPEED } from "./box";
import { createHearts, injectHearts, updateHearts, Heart } from "./hearts";
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

const hearts = createHearts();
const heartsMapper = hearts.map((heart: Heart, index) => {
  return {
    status: "full",
    index,
    heart,
  };
});

injectHearts(hearts);

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
      for (let i = heartsMapper.length - 1; i >= 0; i--) {
        if (heartsMapper[i].status === "full") {
          heartsMapper[i].status = "empty";
          updateHearts(hearts, i);
          break;
        }
        if (i === 0) {
          console.log("game over");
          isStarted = false;
          const starter = document.querySelector(".start") as HTMLButtonElement;
          starter.style.display = "block";
          clearInterval(interval);
          return;
        }
      }

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
