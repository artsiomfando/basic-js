const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // let turns = 0;
  // const disk = disksNumber;

  // const calcTurns = function (disk) {
  //   if (disk >= 1) {
  //     calcTurns(disk - 1);
  //     turns++;
  //     calcTurns(disk - 1);
  //   }
  //   return turns;
  // };
  // turns = calcTurns(disk);
  // const time = Math.floor(turns / (turnsSpeed / (60 * 60)));

  // return { turns: turns, seconds: time };

  const turns = 2 ** disksNumber - 1;
  const time = Math.floor(turns / (turnsSpeed / (60 * 60)));
  return { turns: turns, seconds: time };
};
