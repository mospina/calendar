// @flow

import React, { Component } from 'react';
import {Entry} from '../model/Entry';
import {EventForm, MeetingForm, ReminderForm} from './EntryFormTypes';

type EntryType = null | 'event' | 'meeting' | 'reminder';

type Props = {
  addEntry : (Entry)=>void
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

  runAddEntry = (entry : Entry, fn : (Entry)=>void) => {
    this.setState({entryType: null});
    fn(entry);
  }

  modifyEntryType = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({entryType: event.currentTarget.value});

    event.preventDefault();
  }

  selectFormComponent = (entryType: EntryType, addEntryFn : (Entry)=>void) => {
    switch (entryType) {
    case 'event':
      return (<EventForm />);
    case 'meeting':
      return (<MeetingForm />);
    case 'reminder':
      return (<ReminderForm createEntry={(entry) => this.runAddEntry(entry, addEntryFn)} />);
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
        </div>
        <div className="form">
        { this.selectFormComponent(entryType, addEntry) }
        </div>
      </div>
    );
  }; 
}

export {EntryForm};
