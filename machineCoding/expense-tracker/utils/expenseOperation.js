import { loadExpense, saveExpense } from "./localStorage.js";

export class EXPENSE_OPERATION {
  constructor() {}
  addExpense(name, category, amount, date) {
    const newExpense = {
      id: crypto.randomUUID(),
      name,
      category,
      amount,
      date,
    };
    const expense = loadExpense();
    expense.push(newExpense);
    saveExpense(expense);
  }
  deleteExpense(id) {
    const expenses = loadExpense();
    const updatedExpense = expenses.filter((item) => item.id !== id);
    saveExpense(updatedExpense);
  }

  editExpense() {}

  totalExpense(){
     const expense=loadExpense();
     const total=expense.reduce((acc,item,idx)=>acc+Number(item.amount),0)
     return total
    }
}
