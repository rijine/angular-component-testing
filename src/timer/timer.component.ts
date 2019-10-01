import { Component, Inject, InjectionToken, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';

export const INTERVAL_SCHEDULER = new InjectionToken<Scheduler>('Interval Scheduler');
export const INTERVAL_TIME = new InjectionToken<number>('Interval Time');

@Component({
  selector: 'app-timer',
  template: `timer: {{timer | async | number}}`
})
export class TimerComponent implements OnInit {
  public maxTimer: number = 5;
  public timer: Observable<number>;

  constructor(
    @Optional()
    @Inject(INTERVAL_TIME)
    private time: number,
    @Optional()
    @Inject(INTERVAL_SCHEDULER)
    private scheduler: Scheduler,
  ) {}

  ngOnInit() {
    this.timer = interval(this.time || 1000, this.scheduler || async)
    .pipe(takeWhile(tick => tick < this.maxTimer));
  }
}