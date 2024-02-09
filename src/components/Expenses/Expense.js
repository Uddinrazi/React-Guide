import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredStateHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpenses > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter slected={filteredYear} onChange={filteredStateHandler} />
      {expenseContent}
    </Card>
  );
}

export default Expense;
