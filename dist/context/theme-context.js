"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserContext = exports.ThemeContext = exports.themes = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
exports.themes = themes;

var ThemeContext = _react.default.createContext({
  theme: themes.dark,
  toggleTheme: function toggleTheme() {}
});

exports.ThemeContext = ThemeContext;

var UserContext = _react.default.createContext({
  name: "Guest"
});

exports.UserContext = UserContext;