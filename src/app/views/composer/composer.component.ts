import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComposerDetailComponent } from '../../components/composer-detail/composer-detail.component';
import { ComposerService } from '../../services/composer.service'; // você vai criar isso

@Component({
  selector: 'app-composer',
  standalone: true,
  imports: [CommonModule, ComposerDetailComponent],
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {
  composer: any;

  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.composer = this.composerService.getComposerById(id);
  }

  fecharDetalhes() {
    history.back(); // volta pra página anterior
  }
}