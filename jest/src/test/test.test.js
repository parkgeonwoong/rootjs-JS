const sol = require("../test.js");

test("DFS start", () => {
  expect(sol(4, 2)).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ]);
});
