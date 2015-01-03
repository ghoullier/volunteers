'use strict';

module.exports = angular
  .module('volunteers.ui', [
    'ng',

    'ui.bootstrap',
    'ui.router',

    'volunteers.common',
    'volunteers.data',
    'volunteers.templates'
  ])
  .config(require('./config/route'))
  .controller('Index', require('./controllers/index'))
  .controller('List', require('./controllers/list'))
;
