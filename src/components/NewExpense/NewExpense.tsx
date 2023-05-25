import { Button, Grid } from "@mui/material";
import "./NewExpense.css";
import { NewExpenseProp } from "../../constants/prop.type";
import { FilterYears, baseUrl } from "../../constants/constants";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikState } from "formik";
import axios from "axios";

export const NewExpense = (props: NewExpenseProp) => {
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
    title: "",
    amount: 0,
    date: "",
  };

  type SubmitArgs = {
    resetForm: (nextState?: Partial<FormikState<typeof initialValue>>) => void;
  };

  const formSubmitHandler = (
    values: typeof initialValue,
    { resetForm }: SubmitArgs
  ) => {
    let dateObj = new Date(values.date);
    axios.post(`${baseUrl}/Expense/AddExpense`, values);
    props.onSaveExpense({
      ...values,
      id: Math.random(),
      date: dateObj,
    });
    resetForm();
  };

  const renderError = (message: string) => (
    <p className="text-danger">{message}</p>
  );

  return (
    <div className="new-expense-form-group">
      <h2>Add Expense</h2>

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
