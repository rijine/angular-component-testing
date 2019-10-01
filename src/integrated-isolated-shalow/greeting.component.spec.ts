import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// app
import { GreetingComponent } from './greeting.component';

/**
 * This test is simple, it has no dependency. 
 * We render the template to be able to verify our assertions.
 */

/* 
  Usage: <app-greeting name="Joe"></app-greeting>
*/
describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [GreetingComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Render the template
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should render `Hello John!` by default', () => {
    expect(fixture.debugElement.nativeElement.innerText).toEqual('Hello John! Glad to see you');
  });

  it('should render `Hello Keira!` when `name` is passed', () => {
    component.name = 'Keira';

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerText).toEqual('Hello Keira! Glad to see you');
  });
}) 