import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import { FilterExpense } from "../FilterExpense/FilterExpense";
import {
  EditExpenseProp,
  Expense,
  ExpensesType,
} from "../../constants/prop.type";
import { useState } from "react";
import { FilterYears } from "../../constants/constants";
import expenseService from "../../services/expenses.services";

export const Expenses = (props: ExpensesType) => {
  const [yearSelected, setYearSelected] = useState(
    FilterYears[FilterYears.length - 1]
  );

  const [valueChanged, setValueChanged] = useState(false);

  const filterExpenseHandler = (year: string) => {
    setYearSelected(year);
  };

  const deleteExpenseHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const expenseId = Number.parseInt(event.currentTarget.id.split("_")[1]);
    expenseService.DeleteExpense(expenseId).then((res) => {
      let deletedExpId = props.expenses.findIndex((e) => e.id == res);
      props.expenses.splice(deletedExpId, 1);
      setValueChanged(!valueChanged);
    });
  };

  const editExpenseHandler = (values: EditExpenseProp) => {
    console.log(values);
    let oldExpenseId = props.expenses.findIndex((e) => e.id === values.id);
    props.expenses.splice(oldExpenseId, 1);
    props.expenses.push({
      id: values.id,
      title: values.title,
      amount: values.amount,
      date: new Date(values.date)
    });
    setValueChanged(!valueChanged);
  };

  let filteredExpenses: Expense[] = [];

  for (const item of props.expenses) {
    if (item.date.getFullYear().toString() === yearSelected) {
      filteredExpenses.push(item);
    }
  }

  return (
    <div className="expenses-list">
      <FilterExpense onFilterSelect={filterExpenseHandler} />
      {filteredExpenses.length === 0 && (
        <h3 className="m-3 text-center">No Expenses Found</h3>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete={deleteExpenseHandler}
            onEdit={editExpenseHandler}
          />
        ))}
    </div>
  );
};
