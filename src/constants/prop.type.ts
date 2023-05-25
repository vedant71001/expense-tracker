export type Expense = {
  id: number;
  title: string;
  amount: number;
  date: Date;
};

export type ExpensesType = {
  expenses: Expense[];
};

export type ExpenseDetails = {
  title: string;
  amount: number;
  date: Date;
};

export type NewExpenseProp = {
  onSaveExpense: (expense: Expense)=> void
}

export type FilterExpenseProp = {
  onFilterSelect : (year: string) => void
}

