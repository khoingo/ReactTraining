import React, { Component } from "react";
import ShowInformation from './ShowInformation';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Address: 123 Cộng Hòa q.Tân Bình"
    };
    this.refInfor = React.createRef();
  }

  showInformation = () => {
    alert(this.refInfor.current.value);
  }

  showAddress() {
    alert(this.state.address);
  }

  render() {
    
    return (
      <>
        <ShowInformation ref={this.refInfor} />
        <button onClick={this.showInformation}>Show Information</button>
      </>
    )
  }
}


// export default (props => <Address {...props} />);