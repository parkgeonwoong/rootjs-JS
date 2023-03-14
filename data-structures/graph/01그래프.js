/**
 * @desc: 그래프 클래스 23.03.14
 */

import Dictionary from "../map/01딕셔너리.js";

export class Graph {
  constructor() {
    this.vertices = []; // 정점
    this.adjList = new Dictionary(); // 인접리스트 → [키, 값]
  }

  // [추가] 정점
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []); // 정점 추가니까 인접리스트 빈 배열
  }

  // [추가] 간선
  addEdge(v, w) {
    // 두 정점
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  // [출력]
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + " → ";
      let neighbors = this.adjList.get(this.vertices[i]); // 정점의 value 값(배열)
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }
}

export const graph = new Graph();
export const Vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
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

// console.log(graph.toString());

// console.log(graph);

console.clear();
