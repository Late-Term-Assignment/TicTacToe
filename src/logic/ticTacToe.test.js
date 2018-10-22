// ticTacToe.test.js
const ticTacToe = require('./ticTacToe');
const tester = new ticTacToe();

test("should return an empty array", () => {
    expect(tester.initBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
});
