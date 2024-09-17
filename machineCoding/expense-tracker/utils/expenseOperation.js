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
    const expense=loadExpense()
    expense.push(newExpense)
    saveExpense(expense);
  }
  deleteExpense() {}
  editExpense() {}
}
