import React from 'react';
import ReactDOM from 'react-dom';
import {EventForm, MeetingForm, ReminderForm} from './EntryFormTypes';

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
