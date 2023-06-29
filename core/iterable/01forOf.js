const array = [1, 2, 3];
const iterator = array.values(); // Iterable 반환

// for ..of은 어떻게 만들어졌을까?
while (true) {
  const next = iterator.next();
  if (next.done) break;
  console.log(next.value);
}
