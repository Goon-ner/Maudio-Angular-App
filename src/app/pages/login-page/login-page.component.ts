import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe({
      error: (e) => console.warn(e),
      complete: () => this.router.navigate(['/shop'])},

    )
  }

  loginForm: FormGroup
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl('')
    })
  }

}
