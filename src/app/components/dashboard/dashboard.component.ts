import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule // Add CommonModule here
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  
  statistics = {
    totalStockItems: 856,
    totalCustomers: 3,
    totalEmployees: 4,
  };

  quickActions = [
    { title: 'Customers', icon: 'fa-user', link: '/customers' },
    { title: 'Stock Items', icon: 'fa-table', link: '/items' },
    { title: 'Services', icon: 'fa-inbox', link: '/services' },
    { title: 'Expenses', icon: 'fa-money-bill-wave', link: '/expenses' },
    { title: 'Suppliers', icon: 'fa-truck', link: '/suppliers' },
    { title: 'Reports', icon: 'fa-chart-bar', link: '/reports' },
    { title: 'Receivings', icon: 'fa-cloud-download', link: '/receivings' },
    { title: 'Field Sales', icon: 'fa-shopping-cart', link: '/sales' },
    { title: 'Shop Sales', icon: 'fa-store', link: '/sales' },
    { title: 'Employees', icon: 'fa-users', link: '/employees' },
    { title: 'Store Config', icon: 'fa-cog', link: '/config' }, // Added Store Config
    { title: 'Stock Allocations', icon: 'fa-clipboard', link: '/allocations' }, // Added Stock Allocations
    { title: 'Locations', icon: 'fa-map-marker-alt', link: '/locations' }, // Added Locations
  ];
}
