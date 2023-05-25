import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import "./ExpenseItem.css";
import { EditExpenseProp, ExpenseDetails } from "../../constants/prop.type";
import { useState } from "react";
import { EditExpense } from "../EditExpense/EditExpense";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #3f3f3f",
  boxShadow: 24,
  p: 4,
  color: "#000000",
  borderRadius: 5
};

export const ExpenseItem = (props: ExpenseDetails) => {
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);
  const [date,setDate] = useState(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const editExpenseHandler = (values: EditExpenseProp) =>{
    setTitle(values.title);
    setAmount(values.amount);
    setDate(new Date(values.date));
    props.onEdit(values);
    handleClose()
  };

  return (
    <Grid className="expense-item" container>
      <Grid xs={2} item className="expense-item__date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </Grid>
      <Grid xs={4} item>
        <Typography variant="h4" className="expense-item__title">
          {title}
        </Typography>
      </Grid>
      <Grid xs={3} item>
        <div className="expense-item__amount">${amount}</div>
      </Grid>
      <Grid xs={3} item className="expense-item__action">
        <Button
          variant="contained"
          className="me-2"
          color="success"
          onClick={handleOpen}
        >
          Edit
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <EditExpense
              id={props.id}
              title={title}
              amount={amount}
              date={date}
              onEdit={editExpenseHandler}
            ></EditExpense>
          </Box>
        </Modal>
        <Button
          variant="contained"
          color="error"
          onClick={props.onDelete}
          id={`expense_${props.id}`}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};
