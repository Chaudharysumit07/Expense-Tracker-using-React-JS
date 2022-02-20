import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
 

  const expenseFilterHandler = (expenseYear) => {
    setFilterYear(expenseYear);
    
    // console.log(props.items.filter(expense => (expense.date.getFullYear()==filterYear)));
  };

   const filteredExpenses=props.items.filter(expense =>
    { return expense.date.getFullYear().toString()===filterYear});


    
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onExpenseFilter={expenseFilterHandler}
      />
      <ExpensesChart  expenses={filteredExpenses}/>
      <ExpensesList  items={filteredExpenses} />
      
    </Card>
  );
};

export default Expenses;
