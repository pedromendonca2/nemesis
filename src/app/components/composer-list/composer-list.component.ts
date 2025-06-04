import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.scss'
})
export class ComposerListComponent {
  @Input() items: any[] = [];
  @Output() detalhes = new EventEmitter<any>();

  selecionar(composer: any) {
    this.detalhes.emit(composer);
  }
}