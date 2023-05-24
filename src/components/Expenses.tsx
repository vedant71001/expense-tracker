import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesType } from "./prop.type";

export const Expenses = (props: ExpensesType) => {
  return (
    <div className="expenses-list">
      {props.expenses.map((expense) => (
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
