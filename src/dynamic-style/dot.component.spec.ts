import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { customMatchers, expect as expectStyle } from '../helpers/jasmine-custom-matchers';
import { DotComponent } from './dot.component';

describe('DotComponent', () => {
  let component: DotComponent;
  let fixture: ComponentFixture<DotComponent>;

  beforeEach(async(() => {
    jasmine.addMatchers(customMatchers);

    TestBed.configureTestingModule({
      declarations: [DotComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should set the background style to `grey` by default', () => {
    expectStyle(fixture.debugElement.children[0].nativeElement).toHaveStyle({
      'background-color': 'grey'
    });
  });

  it('should set the background style red', () => {
    component.color = 'red';

    fixture.detectChanges();
    
    expectStyle(fixture.debugElement.children[0].nativeElement).toHaveStyle({
      'background-color': 'red'
    });
  });
});