import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../shared/quiz-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../shared/shared.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private quizService: QuizService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(controlName: string) {
    return this.loginForm.controls[controlName].invalid &&
      (this.loginForm.controls[controlName].dirty || this.loginForm.controls[controlName].touched)
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // Here, you can handle the login logic, e.g., make an HTTP request to the backend
    // console.log('Form submitted:', this.loginForm.value);
    // console.log(this.loginForm.controls['username'].value,
    //   this.loginForm.controls['password'].value);

    this.quizService.registerParticipant(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value
    )
  }
}
