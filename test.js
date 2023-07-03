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

// getChicken()
//   .catch(() => "디폴트 치킨")
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((fry) => console.log(fry));

async function getAnswer() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    console.log(error);
    chicken = "디폴트 치킨";
  }
  const egg = await fetchEgg(chicken);
  const fry = await fryEgg(egg);
  return fry;
}
getAnswer().then(console.log);
