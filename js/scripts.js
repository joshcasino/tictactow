// Backend code
function Game() {
  this.board = [[8,1,6],[3,5,7],[4,9,2]];
  this.players = [];
  this.playerUp = 1;
  this.winner = 0;
}
function Player(playerNum, playerName) {
  this.number = playerNum;
  this.scoreCard = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
  this.playerName = playerName;
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
    announceWinner(playerNum);
  }
}
function resetGame() {
  myGame = new Game();
  myGame.players[1] = new Player(1, "Charles Bukowski");
  myGame.players[2] = new Player(2, "William S. Burroughs");
}
resetGame();
// Frontend code
$(document).ready(function() {
  $(".ticSquare").click(function() {
    if ($(this).hasClass("squareMarked") || myGame.winner !== 0) {
      return;
    }
    var squareColorClass = "ticSquarePlayer" + myGame.playerUp;
    $(this).addClass("squareMarked");
    $(this).addClass(squareColorClass);
    var coordX = parseInt($(this).attr("id").substring(0,1));
    var coordY = parseInt($(this).attr("id").substring(1,2));
    markSquare(coordX, coordY, myGame.playerUp);
  });
  $("#resetButton").click(function() {
    $("#winnerFlag").text("");
    $(".ticSquare").removeClass("squareMarked ticSquarePlayer1 ticSquarePlayer2");
    resetGame();
  });
});
function announceWinner(playerNum) {
  $("#winnerFlag").text(myGame.players[playerNum].playerName + " is the winner!");
}
