class Counter {
  #value;
  constructor(value) {
    if (isNaN(value) || value < 0) this.#value = 0;
    else this.#value = value;
  }

  get value() {
    console.log(this.#value);
  }

  increase() {
    this.#value++;
  }
}

const n = new Counter(2);
console.log(n);
n.increase();
n.value;
