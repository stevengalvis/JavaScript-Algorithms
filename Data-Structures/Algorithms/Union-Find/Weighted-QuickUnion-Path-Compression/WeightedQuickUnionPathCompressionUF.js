class WeightedQuickUnionPathCompressionUF {
  constructor(n) {
    this.parent = [];
    this.size = [];
    this.count = n;

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  count() {
    return this.count;
  }

  find(p) {
    this.validate(p);

    while (p != this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }

  validate(p) {
    let n = this.parent.lenth;
    if (p < 0 || p >= n) {
      throw Error("index" + p + "is not between 0 and " + (n - 1));
    }
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    if (this.size[rootP] < this.size[rootQ]) {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }

    this.count--;
  }
}

let qu = new WeightedQuickUnionPathCompressionUF(10);

for (let i in qu.parent) {
  console.log(`index: ${i} has parent ${qu.parent[i]} and size ${qu.size[i]}`);
}
