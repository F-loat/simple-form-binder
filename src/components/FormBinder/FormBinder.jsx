import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormBinder extends Component {
  static contextTypes = {
    setter: PropTypes.func,
  };

  render() {
    const FormItem = React.Children.only(this.props.children);
    const FormItemProps = FormItem.props;

    const NewFormItem = React.cloneElement(FormItem, {
      onChange: (value) => {
        FormItemProps.onChange && FormItemProps.onChange.apply(this, [value]);
        this.context.setter(FormItemProps.name, value);
      },
    });

    return NewFormItem;
  }
}
