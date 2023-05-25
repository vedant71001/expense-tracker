import { AddExpenseProp } from "../constants/prop.type";
import { request } from "./request";

class ExpenseService {
    ENDPOINT = "/Expense";

    public async GetAllExpenses(){
        const url = `${this.ENDPOINT}/GetExpenses`;
        return request.get(url).then((res)=>{
            return res.data;
        })
    }

    public async AddExpense(param : AddExpenseProp){
        const url = `${this.ENDPOINT}/AddExpense`;
        request.post(url,param);
    }
}

const expenseService = new ExpenseService();

export default expenseService;