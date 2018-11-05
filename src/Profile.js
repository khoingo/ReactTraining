import React, { Component } from "react";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30,
      name: "Khoi"
    };
  }

  handleClick = () => {
    // Wrong implementation
    // this.state.name = "Hau"; // it is cause of dirty state, impact to lifecycle
    // this.setState({});

    this.setState((state, props) => ({ age: state.age + 1 }));
    this.setState((state, props) => ({ age: state.age + 2 }));
    this.setState((state, props) => ({ age: state.age + 3 }));

    // this.setState( { age: this.state.age + 1});
    // this.setState({age: this.state.age + 2});
    // this.another();
  };

  another = () => {
    setTimeout(() => {
      this.setState({ age: this.state.age + 4 });
      this.setState({ age: this.state.age + 5 });
      this.setState({ age: this.state.age + 60 });
    }, 3000);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <div>
        <div>My Profile: </div>
        <div>Age: {this.state.age}</div>
        <div>Name: {this.state.name}</div>
        <button onClick={this.handleClick}>Update profile</button>
      </div>
    );
  }
}
