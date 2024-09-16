import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Service {
  id: number;
  name: string;
  description: string;
  costPrice: number;
  wholesalePrice: number;
  retailPrice: number;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  ]
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      name: 'RabbitMQ Setup',
      description: 'Fixing broken service',
      costPrice: 8674.06,
      wholesalePrice: 12000,
      retailPrice: 15000
    },
    // Add more services here
  ];

  filteredServices = this.services;
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.subscribe(searchTerm => {
      const search = searchTerm ? searchTerm.toLowerCase() : '';  // Handle null case
      this.filteredServices = this.services.filter(service =>
        service.name.toLowerCase().includes(search)
      );
    });
  }
}
