import React, { Component } from 'react';
import './ValidateSample.css';

class ValidateSample extends Component {
  state = {
    password: '',
    cilcked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        ></input>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidateSample;
