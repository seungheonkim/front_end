class CircularQueue {
    //선형 큐에서와 같이 shift 연산을 하지 않기 때문에 메모리 사용량이 훨씬 적다!!
    constructor() {
        this.storage = new Array(this.size).fill(null);
        this.front = 0;
        this.rear = 0;
        this.size = 11;
        //isEmpty() 와 isFull() 을 구분하기 위해
        //size 가 n 인 원형 큐를 만들고 싶다면
        //(n+1) 의 길이를 가진 배열을 생성하면 된다!!
    }

    isFull() {
        return this.front === (this.rear + 1) % this.size;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log('queue is Full!');
            return;
        }
        this.storage[this.rear] = element;
        this.rear++;
        this.rear = (this.rear + 1) % this.size;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('queue is Empty!');
            return;
        }
        const result = this.storage[this.front];
        delete this.storage[this.front];
        this.front = (this.front + 1) % this.size;
        return result;
    }

    clear() {
        while (true) {
            if (!this.dequeue()) break;
        }
        this.front = this.rear;
    }
}