const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};

const bfs = (graph, start) => {
  const checked = []; // 탐색완료
  const willChecked = []; // 탐색 예정
  willChecked.push(start);

  while (willChecked.length !== 0) {
    const node = willChecked.shift();
    if (!checked.includes(node)) {
      checked.push(node);
      willChecked.push(...graph[node]);
    }
  }

  return checked;
};

console.log(bfs(graph, "A"));
