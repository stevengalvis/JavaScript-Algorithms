function Stack(capacity) {
  this.storage = "";
  this.head = -1;
}

Stack.prototype.push = function(value) {
  this.storage += value;
  this.head += 1;
};

Stack.prototype.pop = function() {
  let value = this.storage.charAt(this.head);
  this.storage = this.storage.slice(0, -1);
  this.head -= 1;
  return value;
};

Stack.prototype.size = function() {
  return this.storage.length;
};

let stack = new Stack();

stack.push("s");
stack.push("t");
stack.push("e");
console.log(stack.pop());
stack.push("a");
console.log(stack.size());
console.log(stack.storage);
