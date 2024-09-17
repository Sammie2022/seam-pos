import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customers/customers.component';
import { StockItemsComponent } from './components/stock-items/stock-items.component';
import { ServicesComponent } from './components/services/services.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReceivingsComponent } from './components/receivings/receivings.component';
import { StockAllocationsComponent } from './components/stock-allocations/stock-allocations.component';
import { FieldSalesComponent } from './components/field-sales/field-sales.component';
import { ShopSalesComponent } from './components/shop-sales/shop-sales.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StoreConfigComponent } from './components/store-config/store-config.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LogoutComponent } from './components/logout/logout.component'; // Import LogoutComponen
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'items', component: StockItemsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'receivings', component: ReceivingsComponent },
  { path: 'allocations', component: StockAllocationsComponent },
  { path: 'dashboard/field-sales', component: FieldSalesComponent },
  { path: 'sales', component: ShopSalesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'config', component: StoreConfigComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
