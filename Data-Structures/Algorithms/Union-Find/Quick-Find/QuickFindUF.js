// p and q are connected if and only if they have the same id
class QuickFindUF {
  constructor(n) {
    this.id = [];
    for (let i = 0; i < n; i++) {
      // set id of each object to itself
      this.id[i] = i;
    }
  }

  connected(p, q) {
    // check whether p and q are in the same component (2 array accesses)
    return this.id[p] === this.id[q];
  }

  union(p, q) {
    let pid = this.id[p];
    let qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      // change all entries with id[p] to id[q] (at most 2N + 2 array accesses)
      if (this.id[i] == pid) {
        this.id[i] = qid;
      }
    }
  }
}

// let qf = new QuickFindUF(10);
// console.log(qf.connected(1, 0));
// qf.union(1, 0);
// console.log(qf.connected(1, 0), " after union 1,0");
// console.log(qf.connected(0, 2));
// qf.union(0, 2);
// console.log(qf.connected(0, 2), " after union 0,2");
// console.log(qf.connected(1, 2));
