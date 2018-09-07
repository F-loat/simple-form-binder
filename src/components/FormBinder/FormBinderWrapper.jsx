import React, { Component } from 'react';
import PropTypes from 'prop-types';

const REG_KEY = /\[(['"a-z_A-Z0-9]*)\]|\./gi;

export default class FormBinderWrapper extends Component {
  static childContextTypes = {
    setter: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || {},
    };
  }

  getChildContext() {
    return {
      setter: this.setter,
    };
  }

  setter = (path, newValue) => {
    let value = this.state.value;
    const pathArr = path.split(REG_KEY).filter(item => !!item);

    pathArr.reduce((pointer, currentPath, currentIndex) => {
      if (pathArr.length === currentIndex + 1) {
        // last one
        pointer[currentPath] = newValue;
      }
      return pointer[currentPath];
    }, value);

    // state already update
    this.setState({}, () => {
      this.props.onChange && this.props.onChange(this.state.value);
    });
  };

  render() {
    return React.Children.only(this.props.children);
  }
}
