var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(body) {
        //console.log(body);
        res.write(body);
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function() {
        res.status(201).end();
      });
    }, // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

