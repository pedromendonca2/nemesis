import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ComposerComponent } from './views/composer/composer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //path '' é o root, o padrão  
  { path: 'login', loadComponent: () => LoginComponent },
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'compositor/:id', loadComponent: () => ComposerComponent }
];