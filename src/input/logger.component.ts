import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-logger',
  template: `
    <div *ngIf="data" class="name">{{data.firstName}} {{data.lastName}}</div>
    <div *ngIf="data" class="health">{{data.info.health}}</div>
  `
})
export class LoggerComponent {
  @Input() data: any;
}