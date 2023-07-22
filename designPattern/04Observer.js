/**
 * [옵저버 패턴]
 */

// 주체
class Subject {
  constructor() {
    this.observers = [];
  }
  getObserverList() {
    return this.observers;
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name);
      } catch (err) {
        console.log(err);
      }
    });
  }
}

// 옵저버들
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subj) {
    console.log(`${this.name}: notified from ${subj} class`);
  }
}

const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

console.log(subj.getObserverList());
subj.notifyAll();

console.log("");

subj.unsubscribe(c);
subj.notifyAll();
