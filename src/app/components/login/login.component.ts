import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthData} from '../../models';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public router: Router) {
    this.authForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
  }
  public authForm: FormGroup;
  public submit(): void {
    const {userName, password}: AuthData  = JSON.parse(localStorage.getItem('user'));
    const formLogin = this.authForm.value.login;
    const formPassword = this.authForm.value.password;

    if (!(userName && password)) { return; }
    if (userName === formLogin && password !== formPassword) {
      console.log('ERROR - не правильный пароль');
      return;
    }

    if (userName === formLogin && password === formPassword) {
      localStorage.setItem('login', '1');
      console.log('set login 1');
      this.router.navigate(['/']);
      return;
    }

    localStorage.setItem('login', '0');
    this.router.navigate(['/registration']);
    return;
  }
}
