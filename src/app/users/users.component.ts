import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  isLoading = true;
  userList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // faking an ajax call
    setTimeout( () => {
      this.userList = [{
        id: 1,
        name: 'John',
        email: 'j@k.com',
        phone: '453442342'
      },
      {
        id: 2,
        name: 'Steve',
        email: 's@t.com',
        phone: '43534'
      }];
      this.isLoading = false;
    }, 4000);
  }

}
