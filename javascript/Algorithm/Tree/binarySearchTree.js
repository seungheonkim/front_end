class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    //tree 에 value 추가
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BinarySearchTree(value);
            } else {
                this.left.insert(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = new BinarySearchTree(value);
            } else {
                this.right.insert(value);
            }
        } else {
            console.log('Already existing!');
        }
    }

    //tree 에 value 값 탐색
    contains(value) {
        if (this.value === value) return true;

        if (value < this.value) {
            //작으면 왼쪽에서 탐색 시작
            return !!(this.left && this.left.contains(value));
        }

        if (value > this.value) {
            //크면 오른쪽에서 탐색 시작
            return !!(this.right && this.right.contains(value));
        }
    }

    //전위 순회 (root -> L -> R)
    preOrder(callback) {
        callback(this.value);
        if (this.left) this.left.preOrder(callback);
        if (this.right) this.right.preOrder(callback);
    }

    //중위 순회 (L -> root -> R)
    inOrder(callback) {
        if (this.left) this.left.preOrder(callback);
        callback(this.value);
        if (this.right) this.right.preOrder(callback);
    }

    //후위 순회(L -> R -> root)
    postOrder(callback) {
        if (this.left) this.left.preOrder(callback);
        if (this.right) this.right.preOrder(callback);
        callback(this.value);
    }
};

const rootNode = new BinarySearchTree(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
rootNode.left.right.value; // 8
rootNode.right.left.value; //11

let arr = [];
rootNode.preOrder((value) => arr.push(value * 2));
console.log(arr); // [20, 14, 16, 24, 22]