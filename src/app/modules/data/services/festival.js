'use strict';

/**
 * @ngInject
 */
function ApiFestival($q, Api, Parse, Logger) {
  var entityName = 'Festival';
  var Entity = Parse.Object.extend(entityName);
  var onResponse = Api.getResponseHandler(entityName);
  var query = new Parse.Query(Entity);

  return {
    create: create,
    getList: getList
  };

  function create(model) {
    Logger.log('ApiFestival::create', model);

    return $q(function defered(resolve, reject) {
      var entity = new Entity();

      angular.forEach(model, function (value, key) {
        entity.set(key, value);
      });

      entity.save(null, onResponse('create', resolve, reject));
    });
  }

  function getList() {
    Logger.log('ApiFestival::getList');

    return $q(function defered(resolve, reject) {
      query.find(onResponse('getList', resolve, reject));
    });
  }
}

module.exports = ApiFestival;
