'use strict';

module.exports = angular
  .module('volunteers.common', [
    'ng'
  ])
  .factory('Logger', require('./services/logger'))
;
