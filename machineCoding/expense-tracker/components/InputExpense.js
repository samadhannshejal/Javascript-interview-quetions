import { categories } from "../categories/Categories.js";
import { dateExpense } from "./dateExpense.js";
import { moneyExpense } from "./moneyExpense.js";

export const inputExpense = () => {
  return `
      <input type="text" id="input-expense" placeholder="Enter Name"/>
      ${categories()}
      ${moneyExpense()}
      ${dateExpense()}
      <button  id="add-expense">Add Expense</button>
    `;
};
