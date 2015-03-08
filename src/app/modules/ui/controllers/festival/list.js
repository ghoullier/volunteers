'use strict';

/**
 * @ngInject()
 */
function FestivalList(ApiFestival, Logger) {
  Logger.log('FestivalList');

  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.list = {};
  vm.errors = {};

  // Implementation

  ApiFestival
    .getList()
    .then(function onGetList(list) {
      Logger.log('FestivalList::onGetList', list);

      vm.list = list;
    }, Logger.error)
  ;
}

module.exports = FestivalList;
