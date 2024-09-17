// logout.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    // Clear user session or token here
    localStorage.removeItem('userToken');
    
    // Redirect to login page after logout
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // Delay for user to see the logout message
  }
}
