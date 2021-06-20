module.exports = function (mineFieldSolution) {
  const mineField = mineFieldSolution.split("\n").map((row) => row.split(" "));

  return (i, j) => {
    if (mineField[i][j] === "x") throw `BOOM!!4! i:${i} j:${j}`;
    return mineField[i][j];
  };
};
