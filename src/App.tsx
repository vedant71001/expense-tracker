import "./App.css";
import { Grid, Typography } from "@mui/material";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { Expense } from "./constants/prop.type";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([] as Expense[]);

  const saveExpenseHandler = (expense: Expense) => {
    setExpenses((prevState: Expense[]) => {
      return [expense, ...prevState];
    });
  };

  return (
    <Grid container>
      <Grid className="App" item xs={12}>
        <Typography variant="h2">Expense Tracker</Typography>
        <NewExpense onSaveExpense={saveExpenseHandler}></NewExpense>
        <Expenses expenses={expenses} />
      </Grid>
    </Grid>
  );
}

export default App;
