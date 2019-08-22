// @flow

import {Entry} from './Entry.js';
import {Reminder} from './Reminder.js';

class Event extends Entry {
  _reminder : Reminder;

  // MODIFIES: this
  // EFFECTS: Set reminder
  set reminder(reminder: Reminder): void{
    this._reminder = reminder;
  };

  // EFFECTS: returns reminder
  get reminder(): Reminder{
    return this._reminder;
  };

}

export {Event};
