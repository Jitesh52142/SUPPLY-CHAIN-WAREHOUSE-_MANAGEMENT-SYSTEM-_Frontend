import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUserRole(): string | null {

    const token = this.getToken();

    if (!token) return null;

    const decoded: any = jwtDecode(token);

    return decoded.role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}