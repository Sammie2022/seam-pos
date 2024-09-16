import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface StockItem {
  itemName: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-stock-items',
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule] // Import necessary modules
})
export class StockItemsComponent {
  stockItemsForm: FormGroup;
  stockItems: StockItem[] = []; // Define type for stock items

  constructor(private fb: FormBuilder, private router: Router) {
    this.stockItemsForm = this.fb.group({
      itemName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addStockItem() {
    if (this.stockItemsForm.valid) {
      const newItem: StockItem = this.stockItemsForm.value;
      this.stockItems.push(newItem); // Add item to the list
      this.stockItemsForm.reset(); // Reset the form
    }
  }

  navigateToDetails(item: StockItem) {
    this.router.navigate(['/stock-items/details', item.itemName]); // Navigate with item name as a parameter
  }
}
