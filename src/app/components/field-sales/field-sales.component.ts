import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-field-sales',
  templateUrl: './field-sales.component.html',
  styleUrls: ['./field-sales.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule] // Import ReactiveFormsModule here
})
export class FieldSalesComponent {
  registerForm: FormGroup;
  items: any[] = [];
  categories: any[] = [];
  currentCategory: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      employee: [''],
      customer: [''],
      mode: ['sale'],
      discount: [''],
      item: [''],
    });

    this.loadCategories();
  }

  loadCategories() {
    this.http.get<any>('https://www.poss.seamlineinnovations.com/index.php/employee_sales/categories')
      .pipe(map(response => response.categories))
      .subscribe(categories => this.categories = categories);
  }

  onCategoryClick(category: string) {
    this.currentCategory = category;
    this.http.post<any>('https://www.poss.seamlineinnovations.com/index.php/employee_sales/items', { category })
      .pipe(map(response => response.items))
      .subscribe(items => this.items = items);
  }

  onItemClick(itemId: string) {
    this.registerForm.patchValue({ item: itemId });
    this.http.post('https://www.poss.seamlineinnovations.com/index.php/employee_sales/add_item', this.registerForm.value)
      .subscribe(() => {
        // Handle success
      });
  }

  onModeChange() {
    const mode = this.registerForm.get('mode')?.value;
    if (mode === 'store_account_payment') {
      // Hide category grid
    } else {
      // Show category grid
    }
  }

  submitForm() {
    if (confirm("Are you sure you want to submit this sale? This cannot be undone.")) {
      this.http.post('https://www.poss.seamlineinnovations.com/index.php/employee_sales/finish_sale', this.registerForm.value)
        .subscribe(() => {
          // Handle success
        });
    }
  }
}
