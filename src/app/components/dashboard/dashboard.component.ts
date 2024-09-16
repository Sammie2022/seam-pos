import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';  // Import MatGridListModule
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule, // Include MatGridListModule
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardComponent {
  actions = [
    { title: 'Customers', icon: 'group', link: 'https://www.poss.seamlineinnovations.com/index.php/customers' },
    { title: 'Stock Items', icon: 'table', link: 'https://www.poss.seamlineinnovations.com/index.php/items' },
    { title: 'Services', icon: 'inbox', link: 'https://www.poss.seamlineinnovations.com/index.php/item_kits' },
    { title: 'Expenses', icon: 'money', link: 'https://www.poss.seamlineinnovations.com/index.php/expenses' },
    { title: 'Suppliers', icon: 'download', link: 'https://www.poss.seamlineinnovations.com/index.php/suppliers' },
    { title: 'Reports', icon: 'bar_chart', link: 'https://www.poss.seamlineinnovations.com/index.php/reports' },
    { title: 'Receivings', icon: 'cloud_download', link: 'https://www.poss.seamlineinnovations.com/index.php/receivings' },
    { title: 'Stock Allocations', icon: 'location_arrow', link: 'https://www.poss.seamlineinnovations.com/index.php/allocations' },
    { title: 'Field Sales', icon: 'shopping_cart', link: 'https://www.poss.seamlineinnovations.com/index.php/employee_sales' },
    { title: 'Shop Sales', icon: 'shopping_cart', link: 'https://www.poss.seamlineinnovations.com/index.php/sales' },
    { title: 'Employees', icon: 'user', link: 'https://www.poss.seamlineinnovations.com/index.php/employees' },
    { title: 'Store Config', icon: 'cogs', link: 'https://www.poss.seamlineinnovations.com/index.php/config' },
    { title: 'Locations', icon: 'home', link: 'https://www.poss.seamlineinnovations.com/index.php/locations' }
  ];

  stats = [
    { title: 'Total Stock Items', icon: 'shopping_cart', value: '856' },
    { title: 'Total Customers', icon: 'group', value: '3' },
    { title: 'Total Employees', icon: 'user', value: '4' }
  ];
}
