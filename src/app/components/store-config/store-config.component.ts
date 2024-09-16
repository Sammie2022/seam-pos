import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-config',
  templateUrl: './store-config.component.html',
  styleUrls: ['./store-config.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]  // Import CommonModule here
})
export class StoreConfigComponent implements OnInit {
  storeConfigForm: FormGroup;
  tiers: FormArray;
  taxes: FormArray;

  constructor(private fb: FormBuilder) {
    this.storeConfigForm = this.fb.group({
      tiers: this.fb.array([]),
      taxes: this.fb.array([])
    });

    this.tiers = this.storeConfigForm.get('tiers') as FormArray;
    this.taxes = this.storeConfigForm.get('taxes') as FormArray;
  }

  ngOnInit() {
    this.tiers.push(this.fb.control(''));
    this.taxes.push(this.fb.control(''));
  }

  addTier() {
    this.tiers.push(this.fb.control(''));
  }

  addTax() {
    this.taxes.push(this.fb.control(''));
  }
}
