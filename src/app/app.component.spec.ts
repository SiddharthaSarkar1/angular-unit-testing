import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sid-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sid-unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('sid-unit-testing app is running!');
  // });

  it('should render a button with text subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const btnElement = el.queryAll(By.css('.subscribe'));
    //component.btnText = 'Subscribe';
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribe');
    expect(btnElement[0].nativeElement.disabled).toBeFalse();
  });

  //Here we are not testing the DOM interaction we are hard coding and testing the logic
  // it('should render a button with text subscribe and the button should be disabled after click', () => {
  //   const btnElement = el.queryAll(By.css('.subscribe'));
  //   component.isSubscribed = true;
  //   component.btnText = 'Subscribed';
  //   fixture.detectChanges();
  //   expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
  //   expect(btnElement[0].nativeElement.disabled).toBeTrue();
  // });

  it('should render a button with text subscribe and the button should be disabled after click', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElement = el.queryAll(By.css('.subscribe'));
    // component.btnText = 'Subscribe';
    btnElement[0].nativeElement.click();
    fixture.detectChanges();
    btnElement = el.queryAll(By.css('.subscribe'));
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
  });
});
