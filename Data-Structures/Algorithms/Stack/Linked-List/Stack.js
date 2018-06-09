class Stack {
  constructor() {
    this.first = null; // top of the stack
    this.n = 0; // size of the stack
  }

  isEmpty() {
    return this.first === null;
  }

  size() {
    return this.n;
  }
  // adds the item to the stack
  push(item) {
    let oldFirst = this.first;
    const newNode = {
      item
    };
    this.first = newNode;
    this.first.next = oldFirst;
    this.n++;
  }
  // removes and returns the item most recently added to this stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    let item = this.first.item;
    this.first = this.first.next;
    this.n--;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack Undeflow");
    }
    return this.first.item;
  }

  *[Symbol.iterator]() {
    let current = this.first;
    for (let i = 0; i < this.n; i++) {
      yield current;
      current = current.next;
    }
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();

for (let value of stack) {
  console.log(value);
}
