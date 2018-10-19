import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  template: `
    <app-search>search</app-search>
    <app-table>table</app-table>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
