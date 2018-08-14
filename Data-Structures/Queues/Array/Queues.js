class Queue {
    constructor() {
      this._storage = {};
      this._length = 0;
      this._head = 0;
  }

  enqueue(value) {
    this._storage[this._length + this._head] = value;
    this._length++;
  }

  dequeue() {
      if (this._length) {
        let firstValue = this._storage[this._head];
        delete this._storage[this._head];
        this._length--;
        this._head++;

        return firstValue;
      }

  }

  peek() {
    return this._storage[this._head];
  }
}

let q = new Queue();
q.enqueue(0);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.enqueue(4)
q.dequeue();
q.dequeue();


console.log(q)
