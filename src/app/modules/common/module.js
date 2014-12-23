'use strict';

module.exports = angular
  .module('volunteers.common', [])
  .factory('Logger', require('./services/logger'))
;
