import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignInService } from 'src/app/demo/authentication/sign-in/sign-in.service';
import { AuthService } from '../auth.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { data } from 'src/app/fack-db/series-data';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup

  constructor(
    private service: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    })
  }

  get username() {
    return this.signupForm.get('username')!
  }
  get email() {
    return this.signupForm.get('email')!
  }
  get password() {
    return this.signupForm.get('password')!
  }
  get firstname() {
    return this.signupForm.get('firstname')!
  }
  get lastname() {
    return this.signupForm.get('lastname')!
  }

  registerUser(){
    this.service.signup({
      id: "",
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      avatarUrl: "",
      createAt: new Date().toString(),
      updatedAt: "",
      documentId: "",
      email: this.email.value,
      password: this.password.value,
      username: this.username.value,
      userId: ""
    }).subscribe((res: any) => {
      sessionStorage.setItem("token", res.user._delegate.accessToken)
      this.router.navigate(['/home']);
      this.service.createData({
        id: "",
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        username: this.username.value,
        email: this.email.value,
        createAt: new Date().toString(),
        password: "",
        userId: res.user._delegate.uid,
        avatarUrl: undefined,
        documentId: undefined,
        updatedAt: undefined
      })

    }, (err: any) => {
        console.log(err);
    })
  }

}
