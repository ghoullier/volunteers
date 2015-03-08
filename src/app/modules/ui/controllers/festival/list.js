'use strict';

/**
 * @ngInject()
 */
function FestivalList(Logger, list) {
  Logger.log('FestivalList', list);

  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.list = list;
  vm.errors = {};
}

module.exports = FestivalList;
