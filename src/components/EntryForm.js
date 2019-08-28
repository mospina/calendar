// @flow

import React, { Component } from 'react';
import {Entry} from '../model/Entry';

type EntryType = null | 'event' | 'meeting' | 'reminder';

type Props = {
  addEntry : (Entry) => void
}

type State = {
  entryType : ?EntryType
}

class EntryForm extends Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      entryType: null
    }
  }

  runAddEntry = (fn: (Entry)=>void) => {
    const entry = new Entry('2019-08-28', '10:00');
    fn(entry);
  }

  modifyEntryType = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({entryType: event.currentTarget.value});

    event.preventDefault();
  }

  selectFormComponent = (entryType: EntryType) => {
    switch (entryType) {
    case 'event':
      return (<EventForm />);
    case 'meeting':
      return (<MeetingForm />);
    case 'reminder':
      return (<ReminderForm />);
    default:
      return (<div></div>);
    }
  }

  render(){
    const {addEntry} = this.props;
    const {entryType} = this.state;

    return (
      <div className="entry-form">
        <div className="form-menu">
          <button 
            value="event"
            onClick={this.modifyEntryType}
            type="button">
              Add Event
          </button>
          <button 
            value="meeting"
            onClick={this.modifyEntryType}
            type="button">
              Add Meeting
          </button>
          <button 
            value="reminder"
            onClick={this.modifyEntryType}
            type="button">
              Add Reminder
          </button>
          <button 
            onClick={() => this.runAddEntry(addEntry)}
            type="button">
              Add entry
          </button>
        </div>
        <div className="form">
        { this.selectFormComponent(entryType) }
        </div>
      </div>
    );
  }; 
}

const EventForm = (props) => (<div>Event</div>)
const MeetingForm = (props) => (<div>Meeting</div>)
const ReminderForm = (props) => (<div>Reminder</div>)

export {EntryForm};
