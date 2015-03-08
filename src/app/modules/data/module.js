'use strict';

var Parse = window.Parse;

var APPLICATION = require('./parse.keys');

Parse.initialize(APPLICATION.ID, APPLICATION.KEY);

module.exports = angular
  .module('volunteers.data', [
    'ng',

    'volunteers.common'
  ])

  .constant('Parse', Parse)

  .factory('ApiUser', require('./services/user'))

  .factory('Faker', require('./services/faker'))
;
