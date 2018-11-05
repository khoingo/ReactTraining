import React, { Component } from "react";

function withValidation(WrappedComponent) {
  // WrappedComponent.prototype.componentDidMount = function(nextProps) {
  //   console.log('Current props: ', this.props);
  //   console.log('Next props: ', nextProps);
  // };

  class HocComponent extends Component {
    componentDidMount() {
      console.log('Current props: ', this.props);
    }

    onBlur = (e) => {
      if(e.target.value === "") {
        alert("This field is required");
      }
    }

    render() {
      return <WrappedComponent {...this.props} onBlur={this.onBlur} />
    }
  };

  HocComponent.staticMethod = WrappedComponent.staticMethod;
  return HocComponent;
}

export default withValidation;
