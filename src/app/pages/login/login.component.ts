import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public auth: AuthService) { }

  login(userForm: NgForm) {
    this.auth.login(userForm.value);
    console.log(userForm.value);
    console.log(this.auth.errors);
  }

}
