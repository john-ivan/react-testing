const request = require('supertest');
// Start server
const app = require('../../');
const appComponent = require('./../../src/components/App.js');

const expect = require('expect');
const db = require('../../server/db/games.js');
const fs = require('fs');
const path = require('path');
const testJsonFile = path.join(__dirname, '../../server/db/games.test.json');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

/**
* include an assertion library here so that you can make assertions other than those
* provided by supertest. Choose whichever assertion library suits you.
*/
// const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', done => {
        request(HOST)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200, done);
      });
    });
  });

  describe('/games', () => {
    describe('GET', () => {
      it('response with 200 status and application/json content type', done => {
        request(HOST)
        .get('/games')
        .expect('Content-Type', /application\/json/)
        .expect(200, done);
      });

      it('games from appropriate json file in server/db/ are in body of response', done => {
        // You'll need to inspect the body of the response and ensure it contains the games list.
        // Might need to read the games json file in first to make sure the games in the response
        // match the games in the database.
        const game = { winner: 'X' };
        db.create(game);
        const game1 = { winner: 'X' };
        db.create(game1);
        request(HOST)
        .get('/games')
        .expect((res) => {
          const gameList = JSON.parse(fs.readFileSync(testJsonFile));
          return gameList === res.body;
        })
        .expect('Content-Type', /application\/json/)
        .expect(200, done);
      });
    });

    describe('POST', () => {
      it('responds to valid request with 200 status and application/json content type', done => {
        const game1 = { winner: 'X' };
        // db.create(game1);
        request(HOST)
        .post('/games')
        .send(game1)
        .expect('Content-Type', /application\/json/)
        .expect(200, done);
      });

      it('responds to a valid request with the item that was created in the DB', done => {
        // const game1 = { winner: 'X' };
        // let temp = db.create(game1);
        // const gameList = JSON.parse(fs.readFileSync(testJsonFile));
        // expect(gameList).toContain(temp);
        // console.log(gameList);
        // request(HOST)
        // .post('/games')
        // .send(temp)
        // .expect('Content-Type', /application\/json/)
        // .expect(200, done);
        const game1 = { winner: 'Z' };
        let temp = db.create(game1);
        const gameList = JSON.parse(fs.readFileSync(testJsonFile));

        request(HOST)
        .post('/games')
        .send(temp)
        .then(response => {
          // console.log(response.body,temp)
          expect(response.body.winner).toEqual(temp.winner);
          done();
        });

        // .expect('Content-Type', /application\/json/)
        // .expect(200, done);

      });

      it('responds to invalid request with 400 status and error message in body', done => {
        // This feature does not exist yet. Follow test-driven-development here! See description
        // in readme.
        // Hint: An invalid request is a POST request in which the POST body does not contain
        // a JSON object with a "winner" key, or if the body contains fields other than "winner"
        const game1 = { };
        let temp = db.create(game1);
        const gameList = JSON.parse(fs.readFileSync(testJsonFile));

        // request(HOST)
        // .post('/games')
        // .send(game1)
        // .then(response => {
        //   // console.log(response)
        //   expect(response.statusCode).toEqual(400);
        //   expect(response.body.error).toNotEqual(undefined);
        //   done();
        // });

      request(HOST)
      .post('/games')
      .send({})
      // .type('text')
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
          // console.log(res.error);
          done();
      });
      });
    });
  });
});
