import React, { Component } from "react";
import PropTypes from 'prop-types';
import Address from "./Address";
import { ThemeContext, UserContext } from "./context/theme-context";
import Input from './share/Input';
import Validation from './hoc/ValidationInput';
const ValidationInput = Validation(Input);

export default class EmployeeDetail extends Component {
  static propTypes = {
    test: PropTypes.number
  }

  static contextType = UserContext;

  static defaultProps = {
    name: 'Stranger'
  };

  constructor(props) {
    super();
    this.refAddress = React.createRef();
    
  }

  // static getDerivedStateFromProps(props, state) {
  //   // const a = this.props;
  //   const p = props;
  //   const s = state;
    
  // }

  componentDidMount() {
    const theme = this.props.theme;
    Input.staticMethod();
    ValidationInput.staticMethod();
  }

  componentWillReceiveProps(prevProps, prevState) {
    const theme = this.props.theme;
  }

  componentDidUpdate(prevProps, prevState) {
    const theme = this.props.theme;
  }


  submit = () => {
    const { toggleTheme } = this.props;
    this.refAddress.current.showAddress();
    toggleTheme();
  };

  render() {
    if (!this.props.employeeDetail) {
      return null;
    }

    const {
      employeeDetail: { id, name },
      theme: { background },
      toggleTheme,
      user
    } = this.props;

    const ctx = this.context;
    // const ValidationInput = Validation(Input);

    return (
      <>
        <div>Employee Detail:</div>
        <div>User: {user}</div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <Address ref={this.refAddress} />
        <Input />
        <ValidationInput />
        <button style={{ backgroundColor: background }} onClick={this.submit}>
          Toggle Theme
        </button>
      </>
    );
  }
}
EmployeeDetail.contextType = ThemeContext;

// EmployeeDetail.propTypes = {
//   test: PropTypes.number
// };

// EmployeeDetail.defaultProps = {
//   name: 'Stranger'
// };