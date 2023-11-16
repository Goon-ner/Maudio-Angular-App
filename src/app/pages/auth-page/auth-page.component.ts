import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  constructor(
    private authService: AuthService
  ) {
  }
  auth() {
    this.authService.auth(this.authForm.value)
  }

  authForm: FormGroup
  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(''),
      'password': new FormControl('')
    })
  }
}
