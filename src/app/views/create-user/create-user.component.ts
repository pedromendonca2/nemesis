import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  form: FormGroup; // Reactive Forms
  success = false;
  error = false;
  cpfPipe = new CpfPipe();

  constructor(
    private fb: FormBuilder, // Reactive Forms
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [''],
      cpf: [''],
      password: [''],
      access: ['0']
    });
  }

  async onSubmit() {
    const newUser = {
      username: this.form.value.name,
      cpf: this.cpfPipe.transform(this.form.value.cpf),
      password: this.form.value.password,
      role: this.form.value.access === '2' ? 'admin' : 'user'
    };

    try {
      await firstValueFrom(this.authService.create(newUser));
      this.success = true;
      this.form.reset({ access: '0' });
      console.log('Usuário criado com sucesso!');
    } catch {
      this.error = true;
    }

    console.log('Usuário criado com sucesso!');
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
