import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { GradePipe } from '../pipes/grade.pipe';
import { GradeDirective } from './grade.directive';

describe('GradeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, GradePipe, GradeDirective]
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

  }));

  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it("should change the text color on mouse over", () => {
    let divs = el.queryAll(By.css('div'));
    let div0 = divs[0];
    let div1 = divs[1];
    let div2 = divs[2];
    let div3 = divs[3];
    let div4 = divs[4];
    let div5 = divs[5];
    let div6 = divs[6];
    let div7 = divs[7];
    //For first div value is 95 and we are testing here
    div0.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green');

    div4.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('blue');

    //For last div value is 18 and we are testing here
    div7.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div7.nativeElement.style.color).toBe('red');
  });

  it("should change the text color to black on mouse leave", () => {
    let divs = el.queryAll(By.css('div'));
    let div0 = divs[0];
    let div1 = divs[1];
    let div2 = divs[2];
    let div3 = divs[3];
    let div4 = divs[4];
    let div5 = divs[5];
    let div6 = divs[6];
    let div7 = divs[7];
    //For first div value is 95 and we are testing here
    div0.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('black');

    div4.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('black');

    //For last div value is 18 and we are testing here
    div7.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div7.nativeElement.style.color).toBe('black');
  });
});
