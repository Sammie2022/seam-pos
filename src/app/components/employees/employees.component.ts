import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Employee {
  id: number;
  username: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    RouterModule
  ],
})
export class EmployeesComponent {
  displayedColumns: string[] = ['select', 'id', 'username', 'lastName', 'firstName', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Employee>([
    { id: 1, username: 'admin', lastName: 'Administrator', firstName: 'Admin', email: 'steve@seamlineinnovations.com', phone: '0726103730' },
    { id: 2, username: 'seamdemo', lastName: 'Demo', firstName: 'Seamline', email: 'seamlined@gmail.com', phone: '' },
    { id: 3609, username: 'KIMRRR', lastName: 'kamau', firstName: 'alex', email: 'alexkamau7408@gmail.com', phone: '' },
    { id: 3615, username: 'nillan', lastName: 'rotich', firstName: 'nillan', email: 'irnrotich@gmail.com', phone: '254703299460' }
  ]);

  constructor(public dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  toggleAllRows(checked: boolean) {
    // Implement functionality to toggle all checkboxes
  }

  toggleRow(row: Employee) {
    // Implement functionality to toggle individual checkbox
  }

  viewAvatar(id: number) {
    // Implement functionality to view avatar
  }

  clearSearch() {
    // Implement functionality to clear search
  }
}
