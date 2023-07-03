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

// async await
async function getAnswer() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = "디폴트 치킨";
    console.log(error);
  }
  const egg = await fetchEgg(chicken);
  const fry = await fryEgg(egg);
  return fry;
}
getAnswer().then(console.log);

/**
 * Promise 병렬처리
 */

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 2000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
