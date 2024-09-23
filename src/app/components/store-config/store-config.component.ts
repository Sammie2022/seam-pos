import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-config',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './store-config.component.html',
})
export class StoreConfigComponent implements OnInit {
  storeConfigForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.storeConfigForm = this.fb.group({
      number_of_items_per_page: ['500'],
      track_cash: [false],
      hide_suspended_sales_in_reports: [false],
      hide_store_account_payments_in_reports: [false],
      change_sale_date_when_suspending: [false],
      change_sale_date_when_completing_suspended_sale: [false],
      show_receipt_after_suspending_sale: [false],
      calculate_average_cost_price_from_receivings: [false],
      averaging_method: ['moving_average'],
      hide_dashboard_statistics: [false],
      return_policy: [''],
      additional_payment_types: [''],
      default_payment_type: ['Cash'],
      tiers: this.fb.array([this.createTier()]), // Initialize with one tier
    });
  }

  ngOnInit(): void {}

  get tiers(): FormArray {
    return this.storeConfigForm.get('tiers') as FormArray;
  }

  createTier(): FormControl {
    return this.fb.control(''); // Create a new FormControl for the tier name
  }

  addTier(): void {
    this.tiers.push(this.createTier());
  }

  removeTier(index: number): void {
    this.tiers.removeAt(index);
  }

  submit(): void {
    // Handle form submission
    console.log(this.storeConfigForm.value);
  }
}
