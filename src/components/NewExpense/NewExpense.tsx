import { useState } from "react";
import { Button, Grid } from "@mui/material";
import "./NewExpense.css";
import { NewExpenseProp } from "../../constants/prop.type";
import { FilterYears } from "../../constants/constants";

export const NewExpense = (props: NewExpenseProp) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [amount, setAmount] = useState("");

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const [date, setDate] = useState("");

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let expense = {
      id: Math.random().toString(),
      title: title,
      amount: Number.parseInt(amount),
      date: new Date(date),
    };
    props.onSaveExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const mindate = new Date(FilterYears[0]).toISOString().split("T")[0];
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="new-expense-form-group">
      <h2>Add Expense</h2>
      <form onSubmit={formSubmitHandler}>
        <Grid container>
          <Grid item xs={3} className="p-2">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Expense Title"
                onChange={titleChangeHandler}
                value={title}
                required
              />
            </div>
          </Grid>
          <Grid item xs={3} className="p-2">
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter Expense Amount"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={amountChangeHandler}
                required
              />
            </div>
          </Grid>
          <Grid item xs={3} className="p-2">
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                min={mindate}
                max={today}
                value={date}
                onChange={dateChangeHandler}
                required
              />
            </div>
          </Grid>
          <Grid item xs={3} className="p-3">
            <Button type="submit" variant="contained" className="mt-4">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
