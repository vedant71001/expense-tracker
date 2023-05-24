import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import { FilterExpense } from "../FilterExpense/FilterExpense";
import { Expense, ExpensesType } from "../../constants/prop.type";
import { useState } from "react";
import { FilterYears } from "../../constants/constants";

export const Expenses = (props: ExpensesType) => {

  const [yearSelected,setYearSelected] = useState(FilterYears[FilterYears.length-1]);

  const filterExpenseHandler = (year : string) => {
    setYearSelected(year)
  }

  let filteredExpenses : Expense[] = [];

  for(const item of props.expenses){
    if(item.date.getFullYear().toString() === yearSelected){
      filteredExpenses.push(item);
    }
  }

  return (
    <div className="expenses-list">
      <FilterExpense onFilterSelect={filterExpenseHandler} />
      {filteredExpenses.length === 0 && <h3 className="m-3 text-center">No Expenses Found</h3>}
      {filteredExpenses.length>0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};
