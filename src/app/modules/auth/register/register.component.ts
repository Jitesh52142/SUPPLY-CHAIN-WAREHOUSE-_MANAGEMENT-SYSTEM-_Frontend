import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  roles = [
    "Admin",
    "HOD",
    "FinanceManager",
    "MedicalDirector"
  ];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar
  ){

    this.registerForm = this.fb.group({

      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]

    });

  }
register(){

  if(this.registerForm.invalid){
    return;
  }

  const payload = {
    username: this.registerForm.value.username,
    email: this.registerForm.value.email,
    password: this.registerForm.value.password,
    role: this.registerForm.value.role
  };

  this.auth.register(payload)
  .subscribe({

    next: (res:any) => {

      console.log("Register success:", res);

      this.snack.open("Registration successful", "Close", {
        duration: 3000
      });

      this.router.navigate(['/login']);

    },

    error: (err) => {

      console.error("Register error:", err);

      const message = err?.error?.message || "Registration failed";

      this.snack.open(message, "Close", {
        duration: 3000
      });

    }

  });

}

  };



