import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // caminho conforme seu projeto

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  error = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
      role: ['user']
    });
  }

  async login() {
    if (await this.authService.authenticate(this.form.value.username, this.form.value.password)) {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}