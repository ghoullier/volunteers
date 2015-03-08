'use strict';

/**
 * @ngInject()
 */
function EditionList(Logger, list) {
  Logger.log('EditionList', list);

  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.list = list;
  vm.errors = {};
}

module.exports = EditionList;
