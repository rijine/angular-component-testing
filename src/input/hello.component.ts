import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `Hello {{name}}`
})
export class HelloComponent {
  @Input() name: string;
}