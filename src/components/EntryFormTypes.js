// @flow

import React, { Component } from 'react';
import {Reminder} from '../model/Reminder';

type Interval = 'daily' | 'weekly' | 'monthly' | 'annually';

const EventForm = (props) => (<div>Event</div>)

const MeetingForm = (props) => (<div>Meeting</div>)

type ReminderProps = {
  createEntry : (Entry)=>void
}

type ReminderState = {
  date : string,
  time : string,
  label : string,
  interval : Interval,
  repeat : boolean,
  note : string
}

class ReminderForm extends Component<ReminderProps, ReminderState> {

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
        <button type="submit">Add Meeting</button>
      </form>
    )
  }
}

type InputProps = 
  { value : string, 
    onChange : (SyntheticEvent<HTMLInputElement>)=>void, 
    label : string
  }

function Input(props : InputProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label for={label}>{label}:</label>
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

type CheckboxProps = 
  { value : boolean, 
    onChange : (SyntheticEvent<HTMLInputElement>)=>void, 
    label : string
  }

function Checkbox(props : CheckboxProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label for={label}>{label}:</label>
      <input 
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
  );
}

type SelectProps = 
  { value : boolean, 
    onChange : (SyntheticEvent<HTMLSelectElement>)=>void, 
    label : string,
    options : Array<string>
  }

function Select(props : CheckboxProps) { 
  const { value, onChange, label, options} = props;

  return (
    <div>
      <label for={label}>{label}:</label>
      <select value={value} onChange={onChange}>
      { options.map((item) => (
          <option value={item}>{item}</option> 
          )
        )
      }
      </select>
    </div>
  );
}

type TextareaProps = 
  { value : string, 
    onChange : (SyntheticEvent<HTMLTextareaElement>)=>void, 
    label : string
  }

function Textarea(props : CheckboxProps) { 
  const { value, onChange, label} = props;

  return (
    <div>
      <label for={label}>{label}:</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}

export {EventForm, MeetingForm, ReminderForm};
