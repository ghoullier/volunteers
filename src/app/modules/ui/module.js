'use strict';

module.exports = angular
  .module('volunteers.ui', [
    'ui.router',
    'volunteers.common',
    'volunteers.data',
    'volunteers.templates'
  ])
  .config(require('./config/route'))
  .controller('Index', require('./controllers/index'))
  .controller('List', require('./controllers/list'))
;
