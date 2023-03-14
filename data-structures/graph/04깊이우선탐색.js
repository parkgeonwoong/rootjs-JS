/**
 * @desc : 깊이 우선 탐색
 * "시작 정점에서 출발해 동일 경로의 마지막 정점까지 순회하고 다시 반대 방향으로 돌아와 다음 경로를 찾아가는 식으로 진행된다"
 *
 * @알고리즘 진행방식
 * 1. v를 방문했음 표시
 * 2. 방문하지 않은 v의 인접 정점 w에 대해
 *  2-1. 정점 w를 방문한다
 * 3. v를 탐색했음 으로 표시
 *
 * 단계별로 재귀 호출을 하여 그때그때 스택에 저장한다
 */

import { Graph } from "./01그래프.js";

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

// 정점 u를 방문했으니 표시
function depthFirstSearchVisit(u, color, adjList, callback) {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u); // 방문한 정점을 출력하는 콜백
  }

  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
  }
  color[u] = Colors.BLACK;
}

/**
 * @desc: 알고리즘 탐구 개선한 DFS
 * u의 방문시간 : d[u]
 * u의 탐색시간 : f[u]
 * u의 선행자 : p[u]
 */

const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };

  for (let i = 0; i < vertices.length; i++) {
    d[vertices[i]] = 0;
    f[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

function DFSVisit(u, color, d, f, p, time, adjList) {
  console.log("방문: ", u);
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);

  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];

    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count;
  console.log("탐색: ", u);
}

/**
 * @Test
 */

const graph = new Graph();
const Vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < Vertices.length; i++) {
  graph.addVertex(Vertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

const printNode = (value) => {
  console.log("탐색한 정점 : ", value);
};

depthFirstSearch(graph, printNode);
DFS(graph);
