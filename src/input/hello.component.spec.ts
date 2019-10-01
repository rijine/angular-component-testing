import { ComponentFixture, TestBed, async } from '@angular/core/testing';
// app
import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should correctly render the passed @Input value', () => {
    // name property should be undefined so no name should be rendered
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Hello ');

    component.name = 'Keira';

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML).toBe('Hello Keira');
  });
});