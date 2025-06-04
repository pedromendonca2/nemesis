import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { COMPOSERS } from '../../data/composers';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { ComposerListComponent } from '../../components/composer-list/composer-list.component';
import { RoleDirective } from '../../directives/role.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ComposerListComponent, CpfPipe, RoleDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  items = COMPOSERS;
  cpf = 12345678900;
  deveTocarMusica = false;

  constructor(private router: Router) {}

  ngOnInit() { }

  verDetalhes(composer: any) {
    this.router.navigate(['/compositor', composer.id]);
  }

  submit(){
    // this.deveTocarMusica ? this.deveTocarMusica = false : this.deveTocarMusica = true
    this.deveTocarMusica = !this.deveTocarMusica;
  }

  createUser() {
    this.router.navigate(['/create-user']);
  }
}

