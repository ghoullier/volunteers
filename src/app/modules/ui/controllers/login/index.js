'use strict';

/**
* @ngInject
 */
function Login($alert, ApiUser, Logger) {
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
    ApiUser
      .login(vm.user)
      .then(onLoginSuccess, onLoginError)
    ;
  }

  function onLoginSuccess(user) {
    Logger.log('Login::login::onLoginSuccess', user);
    $alert({
      title: 'Login',
      content: 'Success',
      type: 'success',
      duration: 3
    });
  }

  function onLoginError(error) {
    Logger.log('Login::login::onLoginError', error);
    $alert({
      title: 'Login',
      content: error.message,
      type: 'danger',
      duration: 3
    });
  }
}

module.exports = Login;
