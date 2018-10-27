// ticTacToe.test.js
const ticTacToe = require('./ticTacToe');
var tester = new ticTacToe();

test("should return the board array", () => {  
  expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should return the board array with first movebor", () => {
  tester.makeMove(5);
  expect(tester.board).toEqual([1, 2, 3, 4, "X", 6, 7, 8, 9]);
});

test("should return O aftur X has made move", () => {
  expect(tester.playerTurn).toBe("O");
});

test("should return X", () => {
  tester.makeMove(1);
  expect(tester.playerTurn).toBe("X");
});

test("should return true for legal move", () => {
  tester.newSession();
  expect(tester.validateInput(4)).toBe(true);
});

test("should return false for illegal move", () => {
  tester.newSession();
  tester.makeMove(5);
  expect(tester.validateInput(5)).toBe(false);
});

test("should return 0 for win check", () => {
  tester.newSession();
  expect(tester.winStatus).toBe(0);
});

test("should return 1 for win check on square 1-3 for X", () => {
  tester.newSession();
  tester.makeMove(1);
  tester.makeMove(9);
  tester.makeMove(2);
  tester.makeMove(8);
  tester.makeMove(3);
  expect(tester.winStatus).toBe(1);
});

test("should return a new board", () => {  
  tester.newSession();
  expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should return 1 for win check on square 4-6", () => {
  tester.newSession();
  tester.makeMove(4);
  tester.makeMove(1);
  tester.makeMove(5);
  tester.makeMove(2);
  tester.makeMove(6);
  expect(tester.winStatus).toBe(1);
});

test("should return 1 for win check on square 2,5,8 (vertical check)", () => {
  tester.newSession();
  tester.makeMove(2);
  tester.makeMove(3);
  tester.makeMove(5);
  tester.makeMove(7);
  tester.makeMove(8);
  expect(tester.winStatus).toBe(1);
});

test("should return 1 for win check on square 3,5,7 (diagonal check)", () => {
  tester.newSession();
  tester.makeMove(3);
  tester.makeMove(4);
  tester.makeMove(5);
  tester.makeMove(6);
  tester.makeMove(7);
  expect(tester.winStatus).toBe(1);
});

test("should return 1 after x won", () => {
  tester.newSession();
  tester.makeMove(3);
  tester.makeMove(4);
  tester.makeMove(5);
  tester.makeMove(6);
  tester.makeMove(7);
  expect(tester.xWins).toBe(1);
});

test("should return 2 for draw", () => {
  tester.newSession();
  tester.makeMove(1);
  tester.makeMove(5);
  tester.makeMove(2);
  tester.makeMove(3);
  tester.makeMove(7);
  tester.makeMove(4);
  tester.makeMove(6);
  tester.makeMove(9);
  tester.makeMove(8);
  expect(tester.winStatus).toBe(2);
});

test("should return 0 for xWins after new session", () => {
  tester.newSession();
  expect(tester.xWins).toBe(0);
});

test("O should win", () => {
  tester.newSession();
  tester.makeMove(4);
  tester.makeMove(1);
  tester.makeMove(5);
  tester.makeMove(2);
  tester.makeMove(9);
  tester.makeMove(3);
  expect(tester.oWins).toBe(1);
});