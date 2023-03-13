/**
 * @desc: 그래프 클래스
 */

import Dictionary from "../map/01딕셔너리";

class Graph {
  constructor() {
    this.vertices = []; // 정점
    this.adjList = new Dictionary(); // 인접리스트 → [키, 값]
  }

  // 정점추가
  addVertex(v) {}
}

const graph = new Graph();
