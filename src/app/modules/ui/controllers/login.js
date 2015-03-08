'use strict';

/**
* @ngInject
 */
function Login(Logger) {
  Logger.debug('Login');
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.user = {};
  vm.errors = {};

  // ViewModel methods
  vm.login = login;

  // Implementation

  function login() {
    Logger.debug('Login::login');
  }
}

module.exports = Login;
