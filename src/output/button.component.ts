import { Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button (click)="doConfirm()">Confirm</button>`
})
export class ButtonComponent {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  doConfirm() {
    this.confirm.emit(true);
  }
}