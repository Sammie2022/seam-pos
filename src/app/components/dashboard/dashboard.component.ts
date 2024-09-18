import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'; // for list items
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public systemVersion: string = '1.2';
  public stats = [
    { icon: 'shopping_cart', title: 'Total Stock Items', value: 856, link: '/items' },
    { icon: 'group', title: 'Total Customers', value: 3, link: '/customers' },
    { icon: 'person', title: 'Total Employees', value: 4, link: '/employees' },
  ];
  public quickActions = [
    { icon: 'group', title: 'Customers', link: '/customers' },
    { icon: 'table', title: 'Stock Items', link: '/items' },
    { icon: 'inbox', title: 'Services', link: '/services' },
    { icon: 'money', title: 'Expenses', link: '/expenses' },
    { icon: 'download', title: 'Suppliers', link: '/suppliers' },
    { icon: 'bar_chart', title: 'Reports', link: '/reports' },
    { icon: 'cloud_download', title: 'Receivings', link: '/receivings' },
    { icon: 'location_on', title: 'Stock Allocations', link: '/allocations' },
    { icon: 'shopping_cart', title: 'Field Sales', link: '/sales' },
    { icon: 'shopping_cart', title: 'Shop Sales', link: '/sales' },
    { icon: 'person', title: 'Employees', link: '/employees' },
    { icon: 'cogs', title: 'Store Config', link: '/config' },
    { icon: 'home', title: 'Locations', link: '/locations' },
  ];
  public sidebarVisible: boolean = false; // Add a property to control the sidebar visibility

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Toggle the sidebar visibility
  }
  constructor(private router: Router) { }

logout() {
  // Optionally handle any logout logic here
  localStorage.removeItem('userToken');
  this.router.navigate(['/logout']);
}
}
