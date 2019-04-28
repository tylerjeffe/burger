// Import the ORM to create functions that will interact with the database.
var orm = require("../db/config/orm");

var burger = {
  all: function(data) {
    orm.all("burgers", function(res) {
      data(res);
    });
  },
  // The variables cols and vals are arrays.
  add: function(cols, vals, data) {
    orm.add("burgers", cols, vals, function(res) {
      data(res);
    });
  },
  update: function(objColVals, condition, data) {
    orm.update("burgers", objColVals, condition, function(res) {
      data(res);
    });
  },
  delete: function(condition, data) {
    orm.delete("burgers", condition, function(res) {
      data(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;