export const saveExpense = (expense) => {

  localStorage.setItem("expense", JSON.stringify(expense));
};
export const loadExpense = () => {
  const expense = localStorage.getItem("expense");
  return expense ? JSON.parse(expense) : [];
};
