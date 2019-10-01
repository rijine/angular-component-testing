import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <h3>Menu</h3>
    <ul>
      <li><a [routerLink]="['/documentation']" class="documentation-link">Documentation</a></li>
      <li><a [routerLink]="['/about']" class="about-link">About</a></li>
    </ul>
  `
})
export class MenuComponent {
}