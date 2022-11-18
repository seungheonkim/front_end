// 문제
// 방향이 있는 간선과 방향이 없는 간선들의 목록들을 받아 2차원 배열의 인접행렬을 반환하는 함수를 작성하세요.

const createMatrix = (edges) => {
    let arr = edges.flat().filter((el) => typeof el === 'number');
    let maxNum = Math.max(...arr);

    let matrix = [];
    for (let i = 0; i <= maxNum; i++) {
        let newArr = new Array(maxNum + 1).fill(0);
        matrix.push(newArr);
    }

    for (let el of edges) {
        if (el[2] === 'directed') {
            matrix[el[0]][el[1]] = 1;
        } else if (el[2] === 'undirected') {
            matrix[el[0]][el[1]] = 1;
            matrix[el[1]][el[0]] = 1;
        }
    }
    return matrix;
}