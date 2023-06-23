// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculate() {
    console.log(this.hoursPerMonth * this.payRate);
  }
}

class FullTimeEmployee extends Employee {
  static #PAY = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY);
  }
}

class PartTImeEmployee extends Employee {
  static #Pay = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTImeEmployee.#Pay);
  }
}

const i = new FullTimeEmployee("park", "Engineer", 12);
const j = new PartTImeEmployee("bob", "Engineer", 10);
i.calculate();
j.calculate();

console.log(i);
