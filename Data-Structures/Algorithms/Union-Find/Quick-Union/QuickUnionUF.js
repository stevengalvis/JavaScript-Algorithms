class QuickUnionUF {
  constructor(n) {
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  _root(i) {
    // chase parent pointers until reach root
    //depth of i array accesses
    while (i != this.id[i]) {
      i = this.id[i];
    }
    return i;
  }

  connected(p, q) {
    // check if p and q have same root
    // depth of p and q array accesses
    return this._root(p) === this._root(q);
  }

  union(p, q) {
    let i = this._root(p);
    let j = this._root(q);
    // change root of p to point to root of q
    // depth of p and q array accesses
    this.id[i] = j;
  }
}

let qu = new QuickUnionUF(10);

for (let i in qu.id) {
  console.log(`index: ${i} has parent ${qu.id[i]}`);
}
