import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLogin, TypeLogResponse, User } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: TypeLogin): Observable<TypeLogResponse> {
    return this.http.post<TypeLogResponse>(`${environment.login}`, data)
  }
  signup(data: TypeLogin): Observable<TypeLogResponse> {
    return this.http.post<TypeLogResponse>(`${environment.signup}`, data)
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.users)
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.users}/${id}`);
  }
  updateUser(id: number | string, data: User): Observable<User> {
    return this.http.put<User>(`${environment.users}/${id}`, data)
  }
}
