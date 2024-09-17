import { CountDownTime } from "../components/CountDownTime.js";
import { PauseReset } from "../components/PauseReset.js";
import { TimerInput } from "../components/TimerInput.js";
import { Timer } from "../utils/Timer.js";
const countDownContainer = document.getElementById("countDown-container");
const inputContainer = document.getElementById("clock-input-container");

const render = () => {
  inputContainer.innerHTML = TimerInput();
  const inputTime = document.getElementById("input-clock");
  const startBtn = document.getElementById("start-btn");
  const pauseResetContainer = document.getElementById("pause-reset");
  pauseResetContainer.innerHTML = PauseReset();
  const pauseBtn = document.getElementById("pause-btn");
  const resetBtn = document.getElementById("reset-btn");
  
  const updateDisplay=(hr,min,sec)=>{
    
    countDownContainer.innerHTML = CountDownTime(hr, min, sec);
  }
  const timers=new Timer(updateDisplay)
  
 

  const pause = () => {
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
  startBtn.addEventListener("click", timers.start(inputTime.value));
};

render();
