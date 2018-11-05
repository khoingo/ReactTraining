import React, { Component } from "react";

function CustomTextInput() {
  // textInput must be declared here so the ref can refer to it
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />

      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}

export default class FunctionComponent extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const input = this.textInput;
  }

  render() {
    // This will *not* work!
    return <CustomTextInput ref={this.textInput} />;
  }
}
