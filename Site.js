module.exports = class Site {
  constructor(tresure, i, j, dig) {
    this.tresure = tresure === "?" ? "?" : parseInt(tresure);
    this.i = i;
    this.j = j;
    this.isMarkedAsMine = () => this.tresure === "x";
    this.isDugUp = () => Number.isInteger(this.tresure);
    this.dig = () => {
      if (this.isDugUp()) throw "This site is already dug up!";
      if (this.isMarkedAsMine()) throw "This site is marked as a mine!";
      this.tresure = parseInt(dig(this.i, this.j));
    };
  }

  markAsMine() {
    this.tresure = "x";
  }

  toString() {
    return `${this.tresure}`;
  }

  getNumberOfMinesAround() {
    return this.tresure;
  }
};
