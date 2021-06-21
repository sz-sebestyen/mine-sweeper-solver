const Site = require("./Site");

module.exports = class MineField {
  constructor(map, numberOfMines, dig) {
    this.numberOfMines = numberOfMines;
    this.numberOfHiddenMines = numberOfMines;
    this.field = map
      .split("\n")
      .map((row, i) =>
        row.split(" ").map((tresure, j) => new Site(tresure, i, j, dig))
      );
    this.i_max = this.field.length;
    this.j_max = this.field[0].length;
  }

  toString() {
    return this.field
      .map((sites) => sites.map((site) => site.toString()).join(" "))
      .join("\n");
  }

  getSitesAround(site) {
    const getAllIndices = ({ i, j }) => [
      { i: i - 1, j: j - 1 },
      { i: i - 1, j },
      { i: i - 1, j: j + 1 },
      { i, j: j - 1 },
      { i, j: j + 1 },
      { i: i + 1, j: j - 1 },
      { i: i + 1, j },
      { i: i + 1, j: j + 1 },
    ];

    const indicesInField = getAllIndices(site).filter(
      ({ i, j }) => i < this.i_max && i > -1 && j < this.j_max && j > -1
    );

    return indicesInField.map(({ i, j }) => this.field[i][j]);
  }

  getSitesAcross(site) {
    const getAllIndices = ({ i, j }) => [
      { i: i - 2, j: j - 2 },
      { i: i - 2, j: j - 1 },
      { i: i - 2, j },
      { i: i - 2, j: j + 1 },
      { i: i - 2, j: j + 2 },

      { i: i - 1, j: j - 2 },
      { i: i - 1, j: j + 2 },
      { i, j: j - 2 },
      { i, j: j + 2 },
      { i: i + 1, j: j - 2 },
      { i: i + 1, j: j + 2 },

      { i: i + 2, j: j - 2 },
      { i: i + 2, j: j - 1 },
      { i: i + 2, j },
      { i: i + 2, j: j + 1 },
      { i: i + 2, j: j + 2 },
    ];

    const indicesInField = getAllIndices(site).filter(
      ({ i, j }) => i < this.i_max && i > -1 && j < this.j_max && j > -1
    );

    return indicesInField.map(({ i, j }) => this.field[i][j]);
  }

  getDigableSitesAround(site) {
    const sitesAround = this.getSitesAround(site);
    const digables = sitesAround.filter((s) => s.isUnknown());
    site.digables = digables;
    return digables;
  }

  isUsefulSite(site) {
    return site.isDugUp() && this.getDigableSitesAround(site).length;
  }

  getUsefulSitesAround(site) {
    const sitesAround = this.getSitesAround(site);
    const usefulSites = sitesAround.filter((site) => this.isUsefulSite(site));
    return usefulSites;
  }

  getUsefulSitesAcross(site) {
    const sitesAround = this.getSitesAcross(site);
    const usefulSites = sitesAround.filter((site) => this.isUsefulSite(site));
    return usefulSites;
  }

  getUsefulSites() {
    return this.field
      .map((row) => row.filter((site) => this.isUsefulSite(site)))
      .flat();
  }

  init() {
    this.usefulSites = this.getUsefulSites();
  }

  digAroundZeros() {
    let atLeastOnedig;
    this.usefulSites.forEach(
      (site) =>
        !site.getNumberOfMinesAround() &&
        site.digables.forEach((site) => {
          if (site.isUnknown()) {
            site.dig();
            atLeastOnedig = true;
          }
        })
    );
    return atLeastOnedig;
  }
};
