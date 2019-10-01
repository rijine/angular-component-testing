import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: `
    <div class="content"><ng-content></ng-content></div>
  `,
  styles: [`.content { background: red; color: blue; }`]
})
export class PlaceholderComponent {}