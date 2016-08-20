var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var getQuery = [
        'SELECT U.NAME, M.ID, M.BODY, R.NAME, M.TIMESENT FROM MESSAGES M INNER JOIN ',
        'USERS U ON (M.USER_ID = U.ID) INNER JOIN ',
        'ROOMS R ON (M.ROOMS_ID = R.ID);'
      ].join('');

      db.dbConnection.query('SELECT * FROM MESSAGES', function(err, body) {
        console.log('body: ', err, body);
        callback(body);
      });

    }, // a function which produces all the messages
    post: function (messageObj) {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

