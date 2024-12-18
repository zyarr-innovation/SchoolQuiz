import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatLabel,  MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private quizService: QuizService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(controlName: string) {
    return this.registerForm.controls[controlName].invalid &&
      (this.registerForm.controls[controlName].dirty || this.registerForm.controls[controlName].touched)
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // Here, you can handle the login logic, e.g., make an HTTP request to the backend
    // console.log('Form submitted:', this.loginForm.value);
    // console.log(this.loginForm.controls['username'].value,
    //   this.loginForm.controls['password'].value);

    this.quizService.registerParticipant(
      this.registerForm.controls['username'].value,
      this.registerForm.controls['password'].value
    ).subscribe(outParticipant => {
      console.log(outParticipant);
      if (outParticipant.name == 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/participant', outParticipant.id]);
      }

      return true;
    });
  }
}
