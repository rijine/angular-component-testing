import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <header>
      <app-menu></app-menu>
    </header>
    <main>
      <div>
        Counter is at {{counter}}. 
        <a [routerLink]="['/home']" class="home-link">Go home</a>
      </div>
      <div>
        <button (click)="increment()" class="button-up">increment</button>
        <button (click)="decrement()" class="button-down">decrement</button>
        <button (click)="reset()" class="button-0">reset</button>
      </div>
    </main>
  `
})
export class CounterComponent {
  public counter: number = 0;

  constructor() { }

  public increment() {
    this.counter++;
    return this.counter;
  }

  public decrement() {
    this.counter--;
    return this.counter;
  }

  public reset() {
    this.counter = 0;
    return this.counter;
  }

}