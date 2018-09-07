import React, { Component } from 'react';
import { FormBinder } from './FormBinder';
import Input from './Input';

export default class Test extends Component {
  render() {
    return (
      <div>
        <h4>子组件内的输入框</h4>
        <FormBinder>
          <Input name="content" className="input-item" />
        </FormBinder>
      </div>
    );
  }
}
