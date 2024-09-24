import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-store-config',
  templateUrl: './store-config.component.html',
  styleUrls: ['./store-config.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] // Ensure these modules are imported
})
export class StoreConfigComponent {
  storeConfigForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.storeConfigForm = this.fb.group({
      tiers: this.fb.array([]) // Initialize as a FormArray
    });
  }

  get tiers(): FormArray {
    return this.storeConfigForm.get('tiers') as FormArray;
  }

  addTier() {
    const tier = this.fb.control(''); // Create a new FormControl for the new tier
    this.tiers.push(tier); // Add it to the FormArray
  }

  removeTier(index: number) {
    this.tiers.removeAt(index); // Remove the tier at the specified index
  }

  submit() {
    console.log(this.storeConfigForm.value); // Handle form submission
  }

  // Use this method to assert type
  getFormControl(index: number): FormControl {
    return this.tiers.at(index) as FormControl;
  }
}
