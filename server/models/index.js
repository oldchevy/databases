var db = require('../db');
var Promises = require('bluebird');

module.exports = {
  messages: {
    get: function (callback) {
      var getQuery = 'SELECT U.username, M.ID, M.body, R.roomname, M.TIMESENT \
                      FROM MESSAGES M INNER JOIN \
                      USERS U ON (M.USER_ID = U.ID) INNER JOIN \
                      ROOMS R ON (M.ROOMS_ID = R.ID);';

      //console.log('In messages GET model.');
      db.dbConnection.query(getQuery, function(err, body) {
        //console.log('In messages query success:', body);
        callback(body);

      });

    }, // a function which produces all the messages
    post: function (params, callback) {

      //console.log('In messages POST model:', params);

      var postQuery = 'INSERT INTO MESSAGES \
                       (body, ROOMS_ID, USER_ID) \
                       VALUES (?, \
                       (SELECT ID FROM ROOMS WHERE roomname=? LIMIT 1),\
                       (SELECT ID FROM USERS WHERE username=? LIMIT 1));';

      db.dbConnection.query(postQuery, params, function(err, body) {
        //console.log('In messages POST query \'success\':', body);
        callback(body);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (params, callback) {
      //console.log('In users POST model:', params);
      var postQuery = 'INSERT INTO USERS \
                       (username) VALUES (?)';
      db.dbConnection.query(postQuery, params, function(err, body) {
        //console.log('In users POST query \'success\':', body);
        callback(body);
      });

    }
  }
};



