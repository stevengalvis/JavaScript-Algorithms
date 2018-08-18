class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  isEmpty() {
    return this._head == null;
  }

  enqueue(value) {
    let node = {
      value,
      next: null
    };

    let oldLast = this._tail;
    this._tail = node;

    if (this.isEmpty()) {
      this._head = this._tail;
    } else {
      oldLast.next = this._tail;
    }
    this._length++;
  }

  dequeue() {
    let oldFirst = this._head;
    this._head = oldFirst.next;
    if (this.isEmpty()) {
      this._tail = null;
    }
    this._length--;
    return oldFirst.value;
  }
}

let q = new Queue();
q.enqueue(0);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);
