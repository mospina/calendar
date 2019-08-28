// @flow

import React, { Component } from 'react';
import {EntryList} from './EntryList';
import {EntryForm} from './EntryForm';
import {Calendar} from '../model/Calendar';

type Props = {
  calendar : Calendar
}

class CalendarWidget extends Component<Props> {

  render(){
    const {calendar} = this.props;

    return (
      <div id="calendar">
        <h2>{calendar.date + ' ' + calendar.time}</h2>
        <div className="add-entry">
          <EntryForm addEntry={(entry) => calendar.addEntry(entry)} />
        </div>
        <div className="entry-list">
          <h3>Today</h3>
          <EntryList entries={calendar.getTodayEntries()} />
        </div>
          <h3>This week</h3>
          <EntryList entries={calendar.getThisWeekEntries()} />
        <div className="entry-list">
        </div>
      </div>
    )
  }
}

export {CalendarWidget};
