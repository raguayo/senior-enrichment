'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');


let Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  }
});

module.exports = Campus;
