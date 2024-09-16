import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [MatTableModule, FormsModule, RouterModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers = []; // Initialize with your data
  displayedColumns: string[] = ['select', 'companyName', 'lastName', 'firstName', 'email', 'phoneNumber', 'actions'];
  searchTerm: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Fetch or initialize suppliers data
  }

  toggleRow(id: number) {
    // Handle checkbox change
  }

  toggleAllRows(checked: boolean) {
    // Handle "select all" checkbox change
  }

  searchSuppliers() {
    // Handle search logic
  }

  deleteSelected() {
    // Handle delete logic
  }
}
