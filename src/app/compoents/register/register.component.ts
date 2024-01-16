import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/AuthService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    fullName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  submitApplication() {
    const userData = {
      fullName: this.registerForm.value.fullName ?? '',
      password: this.registerForm.value.password ?? '',
      email: this.registerForm.value.email ?? '',
      birthDate: this.registerForm.value.birthDate ?? '',
      gender: this.registerForm.value.gender ?? '',
      phoneNumber: this.registerForm.value.phoneNumber ?? '',
    };

    // this.authService.registerUser(userData).
  }
}
