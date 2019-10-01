import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{name}}! Glad to see you</h1>`,
})
export class GreetingComponent { 
  @Input() name: string = 'John';
}