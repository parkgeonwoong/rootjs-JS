/**
 * @desc : 동적 프로그래밍 최소 동전 교환
 */

function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = (amount) => {
    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount];
    }

    let min = [];
    let newMin;
    let newAmount;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = amount - coin;

      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
        console.log(`newMin: ${newMin}, amount: ${amount}`);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log(`min: ${min}, amount: ${amount}`);
      }
    }
    return (cache[amount] = min);
  };
  return makeChange(amount);
}

console.log(minCoinChange([1, 3, 4], 6));
