class QuickFindUF {
  // p and q are connected if and only if they have the same id
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
