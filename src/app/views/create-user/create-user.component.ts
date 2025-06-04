import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { AuthService } from '../../services/auth.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  providers: [CpfPipe] // Certifique-se de que CpfPipe está importado corretamente
})
export class CreateUserComponent {
  form: FormGroup;
  success = false;
  error = false;

  constructor(
    private fb: FormBuilder, 
    private cpfPipe: CpfPipe,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: [''],
      cpf: [''],
      password: [''],
      access: ['0']
    });
  }

  onSubmit() {
    const newUser = {
      username: this.form.value.name,
      cpf: this.cpfPipe.transform(this.form.value.cpf),
      password: this.form.value.password,
      role: this.form.value.access === '2' ? 'admin' : 'user'
    };

    this.authService.registerUser(newUser).then(() => {
      this.success = true;
      this.form.reset({ access: '0' });
      console.log('Usuário criado com sucesso!');
    }).catch(() => {
      this.error = true;
    });

    console.log('Usuário criado com sucesso!');
  }
}
