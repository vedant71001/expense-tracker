import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import { FilterExpense } from "../FilterExpense";
import { ExpensesType } from "../../constants/prop.type";

export const Expenses = (props: ExpensesType) => {
  return (
    <div className="expenses-list">
      <FilterExpense />
      {props.expenses.length === 0 && <h3>No Expenses Found</h3>}
      {props.expenses.length>0 && props.expenses.map((expense) => (
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
