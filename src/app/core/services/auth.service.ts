import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7036/api/auth';

  constructor(private http: HttpClient) {}

 login(data:any){
  return this.http.post(
    `${this.apiUrl}/login`,
    data,
    { responseType: 'text' }
  );
}
register(data:any):Observable<any>{
  return this.http.post(`${this.apiUrl}/register`, data, {
    responseType: 'text'
  });
}


  saveToken(token:string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  getUserRole(): string {

    const token = this.getToken();

    if (!token) return '';

    try {

      const payload = JSON.parse(atob(token.split('.')[1]));

      return payload.role ||
        payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
        '';

    } catch {

      return '';

    }

  }

}