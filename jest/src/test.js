function solution(N, M) {
  const visited = Array.from({ length: N }, () => false); // 중복 체크 배열
  const answer = [];
  let temp = []; // 각 만든 수열

  function DFS(L, start) {
    if (L === M) {
      answer.push([...temp]);
      return;
    }

    // 지난 숫자는 제외하고 loop을 진행 (중복을 피하기 위해)
    for (let i = start; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(i + 1);
        DFS(L + 1, i + 1);
        temp.pop();
        visited[i] = false;
      }
    }
  }

  DFS(0, 0);
  return answer;
}

module.exports = solution;
