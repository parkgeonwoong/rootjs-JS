Array;

type Student = {
  passed: boolean;
};

// 1. every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
const student: Student[] = [{ passed: true }, { passed: true }, { passed: true }];
const result = student.every((student) => student.passed);
console.log(result);

// 2. every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));
