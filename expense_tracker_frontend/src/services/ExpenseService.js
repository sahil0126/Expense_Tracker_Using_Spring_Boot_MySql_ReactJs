// import axios from "axios";



// const REST_API_BASE_URL=`${process.env.REACT_APP_API_URL}/expense-tracker`;

// export const listExpense = () => axios.get(REST_API_BASE_URL + "/all-expenses");

// export const createExpense = (expense) => axios.post(REST_API_BASE_URL,expense);

// export const getExpense=(expenseId)=> axios.get(REST_API_BASE_URL + "/" + expenseId);

// export const updateExpense = (expenseId,expense) => axios.put(REST_API_BASE_URL + "/" + expenseId,expense)

// export const deleteExpense= (expenseId)=> axios.delete(REST_API_BASE_URL+"/"+expenseId);

import axios from "axios";

const REST_API_BASE_URL = `${import.meta.env.VITE_API_URL}/expense-tracker`;

console.log("API Base URL:", REST_API_BASE_URL); // Debugging line

export const listExpense = () => axios.get(REST_API_BASE_URL + "/all-expenses");

export const createExpense = (expense) => axios.post(REST_API_BASE_URL, expense);

export const getExpense = (expenseId) => axios.get(REST_API_BASE_URL + "/" + expenseId);

export const updateExpense = (expenseId, expense) => axios.put(REST_API_BASE_URL + "/" + expenseId, expense);

export const deleteExpense = (expenseId) => axios.delete(REST_API_BASE_URL + "/" + expenseId);

