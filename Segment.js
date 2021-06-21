module.exports = class Segment {
  constructor(sites, minMines, maxMines) {
    this.sites = sites;
    this.minMines = minMines;
    this.maxMines = maxMines;
  }

  size() {
    return this.sites.length;
  }
};
