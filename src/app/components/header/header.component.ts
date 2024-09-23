import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Make sure CommonModule is included
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string = 'User'; // Replace with your logic to get the username
  currentTime: string = new Date().toLocaleTimeString();
  currentLocation: string = 'Seam POS Main'; // Replace with your logic for the location
  showSidebar: boolean = false; // Define the showSidebar property

  onUserSwitch() {
    // Your logic for switching user
  }

  onLocationChange(event: Event) {
    // Your logic for changing location
  }

  // Control visibility of the sidebar
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  showSidebarOnHover() {
    this.showSidebar = true;
  }

  hideSidebar() {
    this.showSidebar = false;
  }
}
