import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Víctor', [Validators.required, Validators.minLength(3)]],
    email: ['victandres98@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terms: [false, Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  createUser() {
    this.formSubmitted = true;
    if (this.registerForm.invalid) return;

    this.userService.createUser(this.registerForm.value).subscribe(
      (res) => console.log(`[RES]`, res),
      (error) => console.error(`[ERROR]`, error)
    );
  }

  fieldInvalid(field: string): boolean {
    return this.registerForm.get(field)?.invalid && this.formSubmitted
      ? true
      : false;
  }

  acceptTerms() {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  passwordsInvalid() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    return pass1 !== pass2 && this.formSubmitted ? true : false;
  }
}
