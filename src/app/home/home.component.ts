import { DataService } from './../data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/user', user.id]">{{ user.name }}</a>
      </li>
    </ul>
  `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class HomeComponent {
  users: any;
  constructor(private data: DataService) {
    this.users = this.data.getusersList();
    console.log('users list', this.users);
  }
}
