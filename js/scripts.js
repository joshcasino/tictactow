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
}

// Frontend code
