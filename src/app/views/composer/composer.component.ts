import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPOSERS } from '../../data/composers';

@Component({
  selector: 'app-composer',
  standalone: true,
  imports: [CommonModule], // módulos, diretivas, pipes (oq usa tanto no .ts quanto no .html)
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.scss'
})
export class ComposerComponent implements OnInit { //toda vez que a aplicação tiver nesse ciclo de vida, ela vai ser executada (onInit)
  composer: any;

  constructor(private route: ActivatedRoute, private router: Router) {} // tudo que é serviço, provider, etc.

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.composer = COMPOSERS.find(c => c.id === id);
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}