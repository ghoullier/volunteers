'use strict';

var util = require('gulp-util');

function onGenericError(error) {
  util.beep();
  log(error);
}

function onBrowserifyError(error) {
  util.beep();
  log(error);
  this.end();
}

function log(error) {
  var message = {
    file: error.file,
    line: error.line,
    message: error.message
  };
  util.log(util.colors.red(JSON.stringify(message)));
}

module.exports = {
  onBrowserifyError: onBrowserifyError,
  onGenericError: onGenericError
};
