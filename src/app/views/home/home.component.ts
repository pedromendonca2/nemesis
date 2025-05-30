import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { ComposerDetailComponent } from "../../components/composer-detail/composer-detail.component";
import { COMPOSERS } from '../../data/composers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ComposerDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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

