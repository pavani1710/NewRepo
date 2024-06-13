import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const result = this.authService.login(this.username, this.password);
    if (result === 200) {
      this.router.navigate(['/bus-search']);
    } else {
      alert('Invalid credentials');
    }
  }
}

