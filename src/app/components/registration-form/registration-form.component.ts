import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FamilyStatus, RegistrationData} from '../../models';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {

  constructor(public router: Router) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/)
      ]),
      birthday: new FormControl('', [
          Validators.required
        ]
      ),
      phone: new FormControl('+38-', [
        Validators.required,
        Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/)
      ]),
      gender: new FormControl('male', [
        Validators.required
      ]),
      selectForm: new FormControl(null, [
        Validators.required
      ]),
    });
  }
  public registrationForm: FormGroup;

  public familyStatus: Array<FamilyStatus> = [
    {
      value: 'married',
      viewValue: 'Married'
    },
    {
      value: 'unmarried',
      viewValue: 'Unmarried'
    },
    {
      value: 'active',
      viewValue: 'Actively looking'
    },
    {
      value: 'developer',
      viewValue: 'Developer'
    }
  ];
  public submit(): void {
   if (!this.registrationForm.valid) { return; }

    const newUser: RegistrationData = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
      userName: this.registrationForm.value.userName,
      password: this.registrationForm.value.password,
      birthday: this.registrationForm.value.birthday.getDay() + '/' +
        this.registrationForm.value.birthday.getMonth() + '/' +
        this.registrationForm.value.birthday.getFullYear(),
      phone: this.registrationForm.value.phone,
      gender: this.registrationForm.value.gender,
      select: this.registrationForm.value.selectForm
    };


    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('login', '1');
    this.router.navigate(['/']);
    return;
  }

}


