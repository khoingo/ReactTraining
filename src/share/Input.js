import React, { Component } from 'react';

export default class Input extends Component {
  static staticMethod() {
    alert("this is the static method");
  }  
  // componentDidMount() {
  //   console.log("Input:")
  // }
  render() {
    return <input type="text" {...this.props} />
  }
}