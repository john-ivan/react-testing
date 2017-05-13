const Browser = require('zombie');

// Include one of the following assertion libraries if you need to make assertions
// that Zombie does not provide out of the box.
// const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

const PORT = process.env.PORT || 3000;

// Start the server
require('../../');

// Regex which matches strings that are a single capital letter A-Z or Qu
describe('Front-end Integration/Features', () => {
  const browser = new Browser();
  browser.silent = true;

  before(done => {
    browser.visit(`http://localhost:${PORT}/`, done);
  });

  describe('Initial display', () => {
    it('loads successfully', () => {
      browser.assert.success();
    });

    it('displays a board', () => {
      browser.assert.element('#board');
    });

    // TODO: Finish tests

    it('displays 3 rows', () => {
      // console.log(browser.element('.row'))

      browser.assert.elements('.row',3);
    });

    it('displays 9 squares', () => {
      browser.assert.elements('.square',9)
    });
  });

  describe('Game logic', () => {
    it('clicking on square places an X in square', () => {
      let squares = browser.query('.square');
      // browser.fire('click', squares, function(){
      //   console.log('in fire')
      // })
      console.log(squares); 
    });

    xit('if X gets 3 in a row, victory message is displayed', () => {
    });

    xit('if O gets 3 in a row, victory message is displayed', () => {
    });
  });

  describe('Lists games from database', () => {
    xit('all games from database are listed in #gameList div', () => {
      // TODO: You'll need to require in and query the test DB in order to ensure
      // that the right items show up.
    });
  });

  describe('Buttons', () => {
    xit('clicking the #reset button clears the game board and sets turn back to X', () => {
    });

    xit('clicking the #clear button removes all listed games', () => {
      // TODO: You'll need to fix the button in src/components/App.js first!
    });
  });
});
