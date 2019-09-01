import React from 'react';
import ReactDOM from 'react-dom';
import {ReminderForm} from './ReminderForm';

describe('ReminderForm', () => {
  const props = {
    addEntries: (entry) => null
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReminderForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
