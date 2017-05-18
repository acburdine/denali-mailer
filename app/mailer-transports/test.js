'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setImmediate2 = require('babel-runtime/core-js/set-immediate');

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestTransport {
  constructor() {
    this.name = 'Test';
    this.sentMails = [];
  }

  isIdle() {
    return true;
  }

  verify(callback) {
    (0, _setImmediate3.default)(function () {
      return callback(null, true);
    });
  }

  send(mail, callback) {
    var _this = this;

    let message = mail.message.createReadStream();
    let chunks = [];

    message.on('error', function (err) {
      (0, _setImmediate3.default)(function () {
        callback(err);
      });
    });

    message.on('data', function (chunk) {
      chunks.push(chunk);
    });

    message.on('end', function () {
      (0, _setImmediate3.default)(function () {
        let messageId = (mail.message.getHeader('message-id') || '').replace(/[<>\s]/g, '');
        let bufferedMessage = Buffer.concat(chunks);
        let info = {
          messageId: messageId,
          envelope: mail.data.envelope || mail.message.getEnvelope(),
          subject: bufferedMessage.toString().match(/Subject: (.+)/)[1],
          rawMessage: bufferedMessage,
          htmlContent: function () {
            return this._extractMessagePart('text/html');
          },
          textContent: function () {
            return this._extractMessagePart('text/plain');
          },
          _parseMessage: function () {
            if (!this.parts) {
              let messageString = bufferedMessage.toString();
              let boundary = messageString.match(/boundary="(.+)"/)[1];
              this.parts = messageString.split('\n--' + boundary).slice(1);
            }
          },
          _extractMessagePart: function (type) {
            this._parseMessage();
            let part = this.parts.find(function (p) {
              return p.includes('Content-Type: ' + type);
            });
            let headerSeparator = '\r\n\r\n';
            return part ? part.split(headerSeparator).slice(1).join(headerSeparator) : null;
          }
        };
        _this.sentMails.push(info);
        callback(null, info);
      });
    });
  }

}
exports.default = TestTransport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWlsZXItdHJhbnNwb3J0cy90ZXN0LmpzIl0sIm5hbWVzIjpbIlRlc3RUcmFuc3BvcnQiLCJuYW1lIiwic2VudE1haWxzIiwiaXNJZGxlIiwidmVyaWZ5IiwiY2FsbGJhY2siLCJzZW5kIiwibWFpbCIsIm1lc3NhZ2UiLCJjcmVhdGVSZWFkU3RyZWFtIiwiY2h1bmtzIiwib24iLCJlcnIiLCJjaHVuayIsInB1c2giLCJtZXNzYWdlSWQiLCJnZXRIZWFkZXIiLCJyZXBsYWNlIiwiYnVmZmVyZWRNZXNzYWdlIiwiQnVmZmVyIiwiY29uY2F0IiwiaW5mbyIsImVudmVsb3BlIiwiZGF0YSIsImdldEVudmVsb3BlIiwic3ViamVjdCIsInRvU3RyaW5nIiwibWF0Y2giLCJyYXdNZXNzYWdlIiwiaHRtbENvbnRlbnQiLCJfZXh0cmFjdE1lc3NhZ2VQYXJ0IiwidGV4dENvbnRlbnQiLCJfcGFyc2VNZXNzYWdlIiwicGFydHMiLCJtZXNzYWdlU3RyaW5nIiwiYm91bmRhcnkiLCJzcGxpdCIsInNsaWNlIiwidHlwZSIsInBhcnQiLCJmaW5kIiwicCIsImluY2x1ZGVzIiwiaGVhZGVyU2VwYXJhdG9yIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWUsTUFBTUEsYUFBTixDQUFvQjtBQUFBO0FBQUEsU0FFakNDLElBRmlDLEdBRTFCLE1BRjBCO0FBQUEsU0FJakNDLFNBSmlDLEdBSXJCLEVBSnFCO0FBQUE7O0FBTWpDQyxXQUFTO0FBQ1AsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLFNBQU9DLFFBQVAsRUFBaUI7QUFDZixnQ0FBYSxZQUFNO0FBQ2pCLGFBQU9BLFNBQVMsSUFBVCxFQUFlLElBQWYsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFREMsT0FBS0MsSUFBTCxFQUFXRixRQUFYLEVBQXFCO0FBQUE7O0FBQ25CLFFBQUlHLFVBQVVELEtBQUtDLE9BQUwsQ0FBYUMsZ0JBQWIsRUFBZDtBQUNBLFFBQUlDLFNBQVMsRUFBYjs7QUFFQUYsWUFBUUcsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzNCLGtDQUFhLFlBQU07QUFDakJQLGlCQUFTTyxHQUFUO0FBQ0QsT0FGRDtBQUdELEtBSkQ7O0FBTUFKLFlBQVFHLEVBQVIsQ0FBVyxNQUFYLEVBQW1CLFVBQUNFLEtBQUQsRUFBVztBQUM1QkgsYUFBT0ksSUFBUCxDQUFZRCxLQUFaO0FBQ0QsS0FGRDs7QUFJQUwsWUFBUUcsRUFBUixDQUFXLEtBQVgsRUFBa0IsWUFBTTtBQUN0QixrQ0FBYSxZQUFNO0FBQ2pCLFlBQUlJLFlBQVksQ0FBQ1IsS0FBS0MsT0FBTCxDQUFhUSxTQUFiLENBQXVCLFlBQXZCLEtBQXdDLEVBQXpDLEVBQTZDQyxPQUE3QyxDQUFxRCxTQUFyRCxFQUFnRSxFQUFoRSxDQUFoQjtBQUNBLFlBQUlDLGtCQUFrQkMsT0FBT0MsTUFBUCxDQUFjVixNQUFkLENBQXRCO0FBQ0EsWUFBSVcsT0FBTztBQUNUTiw4QkFEUztBQUVUTyxvQkFBVWYsS0FBS2dCLElBQUwsQ0FBVUQsUUFBVixJQUFzQmYsS0FBS0MsT0FBTCxDQUFhZ0IsV0FBYixFQUZ2QjtBQUdUQyxtQkFBU1AsZ0JBQWdCUSxRQUFoQixHQUEyQkMsS0FBM0IsQ0FBaUMsZUFBakMsRUFBa0QsQ0FBbEQsQ0FIQTtBQUlUQyxzQkFBWVYsZUFKSDtBQUtUVyxxQkFMUyxjQUtLO0FBQ1osbUJBQU8sS0FBS0MsbUJBQUwsQ0FBeUIsV0FBekIsQ0FBUDtBQUNELFdBUFE7QUFRVEMscUJBUlMsY0FRSztBQUNaLG1CQUFPLEtBQUtELG1CQUFMLENBQXlCLFlBQXpCLENBQVA7QUFDRCxXQVZRO0FBV1RFLHVCQVhTLGNBV087QUFDZCxnQkFBSSxDQUFDLEtBQUtDLEtBQVYsRUFBaUI7QUFDZixrQkFBSUMsZ0JBQWdCaEIsZ0JBQWdCUSxRQUFoQixFQUFwQjtBQUNBLGtCQUFJUyxXQUFXRCxjQUFjUCxLQUFkLENBQW9CLGlCQUFwQixFQUF1QyxDQUF2QyxDQUFmO0FBQ0EsbUJBQUtNLEtBQUwsR0FBYUMsY0FBY0UsS0FBZCxVQUE0QkQsUUFBNUIsRUFBeUNFLEtBQXpDLENBQStDLENBQS9DLENBQWI7QUFDRDtBQUNGLFdBakJRO0FBa0JUUCw2QkFsQlMsWUFrQldRLElBbEJYLEVBa0JpQjtBQUN4QixpQkFBS04sYUFBTDtBQUNBLGdCQUFJTyxPQUFPLEtBQUtOLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixVQUFDQyxDQUFEO0FBQUEscUJBQU9BLEVBQUVDLFFBQUYsb0JBQTZCSixJQUE3QixDQUFQO0FBQUEsYUFBaEIsQ0FBWDtBQUNBLGdCQUFJSyxrQkFBa0IsVUFBdEI7QUFDQSxtQkFBT0osT0FBT0EsS0FBS0gsS0FBTCxDQUFXTyxlQUFYLEVBQTRCTixLQUE1QixDQUFrQyxDQUFsQyxFQUFxQ08sSUFBckMsQ0FBMENELGVBQTFDLENBQVAsR0FBb0UsSUFBM0U7QUFDRDtBQXZCUSxTQUFYO0FBeUJBLGNBQUt6QyxTQUFMLENBQWVZLElBQWYsQ0FBb0JPLElBQXBCO0FBQ0FoQixpQkFBUyxJQUFULEVBQWVnQixJQUFmO0FBQ0QsT0E5QkQ7QUErQkQsS0FoQ0Q7QUFrQ0Q7O0FBaEVnQztrQkFBZHJCLGEiLCJmaWxlIjoiYXBwL21haWxlci10cmFuc3BvcnRzL3Rlc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjYnVyZGluZS9Qcm9qZWN0cy9kZW5hbGkvZGVuYWxpLW1haWxlciIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3RUcmFuc3BvcnQge1xuXG4gIG5hbWUgPSAnVGVzdCc7XG5cbiAgc2VudE1haWxzID0gW107XG5cbiAgaXNJZGxlKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmVyaWZ5KGNhbGxiYWNrKSB7XG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmQobWFpbCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbWVzc2FnZSA9IG1haWwubWVzc2FnZS5jcmVhdGVSZWFkU3RyZWFtKCk7XG4gICAgbGV0IGNodW5rcyA9IFtdO1xuXG4gICAgbWVzc2FnZS5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBtZXNzYWdlLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBjaHVua3MucHVzaChjaHVuayk7XG4gICAgfSk7XG5cbiAgICBtZXNzYWdlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZUlkID0gKG1haWwubWVzc2FnZS5nZXRIZWFkZXIoJ21lc3NhZ2UtaWQnKSB8fCAnJykucmVwbGFjZSgvWzw+XFxzXS9nLCAnJyk7XG4gICAgICAgIGxldCBidWZmZXJlZE1lc3NhZ2UgPSBCdWZmZXIuY29uY2F0KGNodW5rcyk7XG4gICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICBlbnZlbG9wZTogbWFpbC5kYXRhLmVudmVsb3BlIHx8IG1haWwubWVzc2FnZS5nZXRFbnZlbG9wZSgpLFxuICAgICAgICAgIHN1YmplY3Q6IGJ1ZmZlcmVkTWVzc2FnZS50b1N0cmluZygpLm1hdGNoKC9TdWJqZWN0OiAoLispLylbMV0sXG4gICAgICAgICAgcmF3TWVzc2FnZTogYnVmZmVyZWRNZXNzYWdlLFxuICAgICAgICAgIGh0bWxDb250ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhY3RNZXNzYWdlUGFydCgndGV4dC9odG1sJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0Q29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9leHRyYWN0TWVzc2FnZVBhcnQoJ3RleHQvcGxhaW4nKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9wYXJzZU1lc3NhZ2UoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFydHMpIHtcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VTdHJpbmcgPSBidWZmZXJlZE1lc3NhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgbGV0IGJvdW5kYXJ5ID0gbWVzc2FnZVN0cmluZy5tYXRjaCgvYm91bmRhcnk9XCIoLispXCIvKVsxXTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cyA9IG1lc3NhZ2VTdHJpbmcuc3BsaXQoYFxcbi0tJHsgYm91bmRhcnkgfWApLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX2V4dHJhY3RNZXNzYWdlUGFydCh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIGxldCBwYXJ0ID0gdGhpcy5wYXJ0cy5maW5kKChwKSA9PiBwLmluY2x1ZGVzKGBDb250ZW50LVR5cGU6ICR7IHR5cGUgfWApKTtcbiAgICAgICAgICAgIGxldCBoZWFkZXJTZXBhcmF0b3IgPSAnXFxyXFxuXFxyXFxuJztcbiAgICAgICAgICAgIHJldHVybiBwYXJ0ID8gcGFydC5zcGxpdChoZWFkZXJTZXBhcmF0b3IpLnNsaWNlKDEpLmpvaW4oaGVhZGVyU2VwYXJhdG9yKSA6IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbnRNYWlscy5wdXNoKGluZm8pO1xuICAgICAgICBjYWxsYmFjayhudWxsLCBpbmZvKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxufVxuIl19