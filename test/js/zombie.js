// const Browser = require('zombie');

// // Include one of the following assertion libraries if you need to make assertions
// // that Zombie does not provide out of the box.
// const expect = require('expect');
// // const expect = require('chai').expect;
// // const assert = require('chai').assert;

// const PORT = process.env.PORT || 3000;

// const fs = require('fs');
// let gamesList;
// let writeLocation;
// if (process.env.NODE_ENV === 'test') {
//   writeLocation = `${__dirname}/../../server/db/games.test.json`;
//   gamesList = require(writeLocation);
// } else {
//   writeLocation = `${__dirname}/../../server/db/games.dev.json`;
//   gamesList = require(writeLocation);
// }

// // Start the server
// require('../../');

// // Regex which matches strings that are a single capital letter A-Z or Qu
// describe('Front-end Integration/Features', () => {
//   const browser = new Browser();
//   browser.silent = true;

//   before(done => {
//     browser.visit(`http://localhost:${PORT}/`, done);
//   });

//   describe('Initial display', () => {
//     it('loads successfully', () => {
//       browser.assert.success();
//     });

//     it('displays a board', () => {
//       browser.assert.element('#board');
//     });

//     // TODO: Finish tests

//     it('displays 3 rows', () => {
//       // console.log(browser.element('.row'))

//       browser.assert.elements('.row',3);
//     });

//     it('displays 9 squares', () => {
//       browser.assert.elements('.square',9)
//     });
//   });

//   describe('Game logic', () => {
//     it('clicking on square places an X in square', () => {
//       let squares = browser.queryAll('.square');
//       // console.log(squares[0])
//       browser.fire(squares[0], 'click')
//       browser.assert.text(squares[0], 'X');

//     });

//     // function checkWin(rows) {
//     //   const combos = [
//     //     [0, 1, 2],
//     //     [3, 4, 5],
//     //     [6, 7, 8],
//     //     [0, 4, 8],
//     //     [2, 4, 6],
//     //     [0, 3, 6],
//     //     [1, 4, 7],
//     //     [2, 5, 8],
//     //   ];

//     it('if X gets 3 in a row, victory message is displayed', () => {
//       let squares = browser.queryAll('.square');
//       browser.fire(squares[0], 'click');
//       browser.fire(squares[5], 'click');
//       browser.fire(squares[1], 'click');
//       browser.fire(squares[7], 'click');
//       browser.fire(squares[2], 'click');

//       if((browser.text(squares[0]) === browser.text(squares[1])) &&( browser.text(squares[1]) === browser.text(squares[2]))){
//         browser.assert.text(squares[0], 'X')
//       }

//       let infoDiv = browser.query('button').parentNode.firstChild;
//       browser.assert.text(infoDiv, /Player X wins/)
//     });

//     it('if O gets 3 in a row, victory message is displayed', () => {
//       let reset = browser.query('#reset')
//       browser.fire(reset, 'click');
//       let squares = browser.queryAll('.square');
//       browser.fire(squares[5], 'click');
//       browser.fire(squares[0], 'click');
//       browser.fire(squares[7], 'click');
//       browser.fire(squares[1], 'click');
//       browser.fire(squares[3], 'click');
//       browser.fire(squares[2], 'click');

//       if((browser.text(squares[0]) === browser.text(squares[1])) &&( browser.text(squares[1]) === browser.text(squares[2]))){
//         browser.assert.text(squares[0], 'O')
//       }

//       let infoDiv = browser.query('button').parentNode.firstChild;
//       browser.assert.text(infoDiv, /Player O wins/)


//     });
//   });

//   describe('Lists games from database', () => {
//     it('all games from database are listed in #gameList div', () => {
//       // TODO: You'll need to require in and query the test DB in order to ensure
//       // that the right items show up.
//       let gameList = browser.query('#gameList');
//       // console.log(gameList.innerHTML);

//       let dbGamesList = JSON.parse(fs.readFileSync(writeLocation));
//       browser.assert.text(gameList, dbGamesList);

//     });
//   });

//   describe('Buttons', () => {
//     xit('clicking the #reset button clears the game board and sets turn back to X', () => {
//     });

//     xit('clicking the #clear button removes all listed games', () => {
//       // TODO: You'll need to fix the button in src/components/App.js first!
//     });
//   });
// });
