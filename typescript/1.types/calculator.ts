/**
 * Let's make a calculator 🧮
 */

{
  type Method = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate(callback: Method, x: number, y: number) {
    // 3. 객체로 풀기
    const obj = {
      add: x + y,
      substract: x - y,
      multiply: x * y,
      divide: x / y,
      remainder: x % y,
    };

    return obj[callback];

    /*  1. if/else 조건문
    if (callback === "add") return x + y;
    else if (callback === "substract") return x - y;
    else if (callback === "multiply") return x * y;
    else if (callback === "divide") return x / y;
    else return x % y; */

    // 2. switch
    /* switch (callback) {
      case "add":
        return x + y;
      case "substract":
        return x - y;
      case "multiply":
        return x * y;
      case "divide":
        return x / y;
      case "remainder":
        return x % y;
      default:
        throw new Error("Method Error");
    } */
  }

  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("substract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
