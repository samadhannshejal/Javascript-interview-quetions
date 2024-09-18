import { inputExpense } from "./components/InputExpense.js";
import { EXPENSE_OPERATION } from "./utils/expenseOperation.js";
import { loadExpense } from "./utils/localStorage.js";

const expenseContainer = document.getElementById("expense-container");
const expenseList = document.getElementById("expense-list");

const expenseObj = new EXPENSE_OPERATION();
const render = () => {
  expenseContainer.innerHTML = inputExpense();
  const inputName = document.getElementById("input-expense");
  const category = document.getElementById("categories");
  const money = document.getElementById("money-expense");
  const date = document.getElementById("date");
  document.getElementById("add-expense").addEventListener("click", () => {
    const expenseName = inputName.value;
    const expenseCategory = category.value;
    const expenseMoney = money.value;
    const expenseDate = date.value;
    expenseObj.addExpense(
      expenseName,
      expenseCategory,
      expenseMoney,
      expenseDate
    );
    renderExpense();
    totalExpense();
  });
  expenseList.addEventListener("click", (event) => {
    if (event.target && event.target.id === "delete") {
      expenseObj.deleteExpense(event.target.dataset.id);
    }

    totalExpense();
    renderExpense();
  });
  totalExpense();
};

const renderExpense = () => {
  expenseList.innerHTML = `
  <div  id="expense-table-container">
  <table>
  <thead>
  <tr>
  <th>Name</th>
  <th>Category</th>
  <th>Date</th>
  <th>Amount</th>
  <th>Delete</th>
  <th>Edit</th>
  </tr>
  </thead>
    <tbody> 
        ${loadExpense()
          .map(
            (item) => `
            <tr>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.date}</td>
            <td>${item.amount}</td>
            <td id="delete" data-id=${item.id}>🗑️</td>
            <td id="edit">✏️</td>
            </tr>
            `
          )
          .join("")}
        </tbody>
        </table>
        </div>

   `;
};

const totalExpense = () => {
  document.getElementById("total-expense").innerHTML = "Total Expense ➡️ "+
    expenseObj.totalExpense() +" RS";
};
render();
renderExpense();
