class Graph {
    constructor() {
        this.matrix = [];
    }

    //정점 추가
    addVertex() {
        const currentLength = this.matrix.length;
        for (let i = 0; i < currentLength; i++) {
            this.matrix[i].push(0);
        }
        this.matrix.push(new Array(currentLength + 1).fill(0));
    }

    //정점 존재 유무 확인
    contains(vertex) {
        return !!this.matrix[vertex];
    }

    //간선 추가
    addEdge(from, to) {
        const currentLength = this.matrix.length - 1;

        if (from === undefined || to === undefined) {
            console.log('2 arguments required!')
            return;
        }

        if (from > currentLength ||
            to > currentLength ||
            from < 0 ||
            to < 0) {
            console.log('range out of matrix!');
            return;
        }
        //adding Edge
        this.matrix[from][to] = 1;
    }

    //간선 존재 여부 검사
    hasEdge(from, to) {
        return !!this.matrix[from][to];
    }

    //간선 제거
    removeEdge(from, to) {
        const currentLength = this.matrix.length - 1;

        if (from === undefined || to === undefined) {
            console.log('2 arguments required!')
            return;
        }

        if (from > currentLength ||
            to > currentLength ||
            from < 0 ||
            to < 0) {
            console.log('range out of matrix!');
            return;
        }
        //removing Edge
        this.matrix[from][to] = 0;
    }
}

const adjMatrix = new Graph();
adjMatrix.addVertex();
adjMatrix.addVertex();
adjMatrix.addVertex();
console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 0, 0],
	FROM 	1	[0, 0, 0],
		  	2	[0, 0, 0]
*/
let zeroExists = adjMatrix.contains(0);
console.log(zeroExists); // true
let oneExists = adjMatrix.contains(1);
console.log(oneExists); // true
let twoExists = adjMatrix.contains(2);
console.log(twoExists); // true

adjMatrix.addEdge(0, 1);
adjMatrix.addEdge(0, 2);
adjMatrix.addEdge(1, 2);

let zeroToOneEdgeExists = adjMatrix.hasEdge(0, 1);
console.log(zeroToOneEdgeExists); // true
let zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // true
let oneToZeroEdgeExists = adjMatrix.hasEdge(1, 0);
console.log(oneToZeroEdgeExists); // false

console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 1, 1],
	FROM 	1	[0, 0, 1],
		  	2	[0, 0, 0]
*/

adjMatrix.removeEdge(1, 2);
adjMatrix.removeEdge(0, 2);
let oneToTwoEdgeExists = adjMatrix.hasEdge(1, 2);
console.log(oneToTwoEdgeExists); // false
zeroToTwoEdgeExists = adjMatrix.hasEdge(0, 2);
console.log(zeroToTwoEdgeExists); // false

console.log(adjMatrix.matrix);
/*
							TO
		 	  	 0  1  2
		  	0	[0, 1, 0],
	FROM 	1	[0, 0, 0],
		  	2	[0, 0, 0]
*/