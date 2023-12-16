{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly prev?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    #length: number = 0;
    #head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this.#length;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("스택이 가득 찼습니다.");
      }

      const node = { value, prev: this.#head };
      this.#head = node;
      this.#length++;
    }

    pop() {
      if (!this.#head) {
        throw new Error("스택이 비어있습니다.");
      }

      const node = this.#head;
      this.#head = node.prev;
      this.#length--;

      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push("1");
  stack.push("2");
  stack.push("3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(10);
  stack2.push(4);
  stack2.push(5);
  stack2.push(6);
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
