import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class SidebarComponent {
  menuItems = [
    { title: 'Customers', icon: 'fa-group', link: '/customers' },
    { title: 'Stock Items', icon: 'fa-table', link: '/items' },
    { title: 'Services', icon: 'fa-inbox', link: '/item_kits' },
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
}
