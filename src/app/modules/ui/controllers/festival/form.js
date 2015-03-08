'use strict';

/**
 * @ngInject()
 */
function FestivalForm($alert, $stateParams, ApiFestival, Logger) {
  Logger.log('FestivalForm', $stateParams);
  // ViewModel
  var vm = this;

  // ViewModel properties
  vm.model = {};
  vm.errors = {};

  // ViewModel methods
  vm.submit = submit;

  // Implementation

  function submit() {
    Logger.debug('FestivalForm::submit');

    ApiFestival
      .create(vm.model)
      .then(onSubmitSuccess, onSubmitError)
    ;
  }

  function onSubmitSuccess(entity) {
    Logger.log('FestivalForm::onSubmitSuccess', entity);

    $alert({
      title: 'Festival',
      content: 'Success',
      type: 'success',
      duration: 3
    });
  }

  function onSubmitError(error) {
    Logger.log('FestivalForm::onSubmitError', error);

    $alert({
      title: 'Festival',
      content: error.message,
      type: 'danger',
      duration: 3
    });
  }
}

module.exports = FestivalForm;
