import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HodGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {

    const role = this.auth.getUserRole();

    if (role === 'HOD') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}