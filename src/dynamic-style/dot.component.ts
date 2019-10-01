import { Component } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: `<div [style.background-color]="color"></div>`,
  styles: [`div { padding: 5px; border-radius: 50% 50%}`]
})
export class DotComponent {
  color = 'grey';
}