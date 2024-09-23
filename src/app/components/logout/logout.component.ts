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
    if (typeof window !== 'undefined' && window.localStorage) {
      // Clear user session
      localStorage.removeItem('token');
    }
    // Redirect to login page
    this.router.navigate(['/login']);
  }
  
}
