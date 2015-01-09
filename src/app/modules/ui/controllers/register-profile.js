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

  // ViewModel methods
  vm.next = next;

  // Implementation

  function next() {
    Logger.debug('RegisterProfile::next');
  }
}

module.exports = RegisterProfile;
