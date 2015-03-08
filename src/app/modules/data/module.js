'use strict';

var Parse = require('parse');

var APPLICATION = require('./parse.keys');

Parse.initialize(APPLICATION.ID, APPLICATION.KEY);

module.exports = angular
  .module('volunteers.data', [
    'ng',

    'volunteers.common'
  ])

  .constant('Parse', Parse)

  .factory('Faker', require('./services/faker'))
;
