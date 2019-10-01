import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// app
import { SwitcherComponent } from './switcher.component';

describe('SwitcherComponent', () => {
  let component: SwitcherComponent;
  let fixture: ComponentFixture<SwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SwitcherComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should display title if `hasTitle` is true (default)', () => {
    const containerElement = fixture.debugElement.nativeElement.querySelector('h3');
    expect(containerElement).not.toBeNull();
  });

  it('should not display title if `hasTitle` is false', () => {
    component.hasTitle = false;

    fixture.detectChanges();

    const containerElement = fixture.debugElement.nativeElement.querySelector('h3');

    expect(containerElement).toBeNull();
  });

  it('should display the default step by default', () => {
    const containerElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(containerElement.innerText).toEqual('This is the default step');
  });

  it('should display the second step', () => {
    component.step = 2;

    fixture.detectChanges();

    const containerElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(containerElement.innerText).toEqual('This is step 2');
  });
});