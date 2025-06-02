import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

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