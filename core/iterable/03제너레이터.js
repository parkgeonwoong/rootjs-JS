function* makeGenerator() {
  for (let i = 0; i < 10; i++) {
    yield i * 2;
  }
}

const multiple = makeGenerator();
console.log(multiple.next());
console.log(multiple.next());
console.log(multiple.next());
