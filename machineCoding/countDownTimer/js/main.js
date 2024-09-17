import { CountDownTime } from "../components/CountDownTime.js";
import { PauseReset } from "../components/PauseReset.js";
import { TimerInput } from "../components/TimerInput.js";
const countDownContainer = document.getElementById("countDown-container");
const inputContainer = document.getElementById("clock-input-container");
let time;
let hr;
let min;
let sec;
const render = () => {
  inputContainer.innerHTML = TimerInput();
  const inputTime = document.getElementById("input-clock");
  const startBtn = document.getElementById("start-btn");
  const pauseResetContainer = document.getElementById("pause-reset");
  pauseResetContainer.innerHTML = PauseReset();
  const pauseBtn = document.getElementById("pause-btn");
  const resetBtn = document.getElementById("reset-btn");

  let intervalID;
  let isPaused = false;
  const updatedCount = () => {
    hr = Math.floor(time / 3600)
      .toString()
      .padStart(2, 0);

    min = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, 0);
    sec = (time - hr * 3600 - min * 60).toString().padStart(2, 0);
    time = time - 1;
    countDownContainer.innerHTML = CountDownTime(hr, min, sec);
  };
  const startTime = () => {
    console.log(isPaused);
    if (!isPaused) {
      time = Number(inputTime.value);
    }

    if (intervalID) clearInterval(intervalID);

    intervalID = setInterval(updatedCount, 1000);
  };

  const pause = () => {
    console.log(isPaused);
    if (!isPaused) {
      pauseBtn.innerHTML = "RESUME";
      clearInterval(intervalID);
    } else {
      startTime();
      pauseBtn.innerHTML = "PAUSE";
    }
    isPaused = !isPaused;
  };
  const reset = () => {
    time = Number(inputTime.value);
  };
  pauseBtn.addEventListener("click", pause);
  resetBtn.addEventListener("click", reset);
  startBtn.addEventListener("click", startTime);
};

render();
