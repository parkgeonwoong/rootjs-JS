/**
 * 개체 Promise는 비동기 작업의 최종 완료(또는 실패) 및 해당 결과 값을 나타냅니다.
 *
 * Callback을 뺄 수 있다.
 */

// Callback
function runInDelay(callback, second) {
  if (!second || second < 0) {
    throw new Error("second Error!");
  }

  setTimeout(callback, second * 1000);
}

try {
  runInDelay(() => {
    console.log("Hello world");
  }, 2);
} catch (error) {
  console.log(error);
}

console.clear();

// Promise
function runInDelay2(second) {
  return new Promise((resolve, reject) => {
    if (!second || second < 0) {
      reject(new Error("second가 0보다 작음"));
    }
    setTimeout(resolve, second * 1000);
  });
}

runInDelay2(2)
  .then(() => console.log("Hello world"))
  .catch((error) => console.error(error))
  .finally(() => console.log("End"));

/**
 * Promise 체이닝
 */
function fryEgg(egg) {
  return Promise.resolve(`${egg} -> 프라이`);
}

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 달걀`);
}

function getChicken() {
  return Promise.reject(new Error("No Chicken"));
  return Promise.resolve("사료 -> 치킨");
}

getChicken()
  .catch(() => "디폴트 치킨")
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((fry) => console.log(fry));
