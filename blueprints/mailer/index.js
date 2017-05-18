'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upperFirst = require('lodash/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _camelCase = require('lodash/camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

var _denaliCli = require('denali-cli');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MailerBlueprint extends _denaliCli.Blueprint {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.params = ['name'], _temp;
  }

  locals({ name: name }) {
    return {
      name: name,
      className: (0, _upperFirst2.default)((0, _camelCase2.default)(name))
    };
  }
}
exports.default = MailerBlueprint;
MailerBlueprint.blueprintName = 'mailer';
MailerBlueprint.description = 'Generate a basic mailer to customize';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWVwcmludHMvbWFpbGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haWxlckJsdWVwcmludCIsInBhcmFtcyIsImxvY2FscyIsIm5hbWUiLCJjbGFzc05hbWUiLCJibHVlcHJpbnROYW1lIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVlLE1BQU1BLGVBQU4sOEJBQXdDO0FBQUE7QUFBQTs7QUFBQSx3Q0FJckRDLE1BSnFELEdBSTVDLENBQUUsTUFBRixDQUo0QztBQUFBOztBQU1yREMsU0FBTyxFQUFFQyxVQUFGLEVBQVAsRUFBaUI7QUFDZixXQUFPO0FBQ0xBLGdCQURLO0FBRUxDLGlCQUFXLDBCQUFXLHlCQUFVRCxJQUFWLENBQVg7QUFGTixLQUFQO0FBSUQ7QUFYb0Q7a0JBQWxDSCxlO0FBQUFBLGUsQ0FDWkssYSxHQUFnQixRO0FBREpMLGUsQ0FFWk0sVyxHQUFjLHNDIiwiZmlsZSI6ImJsdWVwcmludHMvbWFpbGVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2J1cmRpbmUvUHJvamVjdHMvZGVuYWxpL2RlbmFsaS1tYWlsZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXBwZXJGaXJzdCBmcm9tICdsb2Rhc2gvdXBwZXJGaXJzdCc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9jYW1lbENhc2UnO1xuaW1wb3J0IHsgQmx1ZXByaW50IH0gZnJvbSAnZGVuYWxpLWNsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxlckJsdWVwcmludCBleHRlbmRzIEJsdWVwcmludCB7XG4gIHN0YXRpYyBibHVlcHJpbnROYW1lID0gJ21haWxlcic7XG4gIHN0YXRpYyBkZXNjcmlwdGlvbiA9ICdHZW5lcmF0ZSBhIGJhc2ljIG1haWxlciB0byBjdXN0b21pemUnO1xuXG4gIHBhcmFtcyA9IFsgJ25hbWUnIF07XG5cbiAgbG9jYWxzKHsgbmFtZSB9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBjbGFzc05hbWU6IHVwcGVyRmlyc3QoY2FtZWxDYXNlKG5hbWUpKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==