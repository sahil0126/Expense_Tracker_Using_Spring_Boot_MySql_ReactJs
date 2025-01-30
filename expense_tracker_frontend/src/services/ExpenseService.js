import axios from "axios";

const REST_API_BASE_URL="http://localhost:8081/expense-tracker";

export const listExpense = () => axios.get(REST_API_BASE_URL + "/all-expenses");

export const createExpense = (expense) => axios.post(REST_API_BASE_URL,expense);

export const getExpense=(expenseId)=> axios.get(REST_API_BASE_URL + "/" + expenseId);

export const updateExpense = (expenseId,expense) => axios.put(REST_API_BASE_URL + "/" + expenseId,expense)

export const deleteExpense= (expenseId)=> axios.delete(REST_API_BASE_URL+"/"+expenseId);



