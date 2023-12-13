{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay = () => console.log("풀타임 근무");
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay = () => console.log("파트타임 근무");
    workParkTime() {}
  }

  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay(); // 제네릭은 일반적인 것 임으로 .pay()를 인식할 수 없음 -> "확장"
    return employee;
  }

  const woong = new FullTimeEmployee();
  const park = new PartTimeEmployee();
  woong.workFullTime();

  const woongPay = payBad(woong);
  const parkPay = pay(park);
  woongPay.pay();
  parkPay.workParkTime();

  // 오브젝트 타입의 key값을 받아야 하는 제약사항
  const obj = { name: "woong", age: 20 };
  const obj2 = { animal: "🐕" };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "age"));
}
