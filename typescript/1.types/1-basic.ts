{
  // Never 타입
  function isNotNever(message: string): never {
    throw new Error(message);
    while (true) {}
  }

  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  function fetchNum(id: number): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // optional
  function fullName(firstName: string, lastName?: string) {
    console.log(`${firstName} ${lastName}`);
  }

  fullName("Hello");

  // rest
  function addNumber(...n: number[]) {
    return n.reduce((acc, cur) => acc + cur, 0);
  }
  console.log(addNumber(1, 2, 3, 4, 5));

  // Array 방식들
  const eng: string[] = ["a", "b"];
  const score: Array<number> = [1, 2];
  const engFn = (en: readonly string[]) => {};

  // type-Aillas
  type Text = string;
  const name: Text = "hello";

  // String Literal Types
  type Name = "name";
  const name2: Name = "name";
}

{
  // ✅ 중요 Union
  type SuccessState = {
    response: { body: string };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "Loggedin",
      },
    };
  }

  function printLoginState(state: LoginState) {
    // state.response 에러 -> LoginState가 두개니까 무엇인지 알수가 없음
    if ("response" in state) {
      console.log(`Success: ${state.response.body}`);
    } else {
      console.log(`Fail: ${state.reason}`);
    }
  }

  const loginState: LoginState = login();
  printLoginState(loginState);
}

{
  // Discriminated Union
  type SuccessState = {
    result: "success";
    response: { body: string };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: "fail",
      reason: "error",
    };
  }

  function printLoginState2(state: LoginState) {
    if (state.result === "success") {
      console.log(`Success: ${state.response.body}`);
    } else {
      console.log(`Fail: ${state.reason}`);
    }
  }
  printLoginState2(login2());
}

console.clear();

{
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }

  console.log(Days.Wednesday);
}

{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  const button = document.querySelector("class")!;
}
