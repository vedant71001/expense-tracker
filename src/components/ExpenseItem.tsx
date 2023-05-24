import { Typography } from "@mui/material";
import "./ExpenseItem.css";
import { ExpenseDetails } from "./prop.type";

export const ExpenseItem = (props: ExpenseDetails) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <Typography variant="h4" className="expense-item__title">
        {props.title}
      </Typography>
      <div className="expense-item__amount">{props.amount}</div>
    </div>
  );
};
