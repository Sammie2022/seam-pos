import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  balance: number;
}

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class CustomerService {

  private customers: Customer[] = [
    { id: 3612, firstName: 'Mwaki', lastName: 'JH', email: '', phoneNumber: '+254738382444', balance: 0 },
    { id: 3613, firstName: 'Salome', lastName: 'Kigen', email: '', phoneNumber: '', balance: 0 },
    { id: 3617, firstName: 'Mercy', lastName: 'Kigen', email: '', phoneNumber: '', balance: 0 }
  ];

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
