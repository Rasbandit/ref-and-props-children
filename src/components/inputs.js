import React, { Component } from 'react';

class inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    console.log(this.refs.name.value);
    // console.log(this.textInput);
    // this.setState({
    //   name: this.textInput.value
    // });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input type="text" ref={(name) => { this.input = name; }} />
        <input type="submit" value="Hit me" onClick={this.focusTextInput} />
      </div>
    );
  }
}

export default inputs;
