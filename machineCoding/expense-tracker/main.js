import { inputExpense } from "./components/InputExpense.js";
import { EXPENSE_OPERATION } from "./utils/expenseOperation.js";

const expenseContainer = document.getElementById("expense-container");
const render = () => {
  const expenseObj=new EXPENSE_OPERATION()
  expenseContainer.innerHTML = inputExpense();
  const inputName = document.getElementById("input-expense");
  const category = document.getElementById("categories");
  const money = document.getElementById("money-expense");
  const date = document.getElementById("date");
  document.getElementById("add-expense").addEventListener("click", () => {
    const expenseName=inputName.value
    const expenseCategory=category.value
    const expenseMoney=money.value
    const expenseDate=date.value
    expenseObj.addExpense(expenseName,expenseCategory,expenseCategory,expenseDate)
    renderExpense()
  });
};
const renderExpense=()=>{
  
}
render();
