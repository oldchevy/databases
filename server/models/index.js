var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.connect();

      var getQuery = [
        'SELECT U.NAME, M.ID, M.BODY, R.NAME, M.TIMESENT FROM MESSAGES M INNER JOIN',
        'USERS U ON (M.USER_ID = U.ID) INNER JOIN',
        'ROOMS R ON (M.ROOMS_ID = R.ID);'
      ].join('');
      db.dbConnection.query(getQuery, function(err, body) {
        callback(body);
      });
    }, // a function which produces all the messages
    post: function (messageObj) {
      db.connect();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

