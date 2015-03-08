'use strict';

/**
 * @ngInject
 */
function ApiFestival($q, Api, Parse, Logger) {
  var entityName = 'Festival';
  var Entity = Parse.Object.extend(entityName);
  var onResponse = Api.getResponseHandler(entityName);

  return {
    create: create,
    get: get,
    getList: getList
  };

  function create(model) {
    Logger.log('ApiFestival::create', model);

    var entity = new Entity();

    angular.forEach(model, function (value, key) {
      entity.set(key, value);
    });

    return $q(function defered(resolve, reject) {
      entity.save(null, onResponse('create', resolve, reject));
    });
  }

  function get(id) {
    Logger.log('ApiFestival::get');

    return find('get', {
      objectId: id
    });
  }

  function getList() {
    Logger.log('ApiFestival::getList');

    return find('getList', {});
  }

  function find(method, parameters) {
    var query = new Parse.Query(Entity);

    angular.forEach(parameters, function (value, key) {
      query.equalTo(key, value);
    });

    return $q(function defered(resolve, reject) {
      query.find(onResponse(method, resolve, reject));
    });
  }
}

module.exports = ApiFestival;
