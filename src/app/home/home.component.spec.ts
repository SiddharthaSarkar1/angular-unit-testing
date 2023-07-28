import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';


import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  //This commented codes are perfect we just used adifferent approach
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ HomeComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  //Insted of using 2 beforerEach we will do it another way
  beforeEach(waitForAsync(
    () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have correct contents', () => {
    //Checking if first <p> element has text 'home works!' in this or not
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');
    //Checking if the button is disabled or not
    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
    //Checking the image src URL is this 'http://imagesrc.com/123' or not
    let imageElements = el.queryAll(By.css('img'));
    expect(imageElements[0].nativeElement.src).toBe('http://imagesrc.com/123');
    //Checking the div here we used mock data
    component.title = "Welcome to Angular Testing";
    fixture.detectChanges();
    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe("Welcome to Angular Testing");
  });

  

});
