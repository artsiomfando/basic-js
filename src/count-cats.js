const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard
    .flat()
    .reduce((acc, cur) => (cur == "^^" ? (acc += 1) : acc), 0);
};
