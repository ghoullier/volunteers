'use strict';

/**
 * @ngInject
 */
function RegisterSkills(Logger) {
  Logger.debug('RegisterSkills');
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.skills = {};

  // ViewModel methods
  vm.next = next;

  // Implementation

  function next() {
    Logger.debug('RegisterSkills::next');
  }
}

module.exports = RegisterSkills;
