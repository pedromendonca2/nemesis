import { Injectable } from '@angular/core';
import { COMPOSERS } from '../data/composers';

@Injectable({ providedIn: 'root' })
export class ComposerService {
  getComposerById(id: number) {
    return COMPOSERS.find(c => c.id === id);
  }
}