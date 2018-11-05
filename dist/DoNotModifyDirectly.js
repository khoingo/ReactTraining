"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ListOfWords =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ListOfWords, _React$PureComponent);

  function ListOfWords() {
    _classCallCheck(this, ListOfWords);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListOfWords).apply(this, arguments));
  }

  _createClass(ListOfWords, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.props.words.join(','));
    }
  }]);

  return ListOfWords;
}(_react.default.PureComponent);

var DoNotModifyDirectly =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DoNotModifyDirectly, _React$Component);

  function DoNotModifyDirectly(props) {
    var _this;

    _classCallCheck(this, DoNotModifyDirectly);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DoNotModifyDirectly).call(this, props));
    _this.state = {
      words: ['marklar']
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DoNotModifyDirectly, [{
    key: "handleClick",
    value: function handleClick() {
      // // This section is bad style and causes a bug
      // const words = this.state.words;
      // words.push('marklar');
      // this.setState({words: words});
      // this.setState(state => ({
      //   words: state.words.concat(['marklar'])
      // }));
      this.setState(function (state) {
        return {
          words: _toConsumableArray(state.words).concat(['marklar'])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: this.handleClick
      }, "Add word"), _react.default.createElement(ListOfWords, {
        words: this.state.words
      }));
    }
  }]);

  return DoNotModifyDirectly;
}(_react.default.Component);

exports.default = DoNotModifyDirectly;