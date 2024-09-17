import { Start } from "./Start.js";

export const TimerInput = () => {
  return `
     <div>
      <input type="number" placeholder=" Enter Time" id="input-clock" min="1"/> ${Start()}
     </div>
   `;
};
