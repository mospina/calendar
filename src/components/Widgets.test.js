import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Checkbox, Select, Textarea} from './Widgets';

describe('Input', () => {
  const props = {
    value: 'input',
    onChange: (entry) => null,
    label: 'input'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Checkbox', () => {
  const props = {
    value: 'checkbox',
    onChange: (entry) => null,
    label: 'checkbox'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Select', () => {
  const props = {
    value: 'select',
    onChange: (entry) => null,
    label: 'select',
    options: []
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Select {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Textarea', () => {
  const props = {
    value: 'textarea',
    onChange: (entry) => null,
    label: 'textarea'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textarea {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


