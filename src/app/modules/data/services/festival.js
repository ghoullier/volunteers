'use strict';

/**
 * @ngInject
 */
function ApiFestival(Api) {
  return Api.getService('Festival');
}

module.exports = ApiFestival;
