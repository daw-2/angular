import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;
  result;

  constructor(fb: FormBuilder, private userService: UserService) {
    this.username = fb.control('', [Validators.required, Validators.minLength(3)], this.existsValidator());
    this.password = fb.control('', [Validators.required, this.customValidator()]);

    this.userForm = fb.group({
      username: this.username,
      password: this.password
    });
  }

  register() {
    if (this.userForm.invalid) {
      return;
    }

    this.result = this.userForm.value;
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if ('12' == control.value) {
        return { custom: { error: 'Custom error' } };
      }

      return null;
    }
  }

  existsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userService.exists(control.value).pipe(
        map(exists => exists ? { error: true } : null)
      );
    }
  }

}
