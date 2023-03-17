/**
 * @desc : 그리드 최소 동전 문제
 */

function MinCoinChange(coins, amount) {
  const change = [];
  let total = 0;

  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];

    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
}

console.log(MinCoinChange([1, 3, 4], 6));
