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

  constructor(private router: Router, private authService: AuthService) {}

  login() { //usar authservice para autenticar
    if (this.username === 'admin' && this.password === '123') {
      this.authService.setRole('admin');
      this.router.navigate(['/home']);
    } else if (this.username === 'user' && this.password === '123') {
      this.authService.setRole('user');
      this.router.navigate(['/home']);
    } else {
      this.error = true; // ativa a mensagem de erro no template
    }
  }
}