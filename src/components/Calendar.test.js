import React from 'react';
import ReactDOM from 'react-dom';
import {Calendar as CalendarWidget} from './Calendar';
import {Calendar} from '../model/Calendar';

describe('Calendar component', () => {
  const props = {
    calendar: new Calendar('one@example.com')
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarWidget {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
