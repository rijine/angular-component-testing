import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-notification',
  template: `<div>{{ notification | async }}</div>`
})
export class NotificationComponent {
  notification: Observable<string>;
}