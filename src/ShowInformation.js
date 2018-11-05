import React, { Component } from "react";

class ShowInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Address: 123 Cộng Hòa q.Tân Bình"
    };
  }

  showAddress() {
    alert(this.state.address);
  }

  render() {
    return (<div><input ref={this.props.forwardRef} />{this.state.address}</div>)
  }
}

export default ShowInformation;
//export default React.forwardRef((props, ref) => <ShowInformation {...props} forwardRef={ref} />);