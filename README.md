# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

A game of tic tac toe made with JavaScript!

## Specifications

* At the start of each game a new "game board" is created with points associated with each square.
 * Input: Game start
 * Output: A game board with the following values [8 1 6, 3 5 7, 4 9 2]

* When a player "marks" a square, the points associated with that square is then "moved" to that player's score card and removed from the game board.
 * Input: Player selects square 0,0 (value of 8 points)
 * Output: Game board [0 1 6, 3 5 7, 4 9 2], Player score card [8 0 0, 0 0 0, 0 0 0]

* The numbers on the grid will be added by horizontal, vertical, and diagonal lines
  * Input: Player score card [8 0 0, 0 5 0, 0 9 2]
  * Output: 8, 5, 11, 8, 14, 2, 15, 5

* If any of the grid sums equal 15, then the player with that score card is designated the winner
  * Input: Player 1's scorecard sums are 8, 5, 11, 8, 14, 2, 15, 5
  * Output: "Player 1 is the Winner!"

* At the start of the game, an empty 3x3 grid is presented
  * Input: Game start
  * Output: A blank 3x3 grid

* When Player 1 clicks on a square, that square is marked
  * Input: Player 1 clicks on grid 0,0
  * Output: Grid 0,0 turns Red

* When Player 2 then clicks on another square, that square is marked
  * Input: Player 2 clicks on grid 0,1
  * Output: Grid 0,1 turns Blue

* When Player 1 next clicks on a square "claimed" by Player 2, nothing happens
  * Input: Player 1 clicks on grid 0,1
  * Output: Grid 0,1 remains Blue

* Once a player wins, a message is displayed, and no more moves are allowed
  * Input: Player 1 wins
  * Output: Message "player 1 wins" is displayed and further clicking changes no tile colors

* The user can reset the game.
  * Input: User clicks on the "Reset Game" button
  * Output: Game grid is reset



## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
