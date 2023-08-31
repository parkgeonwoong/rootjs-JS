const Stack = require("../stack.js");

describe("Stack challenge", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created Empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("Push", () => {
    stack.push(5);
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("스택이 비어있다면 에러를 던진다.", () => {
      expect(() => {
        stack.pop();
      }).toThrow("stack is empty");
    });

    it("마지막값 반환하고 스택에서 제거한다", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toBe(2);
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("스택이 비어있다면 에러를 던진다.", () => {
      expect(() => {
        stack.peek();
      }).toThrow("stack is empty");
    });

    it("마지막값 반환한다.", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
    });
  });
});
