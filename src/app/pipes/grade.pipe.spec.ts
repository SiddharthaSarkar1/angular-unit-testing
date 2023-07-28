import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it("should assign A grade when mark greater than 89", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(90);
    expect(grade).toBe("A");
  });

  it("should assign B grade when mark is 80 to 89", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(84);
    expect(grade).toBe("B");
  });

  it("should assign C grade when mark is 70 to 79", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(76);
    expect(grade).toBe("C");
  });

  it("should assign D grade when mark is 60 to 69", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(64);
    expect(grade).toBe("D");
  });

  it("should assign E grade when mark is 35 to 59", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(43);
    expect(grade).toBe("E");
  });

  it("should assign FAIL grade when mark is less than 35", () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(30);
    expect(grade).toBe("FAIL");
  });
});
