import React from 'react';

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class DoNotModifyDirectly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    // this.setState({words: words});

    // this.setState(state => ({
    //   words: state.words.concat(['marklar'])
    // }));


    this.setState(state => ({
      words: [...state.words, 'marklar'],
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add word</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}