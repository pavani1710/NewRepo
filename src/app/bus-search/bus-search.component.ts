import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent {
  date: string = '';
  from: string = '';
  to: string = '';
  buses: any[] = [];

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Dummy data for demonstration
    this.buses = [
      { details: `Bus from ${this.from} to ${this.to} on ${this.date}` },
      { details: `Another bus from ${this.from} to ${this.to} on ${this.date}` }
    ];
  }

  logout() {
    this.authService.logout();
  }
}

