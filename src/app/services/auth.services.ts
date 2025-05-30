import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string = '';

  setRole(role: string) {
    this.userRole = role;
  }

  getRole(): string {
    return this.userRole;
  }
}