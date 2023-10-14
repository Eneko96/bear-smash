const ADDER = 100;
export const score = document.querySelector("#score") as HTMLSpanElement;
export const highScore = document.querySelector(
  "#high-score",
) as HTMLSpanElement;
export let SCORE = 0;
export const setScore = (score: number) => (SCORE = score);
export const getScore = () => SCORE;
export const increaseScore = () => setScore(SCORE + ADDER);

export const initialHighScore = () => {
  const highScore = localStorage.getItem("highScore");
  if (highScore) {
    return Number(highScore);
  }
  return 0;
};

export const setHighScore = (score: number) => {
  localStorage.setItem("highScore", String(score));
};

export const getHighScore = () => {
  const highScore = localStorage.getItem("highScore");
  if (highScore) {
    return Number(highScore);
  }
  return 0;
};
