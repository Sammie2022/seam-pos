import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-shop-sales',
  templateUrl: './shop-sales.component.html',
  styleUrls: ['./shop-sales.component.css'],
  imports: [CommonModule, MatTableModule],
  standalone: true
})
export class ShopSalesComponent {
  // Add your component logic here
  salesData = [
    { item: 'Item 1', quantity: 10, price: 20 },
    { item: 'Item 2', quantity: 5, price: 15 },
    { item: 'Item 3', quantity: 8, price: 25 }
  ];

  getTotalSales() {
    return this.salesData.reduce((total, sale) => total + (sale.quantity * sale.price), 0);
  }
}
