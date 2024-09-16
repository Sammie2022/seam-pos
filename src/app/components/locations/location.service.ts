import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getLocations() {
    return [
      { id: 1, name: 'Seam POS Main', address: 'P.O Box 548 Nairobi', phone: '0726103730', email: 'info@seamlineinnovations.com' },
      { id: 36, name: 'Seam POS Nakuru', address: 'Nakuru', phone: '07000000', email: 'admin@seamlineinnovations.com' }
    ];
  }
}
