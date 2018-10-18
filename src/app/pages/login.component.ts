import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  template: `<app-login></app-login>`,
  styles: [
    `app-login{
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      background-color: #333;
    }`
  ]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
