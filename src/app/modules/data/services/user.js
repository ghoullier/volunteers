'use strict';

/**
 * @ngInject
 */
function ApiUser($q, Api, Parse, Logger) {
  var User = Parse.User;
  var onResponse = Api.getResponseHandler('ApiUser');

  return {
    login: login,
    sign: sign
  };

  function login(model) {
    Logger.log('ApiUser::login');

    return $q(function defered(resolve, reject) {
      User.logIn(model.username, model.password, onResponse('login', resolve, reject));
    });
  }

  function sign(model) {
    Logger.log('ApiUser::sign');

    return $q(function defered(resolve, reject) {
      var user = new User();

      angular.forEach(model, function (value, key) {
        user.set(key, value);
      });

      user.signUp(null, onResponse('sign', resolve, reject));
    });
  }
}

module.exports = ApiUser;
