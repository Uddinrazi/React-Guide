import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { lable: "Jan", value: "0" },
    { lable: "Feb", value: "0" },
    { lable: "Mar", value: "0" },
    { lable: "Apr", value: "0" },
    { lable: "May", value: "0" },
    { lable: "June", value: "0" },
    { lable: "July", value: "0" },
    { lable: "Aug", value: "0" },
    { lable: "Sep", value: "0" },
    { lable: "Oct", value: "0" },
    { lable: "Nov", value: "0" },
    { lable: "Dec", value: "0" },
  ];

  for (let expense in props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPonts={chartDataPoints} />;
};

export default ExpenseChart;
