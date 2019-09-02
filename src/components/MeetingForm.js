// @flow

import React, { Component } from 'react';
import {Meeting} from '../model/Meeting';
import {Input, Checkbox, Select} from './Widgets';

type Interval = 'daily' | 'weekly' | 'monthly' | 'annually';

type Props = {
  createEntry : (Entry)=>void
}

type state = {
  date : string,
  time : string,
  label : string,
  interval : Interval,
  repeat : boolean
}

class MeetingForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      label: '',
      repeat: false,
      interval: 'daily'
    }
  }

  // REQUIRES: a function that received an entry
  // EFFECTS: Create an Reminder entry and call the function with the entry
  onSubmit = (fn : (Entry) => void, event : SyntheticEvent<HTMLFormElement>) => {
    const entry = new MeetingForm(this.state.date, this.state.time);
    entry.label = this.state.label;
    entry.repeat = this.state.repeat;
    entry.interval = this.state.interval;
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

  render() {
    const {date, time, label, repeat, interval} = this.state;
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
        <button type="submit">Add Meeting</button>
      </form>
    )
  }
}

export {MeetingForm};
