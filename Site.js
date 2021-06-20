module.exports = class Site {
  constructor(tresure, i, j, dig) {
    this.tresure = tresure === "?" ? "?" : parseInt(tresure);
    this.i = i;
    this.j = j;
    this.isMarkedAsMine = () => this.tresure === "x";
    this.isDugUp = () => Number.isInteger(this.tresure);
    this.isUnknown = () => this.tresure === "?";
    this.dig = () => {
      if (this.isDugUp()) throw "This site is already dug up!";
      if (this.isMarkedAsMine())
        throw "This site is marked as a mine, don't dig here!";
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
    if (this.isMarkedAsMine())
      throw "This site is marked with an 'x', no number to show!";
    if (this.isUnknown())
      throw "This site is marked with an '?', no number to show!";
    return this.tresure;
  }
};
