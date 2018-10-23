// ticTacToe.test.js
const ticTacToe = require('./ticTacToe');
const tester = new ticTacToe();

test("should return the board array", () => {  
  expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should return the board array with first movebor", () => {
  tester.makeMove(5);
  expect(tester.board).toEqual([1, 2, 3, 4, "X", 6, 7, 8, 9]);
});

test("should return O aftur X has made move", () => {
  tester.changePlayerTurn();
  expect(tester.playerTurn).toBe("O");
});

test("should return O ", () => {
  tester.changePlayerTurn();
  expect(tester.playerTurn).toBe("X");
});

test("should return true for legal move", () => {
  expect(tester.validateInput(4)).toBe(true);
});

test("should return false for illegal move", () => {
  expect(tester.validateInput(5)).toBe(false);
});

test("should return false for win check on square 1-3", () => {
  expect(tester.checkWinStatus()).toBe(false);
});

test("should return true for win check on square 1-3", () => {
  tester.makeMove(1);
  tester.makeMove(2);
  tester.makeMove(3);
  expect(tester.checkWinStatus()).toBe(true);
});