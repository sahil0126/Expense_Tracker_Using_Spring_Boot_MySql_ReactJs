package com.project.expense_tracker_backend.util;

import com.project.expense_tracker_backend.dto.Expense;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class ResponseStructure<E> {

    private int statusCode;
    private String message;
    private E data;

}
