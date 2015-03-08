'use strict';

/**
 * @ngInject
 */
function ApiFestival(Api) {
  return Api.getService('Edition');
}

module.exports = ApiFestival;
