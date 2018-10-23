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
  tester.checkWinStatus();
  expect(tester.winStatus).toBe(false);
});

test("should return true for win check on square 1-3", () => {
  tester.makeMove(1);
  tester.makeMove(2);
  tester.makeMove(3);
  tester.checkWinStatus();
  expect(tester.winStatus).toBe(true);
});

test("should return a new board", () => {  
  tester.resetBoard();
  expect(tester.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("should return true for win check on square 4-6", () => {
  tester.resetBoard();
  tester.makeMove(4);
  tester.makeMove(5);
  tester.makeMove(6);
  tester.checkWinStatus();
  expect(tester.winStatus).toBe(true);
});

test("should return true for win check on square 2,5,8 (vertical check)", () => {
  tester.resetBoard();
  tester.makeMove(2);
  tester.makeMove(5);
  tester.makeMove(8);
  tester.checkWinStatus();
  expect(tester.winStatus).toBe(true);
});

test("should return true for win check on square 3,5,7 (diagonal check)", () => {
  tester.resetBoard();
  tester.makeMove(3);
  tester.makeMove(5);
  tester.makeMove(7);
  tester.checkWinStatus();
  expect(tester.winStatus).toBe(true);
});

test("should return 1 after x won", () => {
  tester.updateScore();
  expect(tester.xWins).toBe(1);
});

test("should return true from draw", () => {
  tester.resetBoard();
  tester.makeMove(1);
  tester.makeMove(3);
  tester.makeMove(4);
  tester.makeMove(6);
  tester.makeMove(8);
  tester.changePlayerTurn();
  tester.makeMove(2);
  tester.makeMove(5);
  tester.makeMove(7);
  tester.makeMove(9);
  tester.checkWinStatus()
  expect(tester.draws).toBe(1);
});