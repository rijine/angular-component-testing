import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// app
import { LoggerComponent } from './logger.component';

const wizard = {
  firstName: 'John',
  lastName: 'Doe',
  job: 'wizard',
  funFact: 'nobody knows who he really is',
  info: {
    sex: 'male',
    points: 100,
    health: 1000,
    damage: 99190
  }
};

const warrior = {
  firstName: 'Max',
  lastName: 'Doe',
  job: 'warrior',
  funFact: 'Feared by all',
  info: {
    sex: 'female',
    points: 1000,
    health: 9999,
    damage: 83210
  }
};

describe('LoggerComponent', () => {
  let component: LoggerComponent;
  let fixture: ComponentFixture<LoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render the passed @Input value', () => {
    // name property should be undefined so no name should be rendered
    expect(fixture.debugElement.nativeElement.querySelector('.name')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('.health')).toBeNull();

    component.data = Object.assign({}, wizard);

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('.name').innerHTML).toBe('John Doe');
    expect(fixture.debugElement.nativeElement.querySelector('.health').innerHTML).toBe('1000');
  });

  it('should correctly render the passed @Input value and update modified data', () => {
    // name property should be undefined so no name should be rendered
    expect(fixture.debugElement.nativeElement.querySelector('.name')).toBeNull();
    expect(fixture.debugElement.nativeElement.querySelector('.health')).toBeNull();

    component.data = Object.assign({}, wizard);

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('.name').innerHTML).toBe('John Doe');
    expect(fixture.debugElement.nativeElement.querySelector('.health').innerHTML).toBe('1000');

    component.data = Object.assign({}, warrior);

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('.health').innerHTML).toBe('9999');
  });
});