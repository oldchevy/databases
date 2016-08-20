var db = require('../db');
var Promises = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      var getQuery = [
        'SELECT U.username, M.ID, M.body, R.roomname, M.TIMESENT FROM MESSAGES M INNER JOIN ',
        'USERS U ON (M.USER_ID = U.ID) INNER JOIN ',
        'ROOMS R ON (M.ROOMS_ID = R.ID);'
      ].join('');

      db.dbConnection.query(getQuery, function(err, body) {
        callback(JSON.stringify({results: body}));
      });

    }, // a function which produces all the messages
    post: function (messageObj, callback) {

      //{ username: '', text: 'aslkjdfjkhhfff', roomname: 'lobby' }
      var userID;
      var roomID;
      db.dbBConnection.then(function() {
        return Promises.promisify(function() {
          db.dbConnection.query('SELECT USERS.ID FROM USERS WHERE (USERS.username = \'' + messageObj.username + '\');', function(err, body) {
            console.log('Query 1');
            if (body.length === 1) {
              userID = body[0].ID;
            } else {
              db.dbConnection.query('INSERT INTO USERS (username) VALUES (\'' + messageObj.username + '\');', function(err, body) {
                db.dbConnection.query('SELECT USERS.ID FROM USERS WHERE (USERS.username = \'' + messageObj.username + '\');', function(err, body) {
                  userID = body[0].ID;
                });
              });
            }
          });
        });
      }).then(function() {
        return Promises.promisify(function() { 
          db.dbConnection.query('SELECT ROOMS.ID FROM ROOMS WHERE (ROOMS.roomname = \'' + messageObj.roomname + '\');', function(err, body) {
            if (body.length === 1) {
              roomID = body[0].ID;
            } else {
              db.dbConnection.query('INSERT INTO ROOMS (roomname) VALUES (\'' + messageObj.roomname + '\');', function(err, body) {
                db.dbConnection.query('SELECT ROOMS.ID FROM ROOMS WHERE (ROOMS.roomname = \'' + messageObj.roomname + '\');', function(err, body) {
                  roomID = body[0].ID;
                });
              });
            }
          });
        });
      }).then(function() {
        console.log(roomID, userID);
        return Promises.promisify(function () {
          db.dbConnection.query('INSERT INTO MESSAGES (body, ROOMS_ID, USER_ID) VALUES (\'' + messageObj.text + '\', ' + roomID + ', ' + userID + ');', function(err, body) {
            callback(err, body);
          });
        });
      });


      //Check if room and username already exist
      //Return ID's for these two if they do exist

      //If either one doesn't exist, add them to ROOMS and USERS and return the new IDS

      //Add message with the grabbed IDs

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};



