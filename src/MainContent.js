import React, { Component, PureComponent } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeDetail from "./EmployeeDetail";
import data from "./data/employees";
import { ThemeContext, UserContext } from "./context/theme-context";

export default class MainContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      employeeDetail: null
    };
  }

  showDetail = id => {
    const employee = id ? data.employees.find(e => e.id === id) : null;
    this.setState({ employeeDetail: employee });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.name === this.props.name) {
      return true;
    }

    return true;
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <UserContext.Consumer>
            {user => (
              <>
              <EmployeeList showDetail={this.showDetail}/>
              <EmployeeDetail 
                employeeDetail={this.state.employeeDetail} 
                theme={theme}
                toggleTheme={toggleTheme}
                user={user}
                test={'1'}
              />
            </>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
