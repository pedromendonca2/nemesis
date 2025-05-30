import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { ComposerDetailComponent } from './composer-detail.component';
import { ComposerService } from '../../services/composer.service'; // você vai criar isso

@Component({
  selector: 'app-composer-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composer-detail.component.html',
  styleUrl: './composer-detail.component.scss'
})
export class ComposerDetailComponent{
  @Input() composer: any;
  @Output() fechar = new EventEmitter<void>();

  fecharDetalhes() {
    this.fechar.emit();
  }
}