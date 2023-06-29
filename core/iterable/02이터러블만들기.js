// [Symbol.iterator](): IterableIterator<T>;
const multiple = {
  [Symbol.iterator]: () => {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (let i of multiple) console.log(i);

console.log("---------");

// 재사용의 목적으로 함수로 만들기
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const run = makeIterable(2, 20, (n) => n * 2);
for (let x of run) console.log(x);
