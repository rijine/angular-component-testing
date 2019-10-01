import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
// app
import { TimerComponent, INTERVAL_SCHEDULER, INTERVAL_TIME } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent],
      providers: [
        { provide: INTERVAL_SCHEDULER, useFactory: getTestScheduler },
        { provide: INTERVAL_TIME, useValue: 20 },
      ]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should count to 5', () => {
    const expected = cold('--a-b-c-d-e-|', { a: 0, b: 1, c: 2, d: 3, e: 4 });

    expect(component.timer).toBeObservable(expected);
  });

  it('should be able to count to 3', () => {
    component.maxTimer = 3;
    const expected = cold('--a-b-c-|', { a: 0, b: 1, c: 2 });

    expect(component.timer).toBeObservable(expected);
  });
});