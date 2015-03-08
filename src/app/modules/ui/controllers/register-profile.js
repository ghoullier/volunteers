'use strict';

/**
 * @ngInject
 */
function RegisterProfile(Logger) {
  Logger.debug('RegisterProfile');
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.profile = {};
  vm.options = {
    country: [],
    gender: [],
    wearsize: []
  };

  // ViewModel methods
  vm.next = next;

  // Implementation

  function next() {
    Logger.debug('RegisterProfile::next');
  }
}

module.exports = RegisterProfile;
