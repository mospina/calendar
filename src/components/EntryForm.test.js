import React from 'react';
import ReactDOM from 'react-dom';
import {EntryForm} from './EntryForm';

describe('EntryForm', () => {
  const props = {
    addEntries: (entry) => null
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EntryForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
