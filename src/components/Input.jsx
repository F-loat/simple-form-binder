import React, { Component } from 'react';

export default class Input extends Component {
  static defaultProps = {
    onChange: () => {},
  };

  onChange = (e) => {
    const { value } = e.target;
    this.props.onChange(value, e);
  }

  render() {
    const { value } = this.props;

    return (
      <textarea
        {...this.props}
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
