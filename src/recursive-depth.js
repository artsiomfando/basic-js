const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.some((el) => Array.isArray(el))) {
      depth = 1 + this.calculateDepth(arr.flat());
    }
    return depth;
  }
};
