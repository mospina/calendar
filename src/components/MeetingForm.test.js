import React from 'react';
import ReactDOM from 'react-dom';
import {MeetingForm} from './MeetingForm';

describe('MeetingForm', () => {
  const props = {
    addEntries: (entry) => null
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MeetingForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
