'use strict';

module.exports = angular
  .module('volunteers.ui', [
    'ng',
    'ngAnimate',

    'mgcrea.ngStrap',

    'ui.router',

    'volunteers.common',
    'volunteers.data',
    'volunteers.templates'
  ])

  .config(require('./config/compiler'))
  .config(require('./config/logger'))
  .config(require('./config/router'))

  .controller('Login', require('./controllers/login'))
  .controller('Register', require('./controllers/register'))
  .controller('RegisterProfile', require('./controllers/register-profile'))
  .controller('RegisterSkills', require('./controllers/register-skills'))
;
