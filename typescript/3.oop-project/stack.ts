{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly prev?: StackNode;
  };

  class StackImpl implements Stack {
    #length: number = 0;
    #head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
      return this.#length;
    }

    push(value: string) {
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

  const stack = new StackImpl(10);
  stack.push("1");
  stack.push("2");
  stack.push("3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
