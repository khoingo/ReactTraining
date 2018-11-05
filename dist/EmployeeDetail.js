"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Address = _interopRequireDefault(require("./Address"));

var _themeContext = require("./context/theme-context");

var _Input = _interopRequireDefault(require("./share/Input"));

var _ValidationInput = _interopRequireDefault(require("./hoc/ValidationInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationInput = (0, _ValidationInput.default)(_Input.default);

var EmployeeDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(EmployeeDetail, _Component);

  function EmployeeDetail(props) {
    var _this;

    _classCallCheck(this, EmployeeDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmployeeDetail).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit", function () {
      var toggleTheme = _this.props.toggleTheme;

      _this.refAddress.current.showAddress();

      toggleTheme();
    });

    _this.refAddress = _react.default.createRef();
    return _this;
  }

  _createClass(EmployeeDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var theme = this.props.theme;

      _Input.default.staticMethod();

      ValidationInput.staticMethod();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(prevProps, prevState) {
      var theme = this.props.theme;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var theme = this.props.theme;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.employeeDetail) {
        return null;
      }

      var _this$props = this.props,
          _this$props$employeeD = _this$props.employeeDetail,
          id = _this$props$employeeD.id,
          name = _this$props$employeeD.name,
          background = _this$props.theme.background,
          toggleTheme = _this$props.toggleTheme,
          user = _this$props.user; // const ValidationInput = Validation(Input);

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, "Employee Detail:"), _react.default.createElement("div", null, "User: ", user), _react.default.createElement("div", null, "ID: ", id), _react.default.createElement("div", null, "Name: ", name), _react.default.createElement(_Address.default, {
        ref: this.refAddress
      }), _react.default.createElement(_Input.default, null), _react.default.createElement(ValidationInput, null), _react.default.createElement("button", {
        style: {
          backgroundColor: background
        },
        onClick: this.submit
      }, "Toggle Theme"));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // const a = this.props;
      var p = props;
      var s = state;
      return null;
    }
  }]);

  return EmployeeDetail;
}(_react.Component); // EmployeeDetail.propTypes = {
//   test: PropTypes.number
// };
// EmployeeDetail.defaultProps = {
//   name: 'Stranger'
// };


exports.default = EmployeeDetail;

_defineProperty(EmployeeDetail, "propTypes", {
  test: _propTypes.default.number
});

_defineProperty(EmployeeDetail, "defaultProps", {
  name: 'Stranger'
});