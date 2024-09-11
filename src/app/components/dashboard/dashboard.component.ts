import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public systemVersion: string = '1.2'; // You can dynamically set this in future
  public stats = {
    totalStockItems: 856,
    totalCustomers: 3,
    totalEmployees: 4
  };
}
