'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Mailer {

  get logger() {
    return this.container.lookup('app:logger');
  }

  to(data) {
    return data.to;
  }

  from(data) {
    return data.from || this.container.config.mailer.from || null;
  }

  subject(data) {
    return data.subject || null;
  }

  html(data) {
    let template = this.container.factoryFor('mailer:' + this.name + '/template.html.js').class;
    return template ? template(data) : null;
  }

  text(data) {
    let template = this.container.factoryFor('mailer:' + this.name + '/template.txt.js').class;
    return template ? template(data) : null;
  }

  constructor(name, container) {
    this.name = name;
    this.container = container;
  }

  send(data) {
    var options, transport, response;
    return _regenerator2.default.async(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator2.default.awrap(_bluebird2.default.props({
            to: result(this, 'to', data),
            from: result(this, 'from', data),
            subject: result(this, 'subject', data),
            html: result(this, 'html', data),
            text: result(this, 'text', data)
          }));

        case 2:
          options = _context.sent;

          if (!(!options.html && !options.text)) {
            _context.next = 5;
            break;
          }

          throw new Error('No templates found for "' + this.name + '" mailer.');

        case 5:
          transport = this.container.lookup('mailer-transport:application');
          _context.next = 8;
          return _regenerator2.default.awrap(_bluebird2.default.fromNode(function (cb) {
            return transport.sendMail(options, cb);
          }));

        case 8:
          response = _context.sent;

          this.logger.info('mailer:' + this.name + ' sent to ' + options.to);
          return _context.abrupt('return', response);

        case 11:
        case 'end':
          return _context.stop();
      }
    }, null, this);
  }

  modelFor(type) {
    return this.container.lookup('model:' + type);
  }

}

exports.default = Mailer;
function result(obj, prop, ...args) {
  let value = obj[prop];
  if (typeof value === 'function') {
    var _value;

    value = (_value = value).call.apply(_value, [obj].concat(args));
  }
  return value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tYWlsZXIuanMiXSwibmFtZXMiOlsiTWFpbGVyIiwibG9nZ2VyIiwiY29udGFpbmVyIiwibG9va3VwIiwidG8iLCJkYXRhIiwiZnJvbSIsImNvbmZpZyIsIm1haWxlciIsInN1YmplY3QiLCJodG1sIiwidGVtcGxhdGUiLCJmYWN0b3J5Rm9yIiwibmFtZSIsImNsYXNzIiwidGV4dCIsImNvbnN0cnVjdG9yIiwic2VuZCIsInByb3BzIiwicmVzdWx0Iiwib3B0aW9ucyIsIkVycm9yIiwidHJhbnNwb3J0IiwiZnJvbU5vZGUiLCJjYiIsInNlbmRNYWlsIiwicmVzcG9uc2UiLCJpbmZvIiwibW9kZWxGb3IiLCJ0eXBlIiwib2JqIiwicHJvcCIsImFyZ3MiLCJ2YWx1ZSIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRWUsTUFBTUEsTUFBTixDQUFhOztBQUUxQixNQUFJQyxNQUFKLEdBQWE7QUFDWCxXQUFPLEtBQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixZQUF0QixDQUFQO0FBQ0Q7O0FBRURDLEtBQUdDLElBQUgsRUFBUztBQUNQLFdBQU9BLEtBQUtELEVBQVo7QUFDRDs7QUFFREUsT0FBS0QsSUFBTCxFQUFXO0FBQ1QsV0FBT0EsS0FBS0MsSUFBTCxJQUFhLEtBQUtKLFNBQUwsQ0FBZUssTUFBZixDQUFzQkMsTUFBdEIsQ0FBNkJGLElBQTFDLElBQWtELElBQXpEO0FBQ0Q7O0FBRURHLFVBQVFKLElBQVIsRUFBYztBQUNaLFdBQU9BLEtBQUtJLE9BQUwsSUFBZ0IsSUFBdkI7QUFDRDs7QUFFREMsT0FBS0wsSUFBTCxFQUFXO0FBQ1QsUUFBSU0sV0FBVyxLQUFLVCxTQUFMLENBQWVVLFVBQWYsYUFBcUMsS0FBS0MsSUFBMUMsd0JBQW9FQyxLQUFuRjtBQUNBLFdBQU9ILFdBQVdBLFNBQVNOLElBQVQsQ0FBWCxHQUE0QixJQUFuQztBQUNEOztBQUVEVSxPQUFLVixJQUFMLEVBQVc7QUFDVCxRQUFJTSxXQUFXLEtBQUtULFNBQUwsQ0FBZVUsVUFBZixhQUFxQyxLQUFLQyxJQUExQyx1QkFBbUVDLEtBQWxGO0FBQ0EsV0FBT0gsV0FBV0EsU0FBU04sSUFBVCxDQUFYLEdBQTRCLElBQW5DO0FBQ0Q7O0FBRURXLGNBQVlILElBQVosRUFBa0JYLFNBQWxCLEVBQTZCO0FBQzNCLFNBQUtXLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtYLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUtlLE1BQU4sQ0FBV1osSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDc0IsbUJBQVFhLEtBQVIsQ0FBYztBQUNoQ2QsZ0JBQUllLE9BQU8sSUFBUCxFQUFhLElBQWIsRUFBbUJkLElBQW5CLENBRDRCO0FBRWhDQyxrQkFBTWEsT0FBTyxJQUFQLEVBQWEsTUFBYixFQUFxQmQsSUFBckIsQ0FGMEI7QUFHaENJLHFCQUFTVSxPQUFPLElBQVAsRUFBYSxTQUFiLEVBQXdCZCxJQUF4QixDQUh1QjtBQUloQ0ssa0JBQU1TLE9BQU8sSUFBUCxFQUFhLE1BQWIsRUFBcUJkLElBQXJCLENBSjBCO0FBS2hDVSxrQkFBTUksT0FBTyxJQUFQLEVBQWEsTUFBYixFQUFxQmQsSUFBckI7QUFMMEIsV0FBZCxDQUR0Qjs7QUFBQTtBQUNNZSxpQkFETjs7QUFBQSxnQkFRTSxDQUFDQSxRQUFRVixJQUFULElBQWlCLENBQUNVLFFBQVFMLElBUmhDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdCQVNVLElBQUlNLEtBQUosOEJBQXNDLEtBQUtSLElBQTNDLGVBVFY7O0FBQUE7QUFXTVMsbUJBWE4sR0FXa0IsS0FBS3BCLFNBQUwsQ0FBZUMsTUFBZixDQUFzQiw4QkFBdEIsQ0FYbEI7QUFBQTtBQUFBLDZDQVl1QixtQkFBUW9CLFFBQVIsQ0FBaUIsVUFBQ0MsRUFBRDtBQUFBLG1CQUFRRixVQUFVRyxRQUFWLENBQW1CTCxPQUFuQixFQUE0QkksRUFBNUIsQ0FBUjtBQUFBLFdBQWpCLENBWnZCOztBQUFBO0FBWU1FLGtCQVpOOztBQWFFLGVBQUt6QixNQUFMLENBQVkwQixJQUFaLGFBQTRCLEtBQUtkLElBQWpDLGlCQUFtRE8sUUFBUWhCLEVBQTNEO0FBYkYsMkNBY1NzQixRQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkFFLFdBQVNDLElBQVQsRUFBZTtBQUNiLFdBQU8sS0FBSzNCLFNBQUwsQ0FBZUMsTUFBZixZQUFnQzBCLElBQWhDLENBQVA7QUFDRDs7QUFwRHlCOztrQkFBUDdCLE07QUF3RHJCLFNBQVNtQixNQUFULENBQWdCVyxHQUFoQixFQUFxQkMsSUFBckIsRUFBMkIsR0FBR0MsSUFBOUIsRUFBb0M7QUFDbEMsTUFBSUMsUUFBUUgsSUFBSUMsSUFBSixDQUFaO0FBQ0EsTUFBSSxPQUFPRSxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQUE7O0FBQy9CQSxZQUFRLGlCQUFNQyxJQUFOLGdCQUFXSixHQUFYLFNBQW1CRSxJQUFuQixFQUFSO0FBQ0Q7QUFDRCxTQUFPQyxLQUFQO0FBQ0QiLCJmaWxlIjoibGliL21haWxlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNidXJkaW5lL1Byb2plY3RzL2RlbmFsaS9kZW5hbGktbWFpbGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsZXIge1xuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmxvb2t1cCgnYXBwOmxvZ2dlcicpO1xuICB9XG5cbiAgdG8oZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnRvO1xuICB9XG5cbiAgZnJvbShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEuZnJvbSB8fCB0aGlzLmNvbnRhaW5lci5jb25maWcubWFpbGVyLmZyb20gfHwgbnVsbDtcbiAgfVxuXG4gIHN1YmplY3QoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnN1YmplY3QgfHwgbnVsbDtcbiAgfVxuXG4gIGh0bWwoZGF0YSkge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuY29udGFpbmVyLmZhY3RvcnlGb3IoYG1haWxlcjokeyB0aGlzLm5hbWUgfS90ZW1wbGF0ZS5odG1sLmpzYCkuY2xhc3M7XG4gICAgcmV0dXJuIHRlbXBsYXRlID8gdGVtcGxhdGUoZGF0YSkgOiBudWxsO1xuICB9XG5cbiAgdGV4dChkYXRhKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5jb250YWluZXIuZmFjdG9yeUZvcihgbWFpbGVyOiR7IHRoaXMubmFtZSB9L3RlbXBsYXRlLnR4dC5qc2ApLmNsYXNzO1xuICAgIHJldHVybiB0ZW1wbGF0ZSA/IHRlbXBsYXRlKGRhdGEpIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRhaW5lcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICBhc3luYyBzZW5kKGRhdGEpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGF3YWl0IFByb21pc2UucHJvcHMoe1xuICAgICAgdG86IHJlc3VsdCh0aGlzLCAndG8nLCBkYXRhKSxcbiAgICAgIGZyb206IHJlc3VsdCh0aGlzLCAnZnJvbScsIGRhdGEpLFxuICAgICAgc3ViamVjdDogcmVzdWx0KHRoaXMsICdzdWJqZWN0JywgZGF0YSksXG4gICAgICBodG1sOiByZXN1bHQodGhpcywgJ2h0bWwnLCBkYXRhKSxcbiAgICAgIHRleHQ6IHJlc3VsdCh0aGlzLCAndGV4dCcsIGRhdGEpXG4gICAgfSk7XG4gICAgaWYgKCFvcHRpb25zLmh0bWwgJiYgIW9wdGlvbnMudGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB0ZW1wbGF0ZXMgZm91bmQgZm9yIFwiJHsgdGhpcy5uYW1lIH1cIiBtYWlsZXIuYCk7XG4gICAgfVxuICAgIGxldCB0cmFuc3BvcnQgPSB0aGlzLmNvbnRhaW5lci5sb29rdXAoJ21haWxlci10cmFuc3BvcnQ6YXBwbGljYXRpb24nKTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmZyb21Ob2RlKChjYikgPT4gdHJhbnNwb3J0LnNlbmRNYWlsKG9wdGlvbnMsIGNiKSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgbWFpbGVyOiR7IHRoaXMubmFtZSB9IHNlbnQgdG8gJHsgb3B0aW9ucy50byB9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgbW9kZWxGb3IodHlwZSkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5sb29rdXAoYG1vZGVsOiR7IHR5cGUgfWApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gcmVzdWx0KG9iaiwgcHJvcCwgLi4uYXJncykge1xuICBsZXQgdmFsdWUgPSBvYmpbcHJvcF07XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLmNhbGwob2JqLCAuLi5hcmdzKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG4iXX0=