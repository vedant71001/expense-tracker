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
  id: number;
  title: string;
  amount: number;
  date: Date;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
  onEdit: (values: EditExpenseProp)=> void
};

export type NewExpenseProp = {
  onSaveExpense: (expense: Expense)=> void
}

export type FilterExpenseProp = {
  onFilterSelect : (year: string) => void
}

export type AddExpenseProp = {
  title: string;
  amount: number;
  date: string;
}

export type EditExpenseProp = {
  id: number;
  title: string;
  amount: number;
  date: string;
}

