import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user = new User();
  userForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = fb.group({
      password: fb.control('', Validators.required),
      confirm: fb.control('', Validators.required)
    }, { validators: RegisterFormComponent.passwordMatch });

    this.userForm = fb.group({
      username: fb.control('', Validators.required),
      passwordForm: this.passwordForm
    });
  }

  register() {
    this.user = {
      username: this.userForm.get('username').value,
      password: this.passwordForm.get('password').value,
      age: 0
    }

    console.log(this.user);
  }

  static passwordMatch(group: FormGroup) {
    let password = group.get('password').value;
    let confirm = group.get('confirm').value;

    return (password === confirm) ? null : { notMatching: true };
  }

  ngOnInit() {
  }

}
