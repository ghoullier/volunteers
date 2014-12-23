'use strict';

module.exports = angular
  .module('volunteers.data', [
    'volunteers.common'
  ])
  .factory('Faker', require('./services/faker'))
;
