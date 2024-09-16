import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  imports: [CommonModule, MatListModule, MatIconModule] // Import necessary Angular Material modules
})
export class ReportsComponent {
  reports = [
    {
      label: 'Sales Report',
      icon: 'bar_chart',
      details: [
        { label: 'Daily Sales', icon: 'today' },
        { label: 'Monthly Sales', icon: 'calendar_today' }
      ]
    },
    {
      label: 'Inventory Report',
      icon: 'inventory',
      details: [
        { label: 'Stock Levels', icon: 'layers' },
        { label: 'Reorder Status', icon: 'autorenew' }
      ]
    }
  ];

  selectedReport = this.reports[0]; // Initially select the first report
}
