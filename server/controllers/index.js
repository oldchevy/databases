var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('Recieved GET request');
      models.messages.get(function(body) {
        res.json(body);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //{ username: '', text: 'aslkjdfjkhhfff', roomname: 'lobby' }
      //console.log('In messages POST controller:', req.body);
      var params = [req.body.message, req.body.roomname, req.body.username];
      models.messages.post(params, function(body) {
        res.json(body);
      });
    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log('In users POST controller:', req.body);
      var params = [req.body.username];
      models.users.post(params, function(body) {
        res.json(body);
      });
    }
  }
};
