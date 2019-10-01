import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switcher',
  template: `
    <h3 *ngIf="hasTitle">Switcher title!</h3>
    <div [ngSwitch]="step">
      <p *ngSwitchCase="1">This is step 1</p>
      <p *ngSwitchCase="2">This is step 2</p>
      <p *ngSwitchCase="3">This is step 3</p>
      <p *ngSwitchDefault>This is the default step</p>
    </div>
  `
})
export class SwitcherComponent {
  public hasTitle: boolean = true;
  
  @Input() step: number = 0;
}