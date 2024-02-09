import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  

  if (props.item.length === 0) {
    return <h2 className="expense-list__fallback"> Found No Expense </h2>;
  }

  return (
    <ul className="expense-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
