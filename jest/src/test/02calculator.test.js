const Calculator = require("../02calculator.js");

// describe(name, fn) : 여러 관련 테스트를 함께 그룹화하는 블록을 만듬
describe("Calculator", () => {
  let cal;

  // beforeEach(fn, timeout) : 각 테스트가 실행되기 전에 함수를 실행
  beforeEach(() => {
    cal = new Calculator();
  });

  // it === test 각 테스트는 독립적으로 해야함
  it("init 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.add(5);
    expect(cal.value).toBe(5);
  });

  it("subtract", () => {
    cal.set(5);
    cal.subtract(3);
    expect(cal.value).toBe(2);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(5);
    expect(cal.value).toBe(10);
  });

  it("divide", () => {
    cal.set(10);
    cal.divide(2);
    expect(cal.value).toBe(5);
  });
});
