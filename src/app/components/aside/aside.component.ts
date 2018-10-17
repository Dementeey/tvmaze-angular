import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  constructor(private router: Router) {}

  public showFiller = true;
  public links: object[] = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/profile',
      title: 'Profile'
    }
  ];
  public logout(): void {
    localStorage.setItem('login', '0');
    this.router.navigate(['/login']);
  }
}
