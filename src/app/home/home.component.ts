import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome to Home Page!</h2>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
