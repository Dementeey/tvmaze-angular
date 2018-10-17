import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-registration',
  template: `<app-registration-form>registration</app-registration-form>`,
  styles: [
    `app-registration-form {
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 100000;
      background-color: #0d1933;
    }`
  ]
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
