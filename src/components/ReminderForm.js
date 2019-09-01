// @flow

import React, { Component } from 'react';
import {Reminder} from '../model/Reminder';
import {Input, Checkbox, Select, Textarea} from './Widgets';

type Interval = 'daily' | 'weekly' | 'monthly' | 'annually';

type Props = {
  createEntry : (Entry)=>void
}

type State = {
  date : string,
  time : string,
  label : string,
  interval : Interval,
  repeat : boolean,
  note : string
}

class ReminderForm extends Component<Props, State> {

  constructor(props: ReminderProps) {
    super(props);
    this.state = {
      date: '',
      time: '',
      label: '',
      repeat: false,
      interval: 'daily',
      note: ''
    }
  }

  // REQUIRES: a function that received an entry
  // EFFECTS: Create an Reminder entry and call the function with the entry
  onSubmit = (fn : (Entry) => void, event : SyntheticEvent<HTMLFormElement>) => {
    const entry = new Reminder(this.state.date, this.state.time);
    entry.label = this.state.label;
    entry.repeat = this.state.repeat;
    entry.interval = this.state.interval;
    entry.note = this.state.note;
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

  onNoteChange = (event : SyntheticEvent<HTMLTextareaElement>) => {
    this.setState({note: event.currentTarget.value });
  }

  render() {
    const {date, time, label, repeat, interval, note} = this.state;
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
        <Textarea
          label="Note"
          value={note}
          onChange={this.onNoteChange}
        />
        <button type="submit">Add Reminder</button>
      </form>
    )
  }
}

export {ReminderForm};
