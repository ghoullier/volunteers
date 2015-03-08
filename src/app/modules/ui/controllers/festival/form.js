'use strict';

/**
 * @ngInject()
 */
function FestivalForm($stateParams, EntityForm, ApiFestival, Logger) {
  Logger.log('FestivalForm', $stateParams);
  // ViewModel
  var vm = this;

  // Extend ViewModel
  EntityForm.extend(vm, ApiFestival);
}

module.exports = FestivalForm;
