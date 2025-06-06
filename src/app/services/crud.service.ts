import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

export abstract class CrudService<T> {
  protected abstract endpoint: string;

  constructor(protected backend: BackendService) {}

  create(item: T): Observable<T> {
    return this.backend.post<T>(this.endpoint, item);
  }

  read(): Observable<T[]> {
    return this.backend.get<T[]>(this.endpoint);
  }

  readById(id: string | number): Observable<T> {
    return this.backend.get<T>(`${this.endpoint}/${id}`);
  }

  update(id: string | number, item: T): Observable<T> {
    return this.backend.put<T>(`${this.endpoint}/${id}`, item);
  }

  delete(id: string | number): Observable<T> {
    return this.backend.delete<T>(`${this.endpoint}/${id}`);
  }
}