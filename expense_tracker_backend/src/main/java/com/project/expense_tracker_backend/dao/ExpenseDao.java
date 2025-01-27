package com.project.expense_tracker_backend.dao;


import com.project.expense_tracker_backend.dto.Expense;
import com.project.expense_tracker_backend.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ExpenseDao {

    @Autowired
    private ExpenseRepository expenseRepository;

    public Expense saveExpense(Expense expense){
        return expenseRepository.save(expense);
    }

    public Optional<Expense> fetchExpenseById(int id){
        return expenseRepository.findById(id);
    }

    public Expense updateExpense(Expense expense){
        return expenseRepository.save(expense);
    }

    public List<Expense> fetchAllExpense(){
        return expenseRepository.findAll();
    }

    public Expense deleteExpense(int id){
        expenseRepository.deleteById(id);
        return null;
    }



}
