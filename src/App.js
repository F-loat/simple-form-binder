import React, { Component } from 'react';
import { FormBinderWrapper, FormBinder } from './components/FormBinder';
import Input from './components/Input';
import Test from './components/Test';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  formChange = value => {
    console.log('form', value);
    this.setState({
      form: value,
    });
  };

  render() {
    const { form } = this.state;

    return (
      <FormBinderWrapper value={form} onChange={this.formChange}>
        <div className="form">
          <div>
            <h4>页面内的输入框</h4>
            <FormBinder>
              <Input name="title" className="input-item" />
            </FormBinder>
          </div>
          <Test />
        </div>
      </FormBinderWrapper>
    );
  }
}

export default App;
