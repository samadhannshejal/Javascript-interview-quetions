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

const groupExpensesByCategory = (data) => {
  const categoryTotals = {};

  data.forEach(item => {
    const category = item.category;
    const amount = parseFloat(item.amount);

    if (categoryTotals[category]) {
      categoryTotals[category] += amount;
    } else {
      categoryTotals[category] = amount;
    }
  });

  return categoryTotals;
};

const expenseData = groupExpensesByCategory(loadExpense());

// Get the category names and their respective total amounts
const categories = Object.keys(expenseData);
const amounts = Object.values(expenseData);

// Function to create the pie chart
const createChart = () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories, // Categories as labels
      datasets: [{
        label: 'Expense Distribution',
        data: amounts, // Amounts as data for the pie chart
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Expense Distribution by Category'
        }
      }
    }
  });
};
window.onload = createChart;


render();
renderExpense();
