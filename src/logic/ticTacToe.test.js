// src/logic/ticTacToe.test.js
const ticTacToe = require('./ticTacToe');
const tester = new ticTacToe();

test("should return an empty array", () => {
    expect(tester.initBoard()).toEqual([null, null, null, null, null, null, null, null, null]);
});
test("should return that X won the game", () => {
    expect(tester.game()).toBe("X wins");
});
test("should return field that X chose as input", () => {
    expect(tester.xInput(5)).toBe(5);
});
test("should return field that O chose as input", () => {
    expect(tester.oInput(1)).toBe(1);
});
