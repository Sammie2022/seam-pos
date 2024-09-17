import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [
    MatSelectModule,
    RouterModule,
    MatToolbarModule,
    MatListModule, 
    MatIconModule, 
    MatSidenavModule
  ]
})
export class SidebarComponent {
  isSidebarOpen: boolean = false; // Initialize with default value

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  locations = [
    { id: 1, name: 'Seam POS Main' },
    { id: 36, name: 'Seam POS Nakuru' }
  ];

  selectedLocation = 1; // Default selected location

  menuItems = [
    { route: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { route: '/customers', icon: 'group', label: 'Customers' },
    { route: '/items', icon: 'table', label: 'Stock Items' },
    { route: '/item-kits', icon: 'inbox', label: 'Services' },
    { route: '/expenses', icon: 'money', label: 'Expenses' },
    { route: '/suppliers', icon: 'download', label: 'Suppliers' },
    { route: '/reports', icon: 'bar_chart', label: 'Reports' },
    { route: '/receivings', icon: 'cloud_download', label: 'Receivings' },
    { route: '/allocations', icon: 'location_on', label: 'Stock Allocations' },
    { route: '/employee-sales', icon: 'shopping_cart', label: 'Field Sales' },
    { route: '/sales', icon: 'shopping_cart', label: 'Shop Sales' },
    { route: '/employees', icon: 'person', label: 'Employees' },
    { route: '/config', icon: 'settings', label: 'Store Config' },
    { route: '/locations', icon: 'home', label: 'Locations' }
  ];

  constructor(private router: Router) {}

  changeLocation(locationId: number) {
    console.log(`Selected location ID: ${locationId}`);
    // Handle location change logic here
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    // Perform logout logic here, such as clearing user data or tokens
    // Redirect to the login page after logout
    this.router.navigate(['/login']); // Adjust the route as needed
  }
}
