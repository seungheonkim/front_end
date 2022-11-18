class AdjacencyList {
    constructor() {
        this.vertices = {};
    }

    //정점 추가하기
    addVertex(vertex) {
        if (this.vertices[vertex]) {
            this.vertices[vertex] = this.vertices[vertex];
        } else {
            this.vertices[vertex] = [];
        }
    }

    //정점 존재 유무 확인
    contains(vertex) {
        return !!this.vertices[vertex];
    }

    //간선 존재 유무 확인
    hasEdge(fromVertex, toVertex) {
        if (!this.contains(fromVertex)) {
            //fromVertex 자체가 없으면 간선자체도 없으므로 false 반환
            return false;
        }
        return !!this.vertices[fromVertex].includes(toVertex);
    }

    //간선 추가
    addEdge(fromVertex, toVertex) {
        //fromVertex 과 toVertex 둘 중 하나라도 없으면 간선 추가 불가능
        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            return;
        }

        if (!this.hasEdge(fromVertex, toVertex)) {
            this.vertices[fromVertex].push(toVertex);
        }

        if (!this.hasEdge(toVertex, fromVertex)) {
            this.vertices[toVertex].push(fromVertex);
        }
    }

    //간선 삭제
    removeEdge(fromVertex, toVertex) {
        if (!this.contains(fromVertex) || !this.contains(toVertex)) {
            return;
        }

        if (this.hasEdge(fromVertex, toVertex)) {
            //해당 fromVertex 와 연결되어있는 toVertex 의 인덱스 번호 찾아서
            const fromIdx = this.vertices[fromVertex].indexOf(toVertex);
            //해당 toVertex 인덱스 번호로 연결된 것 삭제
            this.vertices[fromVertex].splice(fromIdx, 1);
        }

        if (this.hasEdge(toVertex, fromVertex)) {
            const toIdx = this.vertices[toVertex].indexOf(fromVertex);
            this.vertices[toVertex].splice(toIdx, 1);
        }
    }

    //정점 삭제
    removeVertex(vertex) {
        if (this.contains(vertex)) {
            while (this.vertices[vertex].length > 0) {
                //삭제할 정점과 연결된 간선들이 존재한다면 해당 간선들 모두 삭제
                this.removeEdge(this.vertices[vertex][0], vertex)
            }
            delete this.vertices[vertex];
        }
    }
}

const adjList = new AdjacencyList();
adjList.addVertex("Seoul");
adjList.addVertex("Daejeon");
adjList.addVertex("Busan");

adjList.contains("Seoul"); // true
adjList.contains("Jeonju"); // false

adjList.addEdge("Daejeon", "Seoul");
adjList.hasEdge("Seoul", "Daejeon"); //true

adjList.removeVertex("Seoul");
adjList.hasEdge("Seoul", "Daejeon"); //false