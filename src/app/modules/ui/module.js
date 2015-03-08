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

  .controller('Login', require('./controllers/login/index'))

  .controller('Register', require('./controllers/register/index'))
  .controller('RegisterProfile', require('./controllers/register/profile'))
  .controller('RegisterSkills', require('./controllers/register/skills'))

  .controller('Festival', require('./controllers/festival/index'))
  .controller('FestivalList', require('./controllers/festival/list'))
  .controller('FestivalForm', require('./controllers/festival/form'))
;
