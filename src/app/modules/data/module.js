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

  .factory('Api', require('./services/api'))
  .factory('ApiFestival', require('./services/festival'))
  .factory('ApiUser', require('./services/user'))
;
