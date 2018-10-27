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

tester = new ticTacToe();
test("should return X", () => {
  tester.makeMove(1);
  expect(tester.playerTurn).toBe("X");
});

tester = new ticTacToe();
test("should return true for legal move", () => {
  expect(tester.validateInput(4)).toBe(true);
});

tester = new ticTacToe();
test("should return false for illegal move", () => {
  expect(tester.validateInput(5)).toBe(false);
});

tester = new ticTacToe();
test("should return 0 for win check", () => {
  expect(tester.winStatus).toBe(0);
});

tester = new ticTacToe();
test("should return 1 for win check on square 1-3 for X", () => {
  tester.resetBoard();
  tester.makeMove(1);
  tester.makeMove(9);
  tester.makeMove(2);
  tester.makeMove(8);
  tester.makeMove(3);
  expect(tester.winStatus).toBe(1);
});

tester = new ticTacToe();
test("should return a new board", () => {  
  tester.resetBoard();
  expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

tester = new ticTacToe();
test("should return 1 for win check on square 4-6", () => {
  tester.makeMove(4);
  tester.makeMove(1);
  tester.makeMove(5);
  tester.makeMove(2);
  tester.makeMove(6);
  expect(tester.winStatus).toBe(1);
});

tester = new ticTacToe();
test("should return 1 for win check on square 2,5,8 (vertical check)", () => {
  tester.resetBoard();
  tester.makeMove(2);
  tester.makeMove(3);
  tester.makeMove(5);
  tester.makeMove(7);
  tester.makeMove(8);
  expect(tester.winStatus).toBe(1);
});

tester = new ticTacToe();
test("should return 1 for win check on square 3,5,7 (diagonal check)", () => {
  tester.resetBoard();
  tester.makeMove(3);
  tester.makeMove(4);
  tester.makeMove(5);
  tester.makeMove(6);
  tester.makeMove(7);
  expect(tester.winStatus).toBe(1);
});

tester = new ticTacToe();
test("should return 1 after x won", () => {
  tester.resetBoard();
  tester.makeMove(3);
  tester.makeMove(4);
  tester.makeMove(5);
  tester.makeMove(6);
  tester.makeMove(7);
  tester.updateScore();
  expect(tester.xWins).toBe(1);
});

tester = new ticTacToe();
test("should return 2 for draw", () => {
  tester.resetBoard();
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

tester = new ticTacToe();
test("should return 0 for xWins after new session", () => {
  tester.newSession();
  expect(tester.xWins).toBe(0);
});