const getDirections = (matrix, from, to) => {
    //queue 안에 탐색해 나갈 정점들을 저장
    let queue = [from];

    //방문 처리를 위한 boolean 배열 생성
    let isVisited = new Array(matrix.length).fill(false);
    //방문 처리
    isVisited[from] = true;

    //탐색해 나갈 정점이 없을 때까지 반복
    while (queue.length > 0) {
        //큐에 들어있는 가장 앞 원소 빼면서 now 에 할당
        let now = queue.shift();

        //해당 탐색 정점이 우리가 찾고자 하는 목적지라면 도착한 것이므로 true 반환
        if (now === to) return true;

        //now 정점이 포함되어 있는 해당 배열을 순회하면서
        for (let next = 0; next < matrix[now].length; next++) {
            //next 점을 방문한 이력도 없고 간선으로 이어진 next 정점이라면
            if (isVisited[next] === false && matrix[now][next] === 1) {
                //queue 에 next 점을 추가해서 다음에 탐색할 정점으로 대기 시키기
                queue.push(next);
                //방문했으므로 true 로 바꾸기
                isVisited[next] = true;
            }
        }
    }
    return false;
}

const result = getDirections(
    [
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0],
    ],
    0,
    2
);
console.log(result); // true
// 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
// 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.

const result2 = getDirections(
    [
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 1, 1, 0],
    ],
    1,
    4
);
console.log(result2); // false