import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';
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

  // it('should render a button with text subscribe and the button should be disabled after click', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElement = el.queryAll(By.css('.subscribe'));
  //   // component.btnText = 'Subscribe';
  //   btnElement[0].nativeElement.click();
  //   setTimeout(() => {
  //     fixture.detectChanges();
  //     btnElement = el.queryAll(By.css('.subscribe'));
  //     expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
  //     expect(btnElement[0].nativeElement.disabled).toBeTrue();
  //     done(); //This is to inform jasmine that the async function execution is completed
  //   }, 3000);
  // });

  it('should render a button with text subscribe and the button should be disabled after click', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElement = el.queryAll(By.css('.subscribe'));
    // component.btnText = 'Subscribe';
    btnElement[0].nativeElement.click();
    setTimeout(() => {
      console.log('Some other test cases!!');
    }, 8000);
    setTimeout(() => {
      fixture.detectChanges();
      btnElement = el.queryAll(By.css('.subscribe'));
      //expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
      //expect(btnElement[0].nativeElement.disabled).toBeTrue();
      //done(); //This is to inform jasmine that the async function execution is completed
    }, 3000);

    flush();

    //tick(3000);
    expect(btnElement[0].nativeElement.textContent).toBe('Subscribed');
    expect(btnElement[0].nativeElement.disabled).toBeTrue();
    //tick(5000);
  }));

  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      console.log("First set timeout");
      counter = counter + 2;
    }, 2000);

    setTimeout(() => {
      console.log("Second set timeout");
      counter = counter + 3;
    }, 3000);

    Promise.resolve().then(() => {
      console.log("Promise...");
      counter = counter + 1;
    });

    //flush();

    flushMicrotasks();
    expect(counter).toBe(1);

    tick(2000);
    expect(counter).toBe(3);

    tick(3000);
    expect(counter).toBe(6);
  }));
});
