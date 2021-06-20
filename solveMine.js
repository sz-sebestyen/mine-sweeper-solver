const MineField = require("./MineField");

module.exports = function solveMine(map, n, open) {
  const mineField = new MineField(map, n, open);

  mineField.init();

  while (mineField.digAroundZeros()) {}

  console.log(mineField.toString());

  return "?";
};
