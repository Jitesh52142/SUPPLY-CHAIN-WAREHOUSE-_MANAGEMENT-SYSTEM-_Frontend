import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  login() {

    if (this.loginForm.invalid) {
      this.snack.open("Please enter valid credentials", "Close", { duration: 3000 });
      return;
    }

    this.loading = true;

    console.log("LOGIN BODY:", this.loginForm.value);

    this.auth.login(this.loginForm.value).subscribe({

      next: (token: string) => {

        console.log("TOKEN RECEIVED:", token);

        if (!token) {
          this.snack.open("Login failed: Token not received", "Close", { duration: 3000 });
          this.loading = false;
          return;
        }

        // Save token
        this.auth.saveToken(token);

        // Extract role
        const role = this.getUserRole(token);

        // Redirect user
        this.redirectUser(role);

        this.loading = false;
      },

      error: (err) => {

        console.error("LOGIN ERROR:", err);

        this.snack.open("Invalid email or password", "Close", { duration: 3000 });

        this.loading = false;

      }

    });

  }

  getUserRole(token: string): string {

    try {

      const payload = JSON.parse(atob(token.split('.')[1]));

      return payload.role ||
        payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
        "";

    } catch {

      return "";

    }

  }

  redirectUser(role: string) {

    switch (role) {

      case "Admin":
        this.router.navigate(['/admin/dashboard']);
        break;

      case "HOD":
        this.router.navigate(['/dashboard/hod']);
        break;

      case "FinanceManager":
        this.router.navigate(['/dashboard/finance']);
        break;

      case "MedicalDirector":
        this.router.navigate(['/dashboard/director']);
        break;

      default:
        this.router.navigate(['/login']);

    }

  }

}