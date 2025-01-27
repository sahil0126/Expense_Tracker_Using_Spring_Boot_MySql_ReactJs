package com.project.expense_tracker_backend.controller;

import com.project.expense_tracker_backend.dto.Expense;
import com.project.expense_tracker_backend.service.ExpenseService;
import com.project.expense_tracker_backend.util.ResponseStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expense_tracker")
public class ExpenseController {


//Packages WorkFlow
//Controller-->Service-->Dao-->Repository

    @Autowired
    private ExpenseService expenseService;


    //POST
    //Save Expense
    @PostMapping
    public ResponseStructure<Expense> saveExpense(@RequestBody Expense expense) {
        return expenseService.saveExpense(expense);
    }

    //GET
    //Fetch Expense By Id
    @GetMapping("/{id}")
    public ResponseStructure<Expense> fetchExpenseById(@PathVariable int id) {
        return expenseService.fetchExpenseById(id);
    }

    //PUT
    //Update Expense
    @PutMapping("/{id}")
    public ResponseStructure<Expense> updateExpense(@PathVariable int id, @RequestBody Expense expense) {
        return expenseService.updateExpense(expense, id);
    }

    //GET
    //Fetch All
    @GetMapping("/expenses")
    public ResponseStructure<List<Expense>> fetchAllExpense() {
        return expenseService.fetchAllExpense();
    }

    //DELETE
    //Delete Expense By Id
    @DeleteMapping("/{id}")
    public ResponseStructure<Expense> deleteExpense(@PathVariable int id) {
        return expenseService.deleteExpenseById(id);
    }


}
