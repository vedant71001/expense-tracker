import { Grid, Typography } from "@mui/material";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { Expense } from "./constants/prop.type";
import { useEffect, useState } from "react";
import axios from "axios";
import { ExpenseModel } from "./models/ExpenseModel";
import { baseUrl } from "./constants/constants";

function App() {
  const [expenses, setExpenses] = useState([] as Expense[]);

  useEffect(() => {
    axios.get(`${baseUrl}/Expense/GetExpenses`).then((response) => {
      setExpenses(
        response.data.map((expense: ExpenseModel) => {
          return {
            ...expense,
            date: new Date(expense.date),
          };
        })
      );
    });
  }, []);

  const saveExpenseHandler = (expense: Expense) => {
    setExpenses((prevState: Expense[]) => {
      return [expense, ...prevState];
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" className="text-center">
          Expense Tracker
        </Typography>
        <NewExpense onSaveExpense={saveExpenseHandler}></NewExpense>
        <Expenses expenses={expenses} />
      </Grid>
    </Grid>
  );
}

export default App;
