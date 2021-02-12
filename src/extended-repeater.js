const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);

  if (options == undefined) return str;
  if (options.separator == undefined) options.separator = "+";
  if (options.additionSeparator == undefined) options.additionSeparator = "|";

  options.additionSeparator = String(options.additionSeparator);
  options.separator = String(options.separator);

  const add = options.addition
    .concat(options.additionSeparator)
    .repeat(options.additionRepeatTimes)
    .slice(0, -options.additionSeparator.length);

  if (options.repeatTimes) {
    return str
      .concat(add, options.separator)
      .repeat(options.repeatTimes)
      .slice(0, -options.separator.length);
  } else if (options.repeatTimes == undefined) {
    return str.concat(options.addition);
  } else {
    return str.concat(add);
  }
};
  
