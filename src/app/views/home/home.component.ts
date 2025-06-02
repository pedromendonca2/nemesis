import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { ComposerDetailComponent } from "../../components/composer-detail/composer-detail.component";
import { COMPOSERS } from '../../data/composers';
import { CpfPipe } from '../../pipes/cpf.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ComposerDetailComponent, CpfPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  cpf = 12345678900;

  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.role = this.authService.getRole(); // recupera do serviço  
  }

  selectedComposer: any = null;

  verDetalhes(composer: any) {
    this.router.navigate(['/compositor', composer.id]);
  }

  fecharDetalhes() {
    this.selectedComposer = null;
  }

  items = COMPOSERS;

  deveTocarMusica = false;

  submit(){
    this.deveTocarMusica ? this.deveTocarMusica = false : this.deveTocarMusica = true
  }
}

