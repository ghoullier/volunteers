'use strict';

/**
 * @ngInject()
 */
function EntityForm($alert, Logger) {
  Logger.log('EntityForm');

  return {
    extend: extend
  };

  function extend(ViewModel, ApiEntity) {
    var formName = [ApiEntity.getEntityName(), 'Form'].join('');

    // ViewModel properties
    ViewModel.model = {};
    ViewModel.errors = {};

    // ViewModel methods
    ViewModel.submit = submit;

    // Implementation

    function submit() {
      log('submit');

      return ApiEntity
        .create(ViewModel.model)
        .then(onSubmitSuccess, onSubmitError)
      ;
    }

    function onSubmitSuccess(entity) {
      log('onSubmitSuccess', entity);

      alert('Success', 'success');
    }

    function onSubmitError(error) {
      log('onSubmitError', error);

      alert(error.message, 'danger');
    }

    function alert(content, type) {
      log('alert', content, type);

      $alert({
        title: ApiEntity.getEntityName(),
        content: content,
        type: type,
        duration: 3
      });
    }

    function log(method) {
      var message = [formName, method].join('::');
      var args = [message].concat([].splice.call(arguments, 1));
      Logger.log.apply(Logger, args);
    }
  }
}

module.exports = EntityForm;
