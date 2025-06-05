import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.services';

@Directive({
  selector: '[appRole]', 
  standalone: true // Permite que a diretiva seja importada diretamente sem precisar de um módulo.
})
export class RoleDirective {

  constructor(
    private templateRef: TemplateRef<any>,      // Referência ao template onde a diretiva é aplicada.
    private viewContainer: ViewContainerRef,    // Container para inserir ou remover o template do DOM.
    private authService: AuthService           
  ) {}

  @Input() set appRole(role: string) {
    if (this.authService.getRole() === role) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      // ...renderiza o template no DOM.
    } else {
      this.viewContainer.clear();
      // Caso contrário, remove o template do DOM.
    }
  }
}