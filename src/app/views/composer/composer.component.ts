import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { COMPOSERS } from '../../data/composers';

@Component({
  selector: 'app-composer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.scss'
})
export class ComposerComponent implements OnInit {
  composer: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.composer = COMPOSERS.find(c => c.id === id);
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}