import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  error = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}
