const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const din = "--discard-next"; // excludes the next element of the array from the transformed array.
  const dip = "--discard-prev"; // excludes the previous element of the array from the transformed array.
  const don = "--double-next"; // doubles the next element of the array in the transformed array.
  const dop = "--double-prev"; // doubles the previous element of the array in the transformed array.

  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    let resultArr = [];
    let trans;

    if (
      (arr[0] == dip || arr[0] == dop) &&
      (arr[arr.length - 1] == din || arr[arr.length - 1] == don)
    ) {
      trans = arr.slice(1, -1);
    } else if (arr[0] == dip || arr[0] == dop) {
      trans = arr.slice(1);
    } else if (arr[arr.length - 1] == din || arr[arr.length - 1] == don) {
      trans = arr.slice(0, -1);
    } else {
      trans = arr.slice(0);
    }

    for (let i = 0; i < trans.length; i++) {
      if (trans[i] == don) {
        resultArr.push(trans[i + 1]);
      } else if (trans[i] == dop) {
        if (i == 1 || (i >= 2 && trans[i - 2] !== din))
          resultArr.push(trans[i - 1]);
      } else if (trans[i] == din) {
        i += 1;
      } else if (trans[i] == dip) {
        if (i == 1 || (i >= 2 && trans[i - 2] !== din)) resultArr.pop();
      } else {
        resultArr.push(trans[i]);
      }
    }

    return resultArr;
  }
};
