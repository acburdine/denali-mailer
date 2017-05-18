'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = environmentConfig;

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

var _test = require('../app/mailer-transports/test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function environmentConfig(environment, appConfig) {
  if (environment === 'test') {
    appConfig.mailer = (0, _defaults2.default)(appConfig.mailer, {
      transport: function () {
        return new _test2.default();
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJlbnZpcm9ubWVudENvbmZpZyIsImVudmlyb25tZW50IiwiYXBwQ29uZmlnIiwibWFpbGVyIiwidHJhbnNwb3J0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLGlCOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxpQkFBVCxDQUEyQkMsV0FBM0IsRUFBd0NDLFNBQXhDLEVBQW1EO0FBQ2hFLE1BQUlELGdCQUFnQixNQUFwQixFQUE0QjtBQUMxQkMsY0FBVUMsTUFBVixHQUFtQix3QkFBU0QsVUFBVUMsTUFBbkIsRUFBMkI7QUFDNUNDLGVBRDRDLGNBQ2hDO0FBQ1YsZUFBTyxvQkFBUDtBQUNEO0FBSDJDLEtBQTNCLENBQW5CO0FBS0Q7QUFDRiIsImZpbGUiOiJjb25maWcvZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjYnVyZGluZS9Qcm9qZWN0cy9kZW5hbGkvZGVuYWxpLW1haWxlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWZhdWx0cyBmcm9tICdsb2Rhc2gvZGVmYXVsdHMnO1xuaW1wb3J0IFRlc3RUcmFuc3BvcnQgZnJvbSAnLi4vYXBwL21haWxlci10cmFuc3BvcnRzL3Rlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbnZpcm9ubWVudENvbmZpZyhlbnZpcm9ubWVudCwgYXBwQ29uZmlnKSB7XG4gIGlmIChlbnZpcm9ubWVudCA9PT0gJ3Rlc3QnKSB7XG4gICAgYXBwQ29uZmlnLm1haWxlciA9IGRlZmF1bHRzKGFwcENvbmZpZy5tYWlsZXIsIHtcbiAgICAgIHRyYW5zcG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXN0VHJhbnNwb3J0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==