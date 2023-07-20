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

function dfsRecursive(node, visited) {
  // 현재 노드를 방문한 것으로 표시하고 출력
  visited[node] = true;
  console.log(node);

  // 현재 노드와 연결된 노드들 중 방문하지 않은 노드를 재귀적으로 방문
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfsRecursive(neighbor, visited);
    }
  }
}

function dfs(graph) {
  const visited = {};

  // 모든 노드를 순회하면서 방문하지 않은 노드를 기준으로 DFS
  for (const node in graph) {
    if (!visited[node]) {
      dfsRecursive(node, visited);
    }
  }
}

dfs(graph);
