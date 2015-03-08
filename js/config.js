'use strict';

angular
  .module('volunteers.common')
  .constant('AppConfig', {
  "LOG_LEVEL": "warn",
  "NG_DEBUG_INFO_ENABLED": false,
  "TEMPLATED_VARIABLES": {
    "BASE_HREF": "/volunteers/",
    "APP_VERSION": "0.0.0"
  }
})
;
