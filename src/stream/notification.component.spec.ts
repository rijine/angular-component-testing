import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
// app
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should correctly visualize the emitted values from the stream', () => {
    const stream = new Subject<string>();
    component.notification = stream.asObservable();
    
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('div').innerHTML
    ).toBe('');

    stream.next('You have a new email!');

    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('div').innerHTML
    ).toBe('You have a new email!');
  });
});