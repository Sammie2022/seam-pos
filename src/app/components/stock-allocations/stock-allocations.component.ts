import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-allocation',
  standalone: true,
  templateUrl: './stock-allocations.component.html',
  styleUrls: ['./stock-allocations.component.css']
})
export class StockAllocationsComponent implements OnInit {
  modeForm: FormGroup;
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.modeForm = this.fb.group({
      mode: ['allocate']
    });

    this.employeeForm = this.fb.group({
      employee: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  onModeSubmit(): void {
    this.http.post('https://www.poss.seamlineinnovations.com/index.php/allocations/change_mode', this.modeForm.value)
      .subscribe(response => {
        // Handle response
      });
  }

  onEmployeeSubmit(): void {
    this.http.post('https://www.poss.seamlineinnovations.com/index.php/allocations/select_employee', this.employeeForm.value)
      .subscribe(response => {
        // Handle response
      });
  }

  loadCategories(): void {
    this.http.get('https://www.poss.seamlineinnovations.com/index.php/sales/categories')
      .subscribe((json: any) => {
        this.processCategoriesResult(json);
      });
  }

  processCategoriesResult(json: any): void {
    // Process categories result
  }

  processItemsResult(json: any): void {
    // Process items result
  }
}
