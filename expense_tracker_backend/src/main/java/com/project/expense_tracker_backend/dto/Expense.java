package com.project.expense_tracker_backend.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String exp_name;
    private String exp_category;
    private long exp_amount;
    private String payment_method;

    @CreationTimestamp // Automatically sets the current timestamp
    @Column(updatable = false)
    private LocalDate date;




}
