const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity == undefined ||
    sampleActivity <= 0 ||
    sampleActivity == Infinity ||
    /[^\d]/.test(sampleActivity)
  ) {
    return false;
  } else {
    const k = 0.693 / HALF_LIFE_PERIOD;
    const approxAge = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    return approxAge > 0 ? approxAge : false;
  }
};
