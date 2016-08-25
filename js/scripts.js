// Backend code
function Game() {
  this.board = [[8,1,6],[3,5,7],[4,9,2]];
  this.players = [];
  this.playerUp = 1;
}
function Player(playerNum) {
  this.number = playerNum;
  this.scoreCard = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
}
function markSquare(x, y, playerNum) {
  myGame.players[playerNum].scoreCard[x][y] = myGame.board[x][y];
  myGame.board[x][y] = 0;
  checkWinner(playerNum);
  if (playerNum === 1) {
    myGame.playerUp = 2;
  } else {
    myGame.playerUp = 1;
  }
}
function checkWinner(playerNum) {
  var subTotals = [];
  var diag1Total = 0;
  for (var i = 0; i < 3; i++) {
    var rowTotal = 0;
    var colTotal = 0;
    for (var j = 0; j < 3; j++) {
      rowTotal += myGame.players[playerNum].scoreCard[i][j];
      colTotal += myGame.players[playerNum].scoreCard[j][i];
    }
    diag1Total += myGame.players[playerNum].scoreCard[i][i];
    subTotals.push(rowTotal);
    subTotals.push(colTotal);
  }
  subTotals.push(diag1Total);
  subTotals.push(myGame.players[playerNum].scoreCard[2][0] + myGame.players[playerNum].scoreCard[1][1] + myGame.players[playerNum].scoreCard[0][2]);
  if (subTotals.includes(15)) {
    myGame.winner = playerNum;
    alert("Player " + playerNum + " wins.");
    console.log(subTotals);
  }
}

myGame = new Game();
myGame.players[1] = new Player(1);
myGame.players[2] = new Player(2);
// Frontend code
