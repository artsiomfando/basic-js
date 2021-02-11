const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  } else if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("THROWN");
  } else {
    const month = date.getMonth();

    return month === 0 || month === 1 || month === 11
      ? "winter"
      : month === 2 || month === 3 || month === 4
      ? "spring"
      : month === 5 || month === 6 || month === 7
      ? "summer"
      : "autumn";
  }
};
