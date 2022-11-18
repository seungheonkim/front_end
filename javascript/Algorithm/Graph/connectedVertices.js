const connectedVertices = (edges) => {
    //2차원 인접 행렬을 만들기 위해 최대 값 구하기
    const maxNum = Math.max(...edges.flat());

    let matrix = [];
    for (let i = 0; i <= maxNum; i++) {//행, 열 만들기
        matrix[i] = [];
    }

    //간선 정보를 통해 간선 연결 유무 인접 리스트 만들기
    //무향이기 때문에 서로 모두에 인접한 정점 넣기
    for (let i = 0; i < edges.length; i++) {
        matrix[edges[i][0]].push(edges[i][1]);
        matrix[edges[i][1]].push(edges[i][0]);
    }

    let visited = [];
    let count = 0;

    for (let vertex = 0; vertex <= maxNum; vertex++) {
        if (!visited[vertex]) {
            dfs(matrix, vertex, visited);
            count++;
        }
    }
    return count;
}

//bfs 순회(queue 이용하기)
const bfs = (matrix, vertex, visited) => {
    const queue = [vertex];
    visited[vertex] = true;//방문한 vertex true 로 체크

    while (queue.length > 0) {
        const now = queue.shift();

        for (let next = 0; next < matrix[now].length; next++) {
            if (!visited[matrix[now][next]]) {//방문한 적이 없다면
                queue.push(matrix[now][next]);//방문 예정 목록에 넣기
                visited[matrix[now][next]] = true;//해당 정점은 방문했으므로 true 처리
            }
        }
    }
}

//dfs 순회(재귀함수 이용하기)
const dfs = (matrix, vertex, visited) => {
    visited[vertex] = true;
    for (let i = 0; i < matrix[vertex].length; i++) {
        if (!visited[matrix[vertex][i]]) {
            dfs(matrix, matrix[vertex][i], visited);
        }
    }
}

const result = connectedVertices([
    [0, 1],
    [2, 3],
    [3, 4],
    [3, 5],
]);
console.log(result); // 2