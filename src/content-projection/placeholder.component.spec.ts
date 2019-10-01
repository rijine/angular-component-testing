import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// app
import { PlaceholderComponent } from './placeholder.component';

@Component({
  selector: 'app-test',
  template: `<app-placeholder>This is my text.</app-placeholder>`
})
class TestComponent {}

describe('PlaceholderComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PlaceholderComponent]
    }).compileComponents(); // This is not needed if you are in the CLI context
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate', () => {
    expect(component).toBeDefined();
  });

  it('should correctly project the test content', () => {
    expect(
      fixture.debugElement
        .query(By.css('app-placeholder'))
        .nativeElement.innerHTML
    ).toContain('This is my text.');
  });
});