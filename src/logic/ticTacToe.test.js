// ticTacToe.test.js
const ticTacToe = require('./ticTacToe');
const tester = new ticTacToe();

test("should return the board array", () => {
    expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should return the board array with first movebor", () => {
  expect(tester.makeMove(5)).toEqual([1, 2, 3, 4, "X", 6, 7, 8, 9]);
});

test("should return O aftur X has made move", () => {
  expect(tester.changePlayerTurn()).toBe("O");
});