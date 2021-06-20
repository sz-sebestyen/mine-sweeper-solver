const Site = require("./Site");

module.exports = class MineField {
  constructor(map, numberOfMines, dig) {
    this.digInt = (i, j) => parseInt(dig(i, j));
    this.numberOfMines = numberOfMines;
    this.numberOfHiddenMines = numberOfMines;
    this.field = map
      .split("\n")
      .map((row, i) =>
        row.split(" ").map((tresure, j) => new Site(tresure, i, j, dig))
      );
    this.i_max = field.length;
    this.j_max = field[0].length;
  }

  toString() {
    return this.field
      .map((sites) => sites.map((site) => site.toString()).join(" "))
      .join("\n");
  }
};
