import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockItemsComponent } from './components/stock-items/stock-items.component'; // Updated path
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    StockItemsComponent,
    FormsModule,
    FooterComponent,
    ServicesComponent,
    DashboardComponent,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'seam-pos';
}
