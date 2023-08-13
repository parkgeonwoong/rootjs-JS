const check = require("../01check.js");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn(); // mock함수 생성
    onFail = jest.fn();
  });

  it("should call success when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // onSuccess 목함수의 mock라는 데이터에 호출이(calls) 횟수가 1번
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1); // 위와 일치

    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes"); // 위와 일치

    expect(onFail.mock.calls.length).toBe(0);
  });

  it("should call fail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
