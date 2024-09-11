import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router'; // For routing
import { SidebarComponent } from './components/sidebar/sidebar.component'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, SidebarComponent, FormsModule] // Import the standalone component here
})
export class AppComponent { }
