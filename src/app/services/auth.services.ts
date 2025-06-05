import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ // todo serviço tem um injectable
  providedIn: 'root',
})
export class AuthService {
  private user: string = '';
  private password: string = '';
  private role: string = '';
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  setCredentials(user: string, password: string, role: string) {
    this.user = user;
    this.password = password;
    this.role = role;
  }

  getUser(): string {
    return this.user;
  }

  getPassword(): string {
    return this.password;
  }

  getRole(): string {
    return this.role;
  }

  async authenticate(username: string, password: string): Promise<boolean> {
    const users: any[] = await firstValueFrom(this.http.get<any[]>(this.apiUrl));
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.setCredentials(user.username, user.password, user.role);
      return true;
    }
    return false;
  }

  async registerUser(newUser: any): Promise<void> {
    await firstValueFrom(this.http.post(this.apiUrl, newUser));
  }

  async getUsers(): Promise<any[]> {
    return await firstValueFrom(this.http.get<any[]>(this.apiUrl));
  }
}