import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";


describe("CalcService", () => {

  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    console.log("Before Each is called")
    //shared = new SharedService();
    //calc = new CalcService(shared);
    TestBed.configureTestingModule({
      providers: [CalcService, SharedService]
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService)
  });

  it("Should Multiply two numbers", () => {
    //const shared = new SharedService();
    //const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it("Should Add two numbers", () => {
    //const shared = new SharedService();
    //const calc = new CalcService(shared);
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  it("should call the mySharedFunction func", () => {
    //const shared = new SharedService();
    //if we use createSpyObj it will not instantiate the object so this "A fake HTTP call....." will not be executed.
    const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]);
    const calc = new CalcService(shared);
    //We can make sure the function is called without calling the original function
    //spyOn(shared, "mySharedFunction"); 
    //This will call the original function
    //spyOn(shared, "mySharedFunction").and.callThrough();
    const result = calc.multiply(3, 5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  })
});