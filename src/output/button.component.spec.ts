import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// app
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should trigger the `emit` method when the button is clicked (Jasmine spy)', () => {
    spyOn(component.confirm, 'emit');
    const button = fixture.nativeElement.querySelector('button');

    button.click();

    expect(component.confirm.emit).toHaveBeenCalledWith(true);
  });

  it('should trigger the confirm obsevable `next` method when `doConfirm()` if called (subscribe)', async(() => {
    component.confirm.subscribe(data => expect(data).toBe(true));

    component.doConfirm();
  }));
});