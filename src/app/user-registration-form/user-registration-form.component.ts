import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  userRegisterForm = new FormGroup({
    fName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),

    mName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),

    lName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),

    state: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),

    city: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),

    email: new FormControl('',
      [
        Validators.required,
        Validators.email
      ]),

    password: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/)
      ]),

    birthdate: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-((19|20)\d{2})$/g)
      ]),

    mobile: new FormControl('',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^([0-9]){10}$/)
      ]),

    pincode: new FormControl('',
      [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
        Validators.pattern(/^([0-9]){6}$/)
      ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmission() {
    console.log('The user has successfully registered');
  }

  onClickingResetButton() {
    this.userRegisterForm.reset();
  }

}
