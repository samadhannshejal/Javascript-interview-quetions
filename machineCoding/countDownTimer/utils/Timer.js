export class Timer {
  constructor() {
    this.time = 0;
    // this.hr;
    // this.min;
    // this.sec;
    this.intervalID = null;
    this.isPaused = false;
    this.updateDisplay=updateDisplay
  }
  updatedCount() {
     hr = Math.floor(time / 3600)
      .toString()
      .padStart(2, 0);

    min = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, 0);
    sec = (time - hr * 3600 - min * 60).toString().padStart(2, 0);
    time = time - 1;
   this.updateDisplay(hr, min, sec);
  }
  start(inputTime) {
    if (!this.isPaused) {
      this.time = Number(inputTime.value);
    }

    if (this.intervalID) clearInterval(this.intervalID);

    this.intervalID = setInterval(this.updatedCount, 1000);
  }
}
