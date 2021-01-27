import { Router } from '@angular/router';
import { AlertifyServiceService } from './../../services/alertify-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService,
              private altertify: AlertifyServiceService,
              private router: Router) {}
  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {

    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token)
      {
        localStorage.setItem('token', token.userName);
        this.altertify.success("Login Success");
        this.router.navigate(['/']);
      } else {
         this.altertify.error("Login not successful");

      }
  }
}
