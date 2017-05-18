'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentMailsFor = exports.Mailer = undefined;

var _mailer = require('../lib/mailer');

Object.defineProperty(exports, 'Mailer', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_mailer).default;
  }
});

var _sentMails = require('../lib/sent-mails');

Object.defineProperty(exports, 'sentMailsFor', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_sentMails).default;
  }
});

var _denali = require('denali');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DenaliMailerAddon extends _denali.Addon {}

exports.default = DenaliMailerAddon; // Expose import API
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRvbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiRGVuYWxpTWFpbGVyQWRkb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzsyQ0FLU0EsTzs7Ozs7Ozs7OzhDQUNBQSxPOzs7O0FBTlQ7Ozs7QUFFZSxNQUFNQyxpQkFBTix1QkFBc0M7O2tCQUFoQ0EsaUIsRUFFckIiLCJmaWxlIjoiYXBwL2FkZG9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2J1cmRpbmUvUHJvamVjdHMvZGVuYWxpL2RlbmFsaS1tYWlsZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZGRvbiB9IGZyb20gJ2RlbmFsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbmFsaU1haWxlckFkZG9uIGV4dGVuZHMgQWRkb24ge31cblxuLy8gRXhwb3NlIGltcG9ydCBBUElcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbGVyIH0gZnJvbSAnLi4vbGliL21haWxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbnRNYWlsc0ZvciB9IGZyb20gJy4uL2xpYi9zZW50LW1haWxzJztcbiJdfQ==