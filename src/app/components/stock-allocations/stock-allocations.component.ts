import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-allocation',
  standalone: true,
  templateUrl: './stock-allocations.component.html',
  styleUrls: ['./stock-allocations.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class StockAllocationsComponent implements OnInit {
  modeForm: FormGroup;
  employeeForm: FormGroup;
  categories: any[] = []; // Mock categories
  items: any[] = []; // Mock items
  employees: any[] = []; // Mock employees

  constructor(private fb: FormBuilder) {
    this.modeForm = this.fb.group({
      mode: ['allocate']
    });

    this.employeeForm = this.fb.group({
      employee: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
    this.loadEmployees();
  }

  onModeSubmit(): void {
    console.log('Mode submitted:', this.modeForm.value);
  }

  onEmployeeSubmit(): void {
    console.log('Employee submitted:', this.employeeForm.value);
  }

  loadCategories(): void {
    // Mock categories
    this.categories = [
      { id: 1, name: 'Category A' },
      { id: 2, name: 'Category B' }
    ];
  }

  loadItems(): void {
    // Mock items
    this.items = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ];
  }

  loadEmployees(): void {
    // Mock employees
    this.employees = [
      { id: 1, name: 'Employee A' },
      { id: 2, name: 'Employee B' }
    ];
  }
}
