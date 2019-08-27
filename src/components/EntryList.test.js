import React from 'react';
import ReactDOM from 'react-dom';
import {EntryList} from './EntryList';

describe('EntryList', () => {
  const props = {
    entries: []
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EntryList {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
