"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "form-group"
      }, _react.default.createElement("label", {
        className: "col-xs-4 control-label"
      }, this.props.name), _react.default.createElement("div", {
        className: "col-xs-8"
      }, _react.default.createElement("input", {
        type: "text",
        className: "form-control"
      })));
    }
  }]);

  return Item;
}(_react.Component);

var Example =
/*#__PURE__*/
function (_Component2) {
  _inherits(Example, _Component2);

  function Example() {
    var _this;

    _classCallCheck(this, Example);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Example).call(this));
    _this.state = {
      list: [{
        name: 'Foo1444610101010',
        id: 1444610101010
      }, {
        name: 'Bar1444600000000',
        id: 1444600000000
      }]
    };
    return _this;
  }

  _createClass(Example, [{
    key: "userInput",
    value: function userInput() {
      var firstItems = Array.from(document.querySelectorAll('.form-group:first-child input'));
      firstItems.forEach(function (item) {
        return item.value = 'It is ' + new Date().toTimeString();
      });
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var id = +new Date();
      this.setState({
        list: [{
          name: 'Baz' + id,
          id: id
        }].concat(_toConsumableArray(this.state.list))
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("b", null, "How to use: "), "First write something in the inputs (or ", _react.default.createElement("a", {
        href: "#",
        onClick: this.userInput
      }, "simulate it"), "). Then hit ", _react.default.createElement("em", null, "Add item"), " and see what happens\u2026", _react.default.createElement("hr", null), _react.default.createElement("button", {
        className: "btn btn-primary",
        onClick: this.addItem.bind(this)
      }, _react.default.createElement("b", null, "Add item"), " to the beginning of the list"), _react.default.createElement("h3", null, "Dangerous ", _react.default.createElement("code", null, "key=index")), _react.default.createElement("form", {
        className: "form-horizontal"
      }, this.state.list.map(function (todo, index) {
        return _react.default.createElement(Item, _extends({}, todo, {
          key: index
        }));
      })), _react.default.createElement("h3", null, "Better ", _react.default.createElement("code", null, "key=id")), _react.default.createElement("form", {
        className: "form-horizontal"
      }, this.state.list.map(function (todo) {
        return _react.default.createElement(Item, _extends({}, todo, {
          key: todo.id
        }));
      })), _react.default.createElement("hr", null), _react.default.createElement("a", {
        href: "https://medium.com/p/e0349aece318"
      }, "\xAB Back to the article"), ".");
    }
  }]);

  return Example;
}(_react.Component);

exports.default = Example;