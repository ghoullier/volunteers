'use strict';

/**
 * @ngInject
 */
function Api($q, Parse, Logger) {
  return {
    getResponseInterceptor: getResponseInterceptor,
    getService: getService
  };

  function getService(entityName) {
    var apiName = ['Api', entityName].join('');
    var Entity = Parse.Object.extend(entityName);
    var interceptor = getResponseInterceptor(entityName);

    return {
      create: create,
      get: get,
      getList: getList,
      getApiName: getApiName,
      getEntityName: getEntityName
    };

    function create(model) {
      log('create', model);

      var entity = new Entity();

      angular.forEach(model, function (value, key) {
        entity.set(key, value);
      });

      return $q(function defered(resolve, reject) {
        entity.save(null, interceptor('create', resolve, reject));
      });
    }

    function get(id) {
      log('get', id);

      return find('get', {
        objectId: id
      });
    }

    function getList() {
      log('getList');

      return find('getList', {});
    }

    function getApiName() {
      return apiName;
    }

    function getEntityName() {
      return entityName;
    }

    function find(method, parameters) {
      log('find', method, parameters);

      var query = new Parse.Query(Entity);

      angular.forEach(parameters, function (value, key) {
        query.equalTo(key, value);
      });

      return $q(function defered(resolve, reject) {
        query.find(interceptor(method, resolve, reject));
      });
    }

    function log(method) {
      var message = [apiName, method].join('::');
      var args = [message].concat([].splice.call(arguments, 1));
      Logger.log.apply(Logger, args);
    }
  }

  function getResponseInterceptor(invoker) {
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
