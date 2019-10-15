// gets the total amount of expenses

export default (expenses) => {
  return expenses
      .map((expense) => expense.amount)
      .reduce((acc, currentValue) => acc + currentValue, 0);
}