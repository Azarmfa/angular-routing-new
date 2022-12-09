import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <p>about works!</p>
    <a routerLink="me">About Me</a>
    <a routerLink="ceo">About CEO</a>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AboutComponent {}
