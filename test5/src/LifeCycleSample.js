import React, { Component } from 'react';
import { prev } from 'dom7/dist/dom7.modular';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps..');
    console.log(nextProps);
    console.log(prevState);

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate..');
    console.log(nextProps);
    console.log(nextState);

    return nextState.number % 10 !== 4;
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
