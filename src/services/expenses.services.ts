import { AddExpenseProp, EditExpenseProp } from "../constants/prop.type";
import { request } from "./request";

class ExpenseService {
    ENDPOINT = "/Expense";

    public async GetAllExpenses(){
        const url = `${this.ENDPOINT}/GetExpenses`;
        return request.get(url).then((res)=>{
            return res.data;
        }).catch(()=>{return "error"})
    }

    public async AddExpense(param : AddExpenseProp){
        const url = `${this.ENDPOINT}/AddExpense`;
        return request.post(url,param).then((res) => {
            return res.data
        });
    }

    public async DeleteExpense(id:number){
        const url = `${this.ENDPOINT}/DeleteExpense?id=${id}`;
        return request.delete(url).then((res) => {
            return res.data
        })
    }

    public async EditExpense(param: EditExpenseProp){
        const url = `${this.ENDPOINT}/EditExpense`
        return request.put(url,param).then((res) => {
            return res.data
        });
    }
}

const expenseService = new ExpenseService();

export default expenseService;