import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-receivings',
  templateUrl: './receivings.component.html',
  styleUrls: ['./receivings.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class ReceivingsComponent {
  receivingForm: FormGroup;

  suppliers = [
    { id: 1, name: 'Supplier 1' },
    { id: 2, name: 'Supplier 2' },
    { id: 3, name: 'Supplier 3' },
  ];

  mockReceivings = [
    { item: 'Item 1', quantity: 10, date: '2024-09-15' },
    { item: 'Item 2', quantity: 20, date: '2024-09-16' },
    { item: 'Item 3', quantity: 5, date: '2024-09-17' },
  ];

  constructor() {
    this.receivingForm = new FormGroup({
      supplier: new FormControl(''),
      item: new FormControl(''),
      quantity: new FormControl(''),
      date: new FormControl(''),
    });
  }

  submitForm() {
    console.log(this.receivingForm.value);
  }
}
