'use strict';

/**
 * @ngInject
 */
function Api(Logger) {
  return {
    getResponseHandler: getResponseHandler
  };

  function getResponseHandler(invoker) {
    return function handler(method, resolve, reject) {
      return {
        success: function onSuccess(response) {
          Logger.log([invoker, method, 'success'].join('::'), response);

          resolve(response);
        },
        error: function onError(response, error) {
          Logger.log([invoker, method, 'error'].join('::'), response, error);

          reject(error);
        }
      };
    };
  }
}

module.exports = Api;
