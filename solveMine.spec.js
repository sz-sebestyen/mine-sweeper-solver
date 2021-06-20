const game = require("./game");
const solveMine = require("./solveMine");

describe("solveMine", () => {
  it("should work for basic test", () => {
    const start = `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`;
    const solution = `1 x 1 1 x 1
2 2 2 1 2 2
2 x 2 0 1 x
2 x 2 1 2 2
1 1 1 1 x 1
0 0 0 1 1 1`;
    const open = game(solution);

    const result = solveMine(start, 6, open);

    expect(result).toBe(solution);
  });

  it("should return '?' when there is no trivial solution", () => {
    const start = `0 ? ?
0 ? ?`;
    const solution = `0 1 x
0 1 1`;
    const open = game(solution);

    const result = solveMine(start, 1, open);

    expect(result).toBe("?");
  });

  it("should solve easy examples", () => {
    const start = `0 ? ?
0 ? ?`;
    const solution = `0 2 x
0 2 x`;
    const open = game(solution);

    const result = solveMine(start, 2, open);

    expect(result).toBe(solution);
  });

  it("should solve harder examples", () => {
    const start = `? ? ? ? 0 0 0
? ? ? ? 0 ? ?
? ? ? 0 0 ? ?
? ? ? 0 0 ? ?
0 ? ? ? 0 0 0
0 ? ? ? 0 0 0
0 ? ? ? 0 ? ?
0 0 0 0 0 ? ?
0 0 0 0 0 ? ?`;
    const solution = `1 x x 1 0 0 0
2 3 3 1 0 1 1
1 x 1 0 0 1 x
1 1 1 0 0 1 1
0 1 1 1 0 0 0
0 1 x 1 0 0 0
0 1 1 1 0 1 1
0 0 0 0 0 1 x
0 0 0 0 0 1 1`;
    const open = game(solution);

    const result = solveMine(start, 6, open);

    expect(result).toBe(solution);
  });
});
