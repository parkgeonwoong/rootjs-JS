/**
 * @desc : 너비 우선 탐색
 * "시작 정점에서 순회를 시작해 그래프를 한 번에 한 층씩, 우선 이웃한 정점들을 모두 방문한다"
 *
 * @알고리즘 진행방식
 * 1. 큐 생성
 * 2. v를 방문 표시 → 큐에 v 추가
 * 3. 큐 비어있지 않으므로
 *  3-1. u를 큐에서 삭제
 *  3-2. u를 방문 표시
 *  3-3. u의 방문하지 않은 모든 인접 정점을 큐에 넣는다
 *  3-4. u를 탐색했음 으로 표시
 *
 * @방문한정점
 * - 흰색 : 아직 방문하지 않은 정점
 * - 회색 : 방문은 했으나 탐색하지 않은 정점
 * - 흑색 : 탐색을 마친 정점
 *
 * 정점담 방문 횟수는 2회를 초과하면 안된다
 */

import { Queue } from "../queue/01큐함수.js";
import Stack from "../stack/02스택클래스.js";
import { Graph } from "./01그래프.js";

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

const initialzeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initialzeColor(vertices);
  const queue = new Queue();

  queue.enqueue(startVertex); // 출발 지점이 될 시작 정점 큐에 넣기

  // 큐가 비어있지 않다면
  while (!queue.isEmpty()) {
    const u = queue.dequeue(); // 큐 맨 앞의 정점을 꺼내어
    const neighbors = adjList.get(u); // 이 정점의 인접 리스트 가져온다
    color[u] = Colors.GREY;

    // u 인접리스트 순회
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

const printNode = (value) => {
  console.log("탐색한 정점 : ", value);
};

/**
 * @desc : BFS로 최단 경로 찾기
 */

export const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initialzeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
};

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

breadthFirstSearch(graph, Vertices[0], printNode);

// BFS 최단 거리 테스트
const shortestPathA = BFS(graph, Vertices[0]);
// console.log(shortestPathA);

const fromVertex = Vertices[0];
for (let i = 1; i < Vertices.length; i++) {
  const toVertex = Vertices[i];
  const path = new Stack();

  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += " - " + path.pop();
  }
  console.log(s);
}
