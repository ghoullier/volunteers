'use strict';

/**
 * @ngInject
 */
function Register(Logger) {
  Logger.debug('Register');
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.register = {};

  // ViewModel methods
  vm.next = next;

  // Implementation

  function next() {
    Logger.debug('Register::next');
  }
}

module.exports = Register;
