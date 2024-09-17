import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  currentLocation = 'Seam POS Main'; // Mock current location
  username = 'Admin Administrator'; // Mock username
  currentTime = new Date().toLocaleString(); // Mock current time

  // Method to handle location change
  onLocationChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.currentLocation = target.value;
    // Perform any other actions required when location changes
  }

  // Method to handle user switch (You can implement your logic here)
  onUserSwitch(): void {
    // Placeholder for user switch functionality
    alert('User switch functionality is not implemented.');
  }
}
