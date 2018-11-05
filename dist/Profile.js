"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var MyProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(MyProfile, _Component);

  function MyProfile(props) {
    var _this;

    _classCallCheck(this, MyProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyProfile).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      // Wrong implementation
      // this.state.name = "Hau"; // it is cause of dirty state, impact to lifecycle
      // this.setState({});
      _this.setState(function (state, props) {
        return {
          age: state.age + 1
        };
      });

      _this.setState(function (state, props) {
        return {
          age: state.age + 2
        };
      });

      _this.setState(function (state, props) {
        return {
          age: state.age + 3
        };
      }); // this.setState( { age: this.state.age + 1});
      // this.setState({age: this.state.age + 2});
      // this.another();

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "another", function () {
      setTimeout(function () {
        _this.setState({
          age: _this.state.age + 4
        });

        _this.setState({
          age: _this.state.age + 5
        });

        _this.setState({
          age: _this.state.age + 60
        });
      }, 3000);
    });

    _this.state = {
      age: 30,
      name: "Khoi"
    };
    return _this;
  }

  _createClass(MyProfile, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", null, "My Profile: "), _react.default.createElement("div", null, "Age: ", this.state.age), _react.default.createElement("div", null, "Name: ", this.state.name), _react.default.createElement("button", {
        onClick: this.handleClick
      }, "Update profile"));
    }
  }]);

  return MyProfile;
}(_react.Component);

exports.default = MyProfile;