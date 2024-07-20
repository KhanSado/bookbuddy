import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup

  constructor(
    private service: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email() {
    return this.loginForm.get('email')!
  }
  get password() {
    return this.loginForm.get('password')!
  }

  login(){
    this.service.signin({
      email: this.email.value,
      password: this.password.value
    }).subscribe((res) => {
      sessionStorage.setItem("token", res.user._delegate.accessToken)
      this.router.navigate(['/home']);
    }, (err: any) => {
      sessionStorage.clear()
      console.log(err);
    })
  }

}

