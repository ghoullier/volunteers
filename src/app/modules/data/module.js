'use strict';

module.exports = angular
  .module('volunteers.data', [
    'ng',

    'volunteers.common'
  ])
  .factory('Faker', require('./services/faker'))
;
