import { EditExpenseProp, Expense } from "../../constants/prop.type";
import { Grid, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import expenseService from "../../services/expenses.services";
import { FilterYears } from "../../constants/constants";

export const EditExpense = (
  props: Expense & { onEdit: (values: EditExpenseProp) => void }
) => {
  const mindate = new Date(FilterYears[0]).toISOString().split("T")[0];
  const today = new Date().toISOString().split("T")[0];
  const validationSchema = Yup.object({
    title: Yup.string().required("Please enter expense title!"),
    amount: Yup.number()
      .required("Please enter amount!")
      .min(0.01, "Please enter valid amount value!"),
    date: Yup.date()
      .required("Expense date is required!")
      .max(today, "You cannot select future dates!"),
  });

  const initialValue = {
    id: props.id,
    title: props.title,
    amount: props.amount,
    date: props.date.toISOString().split("T")[0],
  };

  const formSubmitHandler = (values: EditExpenseProp) => {
    expenseService.EditExpense(values).then((res) => {
      props.onEdit(values);
    });
  };

  const renderError = (message: string) => (
    <p className="text-danger">{message}</p>
  );

  return (
    <div>
      <h2>Edit Expense</h2>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={formSubmitHandler}
      >
        <Form>
          <Grid container>
            <Grid item xs={3} className="p-2">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Enter Expense Title"
                />
                <ErrorMessage name="title" render={renderError} />
              </div>
            </Grid>
            <Grid item xs={3} className="p-2">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Amount
                </label>
                <Field
                  name="amount"
                  type="number"
                  className="form-control"
                  placeholder="Enter Expense Amount"
                />
                <ErrorMessage name="amount" render={renderError} />
              </div>
            </Grid>
            <Grid item xs={3} className="p-2">
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  date
                </label>
                <Field
                  name="date"
                  type="date"
                  className="form-control"
                  min={mindate}
                  max={today}
                />
                <ErrorMessage name="date" render={renderError} />
              </div>
            </Grid>
            <Grid item xs={3} className="p-3">
              <Button type="submit" variant="contained" className="mt-4">
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};
