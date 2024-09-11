import { Component, OnInit } from '@angular/core';

interface Customer {
  personId: number;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  balance: string;
  selected: boolean;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [
    { personId: 3612, lastName: 'JH', firstName: 'Mwaki', email: '', phoneNumber: '+254738382444', balance: 'Ksh0.00', selected: false },
    { personId: 3613, lastName: 'Kigen', firstName: 'Salome', email: '', phoneNumber: '', balance: 'Ksh0.00', selected: false },
    { personId: 3617, lastName: 'Kigen', firstName: 'Mercy', email: '', phoneNumber: '', balance: 'Ksh0.00', selected: false }
  ];
  
  filteredCustomers: Customer[] = [...this.customers];
  selectedCustomers: Customer[] = [];
  searchQuery = '';

  ngOnInit(): void {
    this.filterCustomers();
  }

  filterCustomers(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCustomers = this.customers.filter(customer => 
      customer.lastName.toLowerCase().includes(query) ||
      customer.firstName.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phoneNumber.toLowerCase().includes(query)
    );
  }

  addCustomer(): void {
    alert('Add new customer');
  }

  sendEmail(): void {
    alert('Send email to selected customers');
  }

  importExcel(): void {
    alert('Import from Excel');
  }

  exportExcel(): void {
    alert('Export to Excel');
  }

  deleteCustomers(): void {
    this.customers = this.customers.filter(customer => !customer.selected);
    this.filterCustomers();
    alert('Selected customers deleted');
  }

  cleanupCustomers(): void {
    alert('Cleanup old customers');
  }

  toggleAll(event: any): void {
    const isChecked = event.target.checked;
    this.filteredCustomers.forEach(customer => customer.selected = isChecked);
    this.updateSelection();
  }

  updateSelection(): void {
    this.selectedCustomers = this.filteredCustomers.filter(customer => customer.selected);
  }

  viewCustomer(customer: Customer): void {
    alert(`View details for customer ${customer.personId}`);
  }

  editCustomer(customer: Customer): void {
    alert(`Edit customer ${customer.personId}`);
  }

  payCustomer(customer: Customer): void {
    alert(`Pay customer ${customer.personId}`);
  }
}
