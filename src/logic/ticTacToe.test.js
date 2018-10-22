// ticTacToe.test.js
const initBoard = require('./ticTacToe');

test("should return an empty array", () => {
    expect(initBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
});