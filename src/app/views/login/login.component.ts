import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.services'; // caminho conforme seu projeto

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
  role = 'user';
  error = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}


  async login() {
    if (await this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}