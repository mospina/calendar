// @flow

import React, { Component } from 'react';
import {Meeting} from '../model/Meeting';
import {Reminder} from '../model/Reminder';
import {DateUtils} from '../utils/DateUtils';
import {Input, Checkbox, Select, Textarea} from './Widgets';

type Interval = 'daily' | 'weekly' | 'monthly' | 'annually';

type Props = {
  createEntry : (Entry)=>void
}

type state = {
  date : string,
  time : string,
  label : string,
  interval : Interval,
  repeat : boolean,
  addReminder: boolean,
  attendees : string
}

class MeetingForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      label: '',
      repeat: false,
      interval: 'daily',
      addReminder: false,
      attendees: ''
    }
  }

  // REQUIRES: a function that received an entry
  // EFFECTS: Create an Reminder entry and call the function with the entry
  onSubmit = (fn : (Entry) => void, event : SyntheticEvent<HTMLFormElement>) => {
    const entry = new Meeting(this.state.date, this.state.time);
    entry.label = this.state.label;
    entry.repeat = this.state.repeat;
    entry.interval = this.state.interval;

    if (this.state.addReminder) {
      entry.reminder = new Reminder(
        this.state.date, 
        DateUtils.subtractTime(this.state.time, '01:00')
      );
    }
    
    for (let attendee of this.state.attendees.split(',')) { 
      entry.addAttendee(attendee.trim());
    }

    fn(entry);

    event.preventDefault();
  }

  onDateChange = (event : SyntheticEvent<HTMLInputElement>) => {
    this.setState({date: event.currentTarget.value});
  }

  onTimeChange = (event : SyntheticEvent<HTMLInputElement>) => {
    this.setState({time: event.currentTarget.value});
  }

  onLabelChange = (event : SyntheticEvent<HTMLInputElement>) => {
    this.setState({label: event.currentTarget.value});
  }

  onRepeatChange = (event : SyntheticEvent<HTMLInputElement>) => {
    this.setState({repeat: event.currentTarget.checked});
  }

  onIntervalChange = (event : SyntheticEvent<HTMLSelectElement>) => {
    this.setState({interval: event.currentTarget.value });
  }

  onAddReminderChange = (event : SyntheticEvent<HTMLInputElement>) => {
    this.setState({addReminder: event.currentTarget.checked});
  }

  onAttendeesChange = (event : SyntheticEvent<HTMLTextareaElement>) => {
    this.setState({attendees: event.currentTarget.value});
  }

  render() {
    const {date, time, label, repeat, interval, addReminder, attendees} = this.state;
    const {createEntry} = this.props;

    return (
      <form onSubmit={(event) => this.onSubmit(createEntry, event)} className="email-form"> 
        <Input 
          label="date"
          value={date}
          onChange={this.onDateChange} 
        />
       <Input 
          label="time"
          value={time}
          onChange={this.onTimeChange} 
        />
        <Input 
          label="label"
          value={label}
          onChange={this.onLabelChange} 
        />
        <Checkbox
          label="repeat"
          value={repeat}
          onChange={this.onRepeatChange}
        />
        <Select
          label="Interval"
          value={interval}
          onChange={this.onIntervalChange}
          options={['daily', 'weekly', 'monthly', 'annually']}
        />
        <Checkbox
          label="Add reminder"
          value={addReminder}
          onChange={this.onAddReminderChange}
        />
        <Textarea
          label="Attendees"
          value={attendees}
          onChange={this.onAttendeesChange}
        />
        <button type="submit">Add Meeting</button>
      </form>
    )
  }
}

export {MeetingForm};
