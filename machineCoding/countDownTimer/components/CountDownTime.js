import { PauseReset } from "./PauseReset.js";

export const CountDownTime = (hr = 0, min = 0, sec = 0) => {
  return `
  <div class="inner-countDown-container">
    <div class="time">${hr}</div>
    <div class="time">${min}</div>
    <div class="time">${sec}</div> 
    </div>
    
  `;
};
