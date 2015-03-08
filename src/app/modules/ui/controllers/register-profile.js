'use strict';

/**
 * @ngInject
 */
function RegisterProfile(ApiUser, Logger) {
  Logger.debug('RegisterProfile');
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.profile = {
    country: 'france',
    gender: 'male',
    wearsize: 'm'
  };
  vm.options = {
    country: [{
      label: 'France',
      value: 'france'
    }],
    gender: [{
      label: 'Homme',
      value: 'male'
    }],
    wearsize: [{
      label: 'M',
      value: 'm'
    }]
  };

  // ViewModel methods
  vm.next = next;

  // Implementation

  function next() {
    Logger.debug('RegisterProfile::next');

    ApiUser
      .sign(vm.profile)
      .then(function onSignSuccess(user) {
        Logger.log('RegisterProfile::next::onSignSuccess', user);
      }, function onSignError(error) {
        Logger.log('RegisterProfile::next::onSignError', error);
      })
    ;
  }
}

module.exports = RegisterProfile;
