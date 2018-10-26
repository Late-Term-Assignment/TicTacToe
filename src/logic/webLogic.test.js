// webLogic.test.js
const webLogic = require('./webLogic');
const tester = new webLogic();
test("should return and instance of tictactoe", () => {  
    expect(tester).toEqual({"game": {"board": [1, 2, 3, 4, 5, 6, 7, 8, 9], "draws": 0, "nrOfmoves": 9, "oWins": 0, "playerTurn": "X", "winStatus": 0, "xWins": 0}});
  });
  