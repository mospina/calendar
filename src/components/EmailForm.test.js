import React from 'react';
import ReactDOM from 'react-dom';
import {EmailForm} from './EmailForm';

describe('EmailForm', () => {
  const props = {
    value: '',
    onChange: () => null,
    onSubmit: () => null,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EmailForm {...props}>EmailForm</EmailForm>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
