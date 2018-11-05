"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _MainContent = _interopRequireDefault(require("./MainContent"));

var _themeContext = require("./context/theme-context");

var _DoNotModifyDirectly = _interopRequireDefault(require("./DoNotModifyDirectly"));

var _CustomTextInput = _interopRequireDefault(require("./refs/CustomTextInput"));

var _AutoFocusTextInput = _interopRequireDefault(require("./refs/AutoFocusTextInput"));

var _FunctionComponent = _interopRequireDefault(require("./refs/FunctionComponent"));

var _Key = _interopRequireDefault(require("./key/Key"));

var _Profile = _interopRequireDefault(require("./Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleTheme", function () {
      for (var i = 0; i < 10; _readOnlyError("i"), i++) {
        console.log(i);
      }

      _this.setState(function (state) {
        return {
          theme: state.theme === _themeContext.themes.dark ? _themeContext.themes.light : _themeContext.themes.dark
        };
      });
    });

    _this.state = {
      theme: _themeContext.themes.light,
      toggleTheme: _this.toggleTheme
    };
    _this.ref = _react.default.createRef();
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_themeContext.ThemeContext.Provider, {
        value: this.state
      }, _react.default.createElement(_themeContext.UserContext.Provider, {
        value: "Guest"
      }, _react.default.createElement(_react.default.StrictMode, null, _react.default.createElement(_MainContent.default, {
        ref: this.ref
      }), _react.default.createElement(_DoNotModifyDirectly.default, null), _react.default.createElement(_CustomTextInput.default, null), _react.default.createElement(_AutoFocusTextInput.default, null), _react.default.createElement(_AutoFocusTextInput.default, null), _react.default.createElement(_FunctionComponent.default, null), _react.default.createElement(_Key.default, null))));
    }
  }]);

  return App;
}(_react.Component);

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById("root"));