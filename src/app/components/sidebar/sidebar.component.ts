import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Add CommonModule and RouterModule here
})
export class SidebarComponent {
  menuItems = [
    { title: 'Customers', icon: 'fa-group', link: '/customers' },
    { title: 'Stock Items', icon: 'fa-table', link: '/items' },
    { title: 'Services', icon: 'fa-inbox', link: '/services' },
    { title: 'Expenses', icon: 'fa-money', link: '/expenses' },
    { title: 'Suppliers', icon: 'fa-download', link: '/suppliers' },
    { title: 'Reports', icon: 'fa-bar-chart-o', link: '/reports' },
    { title: 'Receivings', icon: 'fa-cloud-download', link: '/receivings' },
    { title: 'Stock Allocations', icon: 'fa-location-arrow', link: '/allocations' },
    { title: 'Field Sales', icon: 'fa-shopping-cart', link: '/employee_sales' },
    { title: 'Shop Sales', icon: 'fa-shopping-cart', link: '/sales' },
    { title: 'Employees', icon: 'fa-user', link: '/employees' },
    { title: 'Store Config', icon: 'fa-cogs', link: '/config' },
    { title: 'Locations', icon: 'fa-home', link: '/locations' }
  ];

  constructor(private router: Router) {} // Inject Router

  logout() {
    // Perform logout logic here, like clearing user data, tokens, etc.
    // Navigate to the login page or a public page after logging out
    this.router.navigate(['/login']); // Adjust the route as needed
  }
}
