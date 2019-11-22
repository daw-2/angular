import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user = new User();
  userForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AngularFireAuth,
    private router: Router
  ) {
    this.userForm = fb.group({
      username: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  login() {
    this.user = {
      username: this.userForm.get('username').value,
      password: this.userForm.get('password').value,
      age: 0
    }

    this.authService.auth.signInWithEmailAndPassword(
      this.user.username, this.user.password
    ).then(success => {
      console.log(success);
      this.router.navigate(['/pizzas']);
    })
     .catch(error => {
       this.errorMessage = error.message;
     });
  }

}
