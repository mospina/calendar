import React from 'react';
import ReactDOM from 'react-dom';
import {EventForm} from './EventForm';

describe('EventForm', () => {
  const props = {
    addEntries: (entry) => null
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
