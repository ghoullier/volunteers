'use strict';

module.exports = angular
  .module('volunteers.common', [
    'ng'
  ])

  .constant('AppConfig', require('../../config'))

  .factory('Logger', require('./services/logger'))
;
