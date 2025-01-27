package com.project.expense_tracker_backend.repository;

import com.project.expense_tracker_backend.dto.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense,Integer> {
}
