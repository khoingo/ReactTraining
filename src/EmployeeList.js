import React, { Component } from "react";
import data from "./data/employees";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  showDetail = id => {
    this.props.showDetail(id);
  };

  
  render() {
    

    return (
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.employees.map(e => {
            return (
              // <React.Fragment key={e.id}>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>
                    <a href="#" onClick={this.showDetail.bind(this, e.id)}>
                      Detail
                    </a>
                  </td>
                </tr>
              // </React.Fragment>
            );
          })}
        </tbody>
      </table>
    );
  }
}
