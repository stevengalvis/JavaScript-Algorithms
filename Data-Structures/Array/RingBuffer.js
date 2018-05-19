/* credits to https://casualjavascript.com/?11 */

class RingBuffer {
  constructor(capacity) {
    this.buffer = new Array(capacity);
    this.capacity = capacity;
    this.head = this.tail = this.size = 0;
  }

  push(data) {
    let next = this.head + 1;
    if (next >= this.capacity) {
      next = 0;
    }
    if (this.size < this.capacity) {
      this.size++;
    }
    this.buffer[this.head] = data;
    this.head = next;
  }

  pop() {
    let data = this.buffer[this.tail];
    let next = this.tail + 1;
    if (next >= this.capacity) {
      next = 0;
    }
    if (this.size > 0) {
      this.size--;
    }
    this.tail = next;
    return data;
  }
  *[Symbol.iterator]() {
    for (var i = 0; i < this.size; i++) {
      yield this.buffer[(this.tail + i) % this.capacity];
    }
  }
}

let rb = new RingBuffer(5);
rb.push(1);
rb.push(2);
rb.push(3);
rb.pop();
rb.push(4);
rb.push(5);
rb.push(6);
rb.push(7);

for (let value of rb) {
  console.log(value);
}
