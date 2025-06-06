import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { BackendService } from './backend.service';
//import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ // todo serviço tem um injectable
  providedIn: 'root',
})
export class AuthService extends CrudService<any> {
  protected endpoint = 'http://localhost:3000/api/users';

  private user: string = '';
  private password: string = '';
  private role: string = '';

  constructor(backend: BackendService) {
    super(backend);
  }

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
    const users: any[] = await firstValueFrom(this.read());
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.setCredentials(user.username, user.password, user.role);
      return true;
    }
    return false;
  }

  // async registerUser(newUser: any): Promise<void> {
  //   await firstValueFrom(this.http.post(this.apiUrl, newUser));
  // }

  // async getUsers(): Promise<any[]> {
  //   return await firstValueFrom(this.http.get<any[]>(this.apiUrl));
  // }
}