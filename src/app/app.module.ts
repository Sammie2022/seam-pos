import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // For routing
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { SidebarComponent } from './components/sidebar/sidebar.component'; // Path to SidebarComponent
import { StockItemsComponent } from './components/stock-items/stock-items.component'; // Path to StockItemsComponent
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule here
import { EmployeesComponent } from './components/employees/employees.component'; // Adjust the path as needed
import { LocationsComponent } from './components/locations/locations.component'; // Adjust path as needed
import { MatIconModule } from '@angular/material/icon';
import { StoreConfigComponent } from './components/store-config/store-config.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { StockAllocationsComponent } from './components/stock-allocations/stock-allocations.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    SidebarComponent, 
    StockItemsComponent,
    StockAllocationsComponent,
    StoreConfigComponent,
    ReactiveFormsModule,
    ServicesComponent,
    EmployeesComponent,
    LocationsComponent,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
    MatPaginator,
    MatTableModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule,
  ] // Import standalone components and modules
})
export class AppComponent { }
