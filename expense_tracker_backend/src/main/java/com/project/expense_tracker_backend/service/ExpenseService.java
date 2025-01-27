package com.project.expense_tracker_backend.service;


import com.project.expense_tracker_backend.dao.ExpenseDao;
import com.project.expense_tracker_backend.dto.Expense;
import com.project.expense_tracker_backend.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseDao expenseDao;

    public ResponseStructure<Expense> saveExpense(Expense expense) {

        if (expense.getDate() == null) {
            expense.setDate(LocalDate.from(LocalDateTime.now()));
        }


        expenseDao.saveExpense(expense);
        ResponseStructure<Expense> responseStructure = new ResponseStructure<>();
        responseStructure.setStatusCode(HttpStatus.OK.value());
        responseStructure.setMessage("Expense Data Saved Successfully");
        responseStructure.setData(expense);
        return responseStructure;
    }

    public ResponseStructure<Expense> fetchExpenseById(int id) {
        Optional<Expense> optional = expenseDao.fetchExpenseById(id);
        ResponseStructure<Expense> responseStructure = new ResponseStructure<>();

        if (optional.isPresent()) {

            responseStructure.setStatusCode(HttpStatus.OK.value());
            responseStructure.setMessage("Expense Data Available");
            responseStructure.setData(optional.get());
            return responseStructure;

        } else {
            responseStructure.setStatusCode(HttpStatus.NOT_FOUND.value());
            responseStructure.setMessage("Expense Data Not Available");
            responseStructure.setData(null);
            return responseStructure;
        }
    }

    public ResponseStructure<Expense> updateExpense(Expense expense, int id) {

        Optional<Expense> optional = expenseDao.fetchExpenseById(id);
        ResponseStructure<Expense> responseStructure = new ResponseStructure<>();

        if (optional.isPresent()) {
            Expense expIdindb = optional.get();

            if (expIdindb.getId() == id) {

                expIdindb.setExp_name(expense.getExp_name());
                expIdindb.setExp_category(expense.getExp_category());
                expIdindb.setExp_amount(expense.getExp_amount());
                expIdindb.setDate(expense.getDate());
                expIdindb.setPayment_method(expense.getPayment_method());

                Expense updatedExpData = expenseDao.saveExpense(expIdindb);

                responseStructure.setStatusCode(HttpStatus.OK.value());
                responseStructure.setMessage("Expense Data Updated");
                responseStructure.setData(updatedExpData);
                return responseStructure;


            } else {
                responseStructure.setStatusCode(HttpStatus.NOT_FOUND.value());
                responseStructure.setMessage("Invalid Expense Id");
                responseStructure.setData(null);
                return responseStructure;
            }
        }


        return responseStructure;
    }

    public ResponseStructure<List<Expense>> fetchAllExpense() {

        List<Expense> expenses = expenseDao.fetchAllExpense();
        ResponseStructure<List<Expense>> responseStructure = new ResponseStructure<>();
        responseStructure.setStatusCode(HttpStatus.OK.value());
        responseStructure.setMessage("All Expense Data");
        responseStructure.setData(expenses);
        return responseStructure;

    }

    public ResponseStructure<Expense> deleteExpenseById(int id) {

        Optional<Expense> optional = expenseDao.fetchExpenseById(id);

        ResponseStructure<Expense> responseStructure = new ResponseStructure<>();

        if (optional.isPresent()) {
            Expense expIdinDb = optional.get();
            if (expIdinDb.getId() == id) {

                expenseDao.deleteExpense(id);
                responseStructure.setStatusCode(HttpStatus.OK.value());
                responseStructure.setMessage("Expense Data Deleted");
                responseStructure.setData(null);
                return responseStructure;
            }
        } else {
            responseStructure.setStatusCode(HttpStatus.NOT_FOUND.value());
            responseStructure.setMessage("Invalid Expense Id");
            responseStructure.setData(null);
            return responseStructure;
        }
        return responseStructure;

    }


}
