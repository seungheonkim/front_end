class Tree {
    //tree 의 constructor 생성 : tree 의 자식 노드들을 엘리먼트로 담을 children 배열로 선언
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    //트리 삽입 메서드
    //new 키워드로 자식 노드를 생성 후, children 배열에 push
    insertNode(value) {
        const childNode = new Tree(value);
        this.children.push(childNode);
    }

    //트리내 해당 value 가 포함되어있는지 여부 확인
    contains(value) {
        if (this.value === value) {
            return true;
        }

        for (let childNode of this.children) {
            if (childNode.contains(value)) return true;
        }

        return false;
    }
}

const rootNode = new Tree(null);

for (let i = 0; i <= 4; i++) {
    if (rootNode.children[i]) {
        rootNode.children[i].insertNode(i);
    }
    rootNode.insertNode(i);
}

console.log(rootNode);