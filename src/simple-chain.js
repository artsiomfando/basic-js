const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  getLength() {
    return this.result.join("").slice(0, -2).length;
  },
  addLink(value) {
    if (value === "") {
      this.result.push("( )~~");
      return this;
    } else {
      this.result.push(`( ${String(value)} )~~`);
      return this;
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const res = this.result.join("").slice(0, -2);
    this.result = [];
    return res;
  },
};

module.exports = chainMaker;
