const around = (i, j) => [
  { i: i - 1, j: j - 1 },
  { i: i - 1, j },
  { i: i - 1, j: j + 1 },
  { i, j: j - 1 },
  { i, j: j + 1 },
  { i: i + 1, j: j - 1 },
  { i: i + 1, j },
  { i: i + 1, j: j + 1 },
];

const filterAround = (around, maxi, maxj) => {
  return around.filter(
    (tile) => tile.i < maxi && tile.i > -1 && tile.j < maxj && tile.j > -1
  );
};

function openAroundZeros(mineField, open) {
  mineField.forEach((row, rIndex) => {
    row.forEach((mine, mIndex) => {
      if (mine === "0") {
        const aroundIndices = filterAround(
          around(rIndex, mIndex),
          mineField.length,
          mineField[0].length
        );

        aroundIndices.forEach((tile) => {
          mineField[tile.i][tile.j] = open(tile.i, tile.j);
        });
      }
    });
  });

  return mineField;
}

module.exports = function solveMine(map, n, open) {
  const mineField = map.split("\n").map((row) => row.split(" "));

  // console.log(openAroundZeros(mineField, open));

  return "?";
};
