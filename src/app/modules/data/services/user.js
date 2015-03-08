'use strict';

/**
 * @ngInject
 */
function ApiUser($q, Parse, Logger) {
  var User = Parse.User;
  return {
    login: login,
    sign: sign
  };

  function login(model) {
    Logger.log('ApiUser::login');

    return $q(function defered(resolve, reject) {
      User.logIn(model.username, model.password, onApiResponse('login', resolve, reject));
    });
  }

  function sign(model) {
    Logger.log('ApiUser::sign');

    return $q(function defered(resolve, reject) {
      var user = new User();

      angular.forEach(model, function (value, key) {
        user.set(key, value);
      });

      user.signUp(null, onApiResponse('sign', resolve, reject));
    });
  }

  function onApiResponse(method, resolve, reject) {
    return {
      success: function(user) {
        Logger.log(['ApiUser', method, 'success'].join('::'), user);

        resolve(user);
      },
      error: function(user, error) {
        Logger.log(['ApiUser', method, 'error'].join('::'), user, error);

        reject(error);
      }
    };
  }
}

module.exports = ApiUser;
