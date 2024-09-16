import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { LocationService } from './location.service'; // Adjust path if needed

@Component({
  selector: 'app-locations',
  standalone: true,
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  imports: [
    MatTableModule,
    MatCheckboxModule
  ]
})
export class LocationsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'address', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private dialog: MatDialog,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.dataSource.data = this.locationService.getLocations();
  }

  openDialog() {
    // Logic to open a dialog for adding a new location
  }
}
