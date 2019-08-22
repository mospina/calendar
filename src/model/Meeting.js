// @flow

import {Event} from './Event.js';

class Meeting extends Event{
  _attendees : Array<string>;

  //constructor {super something, initilize empty array}
  constructor(date: string, time: string): void{
    super(date, time);
    this._attendees = []
  };
  
  // EFFECTS: returns list of attendee
  get attendees(): Array<string>{
    return this._attendees
  };

  // REQUIRES: attendee to be a valid email
  // MODIFIES: this
  // EFFECTS: add attendee to the list
  addAttendee(attendee: string): void{
    if (!this._attendees.includes(attendee)){
      this._attendees.push(attendee)
    };
  };

  // REQUIRES: attendee to be a valid email
  // MODIFIES: this
  // EFFECTS: remove attendee from the list
  removeAttendee(attendee: string): void{
    let temp = [];
    this._attendees.reduce(
      (acc, item) => {
        if (item != attendee) {
          acc.push(item)
        }
        return acc
      }, 
      temp
    )
    this._attendees = temp
  };

  // REQUIRES: a function that received an email as argument
  // EFFECTS: use fn to send email to each attendee
  sendInvites(fn: (string) => void): void{
    this._attendees.forEach(fn);
  };
}

export {Meeting}
